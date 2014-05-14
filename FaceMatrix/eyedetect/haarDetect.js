/**
 *  
 * Author: liuqiushan
 * Date: 13-8-25
 * Time: 2:50 pm
 *  
 */
//img is a two-dimensional array with (rows, columns), and it saves each pixel's gray value.
function haarDetect(img, cascade, scale_factor) {
    var rows = img.length;
    var cols = img[0].length;

    var result_rect = [];

    var sum = new Array(rows);
    var sqsum = new Array(rows);
    var tilted = new Array(rows);
    var i, j;
    for(i = 0; i < rows; i++) {
        sum[i] = new Array(cols);
        sqsum[i] = new Array(cols);
        tilted[i] = new Array(cols);
        for(j = 0; j < cols; j++) {
            sum[i][j] = 0;
            tilted[i][j] = 0;
            sqsum[i][j] = 0;
        }
    }

    //build the integral image
    integral(img, sum, tilted, sqsum);

    var factor;
    var ystep;
    var win_size, stop_height, stop_width, weight_scale;
    var _iy, iy, _ix, ix, result;
    var equ_rect = new Rect(0, 0, 0, 0);

	// Extend the size of detect window bit by bit
	// Smaller scale_factor, more precise detection. We define it 1.2 generally.
    for(factor = 1; 
		factor*cascade.orig_window_size.width<cols-10 && factor*cascade.orig_window_size.height<rows-10; 
		factor *= scale_factor) {

		//the step size of window movement
		//the bigger the detection window, the bigger the step size
        ystep = Math.max(2, factor);

        win_size = new WindowSize(Math.round(cascade.orig_window_size.width * factor),
                                    Math.round(cascade.orig_window_size.height * factor));

		//define the boundary of movement
        stop_height = Math.round((rows - win_size.height) / ystep);
        stop_width = Math.round((cols - win_size.width) / ystep);

        equ_rect.x = equ_rect.y = Math.round(factor);
        equ_rect.width = Math.round((cascade.orig_window_size.width - 2) * factor);
        equ_rect.height = Math.round((cascade.orig_window_size.height - 2) * factor);
        weight_scale = 1.0 / (equ_rect.width * equ_rect.height);

		//scanning
        for(_iy = 0; _iy < stop_height; _iy++) {

            iy = Math.round(_iy * ystep);

            for(_ix = 0; _ix < stop_width; _ix++) {

                ix = Math.round(_ix * ystep);

                result = runHaarClassifierCascade(cascade, ix, iy, 0, factor, weight_scale, sum, tilted, sqsum, rows, equ_rect);

                if(result > 0)
                    result_rect.push(new Rect(ix, iy, win_size.width, win_size.height));

            }
        }
    }

    return result_rect;

}

/**
 *
 * calculate the sum of gray value in terms of integral
 * O(n^3)
 *
 **/
function integral(img, sum, tilted, sqsum) {
    var i, j, l;
    //sum
    sum[0][0] = img[0][0];
    for(i = 1; i < img.length; i++)
        sum[i][0] = sum[i-1][0] + img[i][0];
	
    for(i = 0; i < img.length; i++)
        for(j = 1; j < img[0].length; j++) {
            sum[i][j] = sum[i][j-1];
            for(l = 0; l <= i; l++) {
                sum[i][j] += img[l][j];
            }
        }
	
	
	/*sum[0][0] = img[0][0];
    for(i = 1; i < img.length; i++)
        sum[i][0] = sum[i-1][0] + img[i][0];
	
	for(j = 1; j < img[0].length; j++)
        sum[0][j] = sum[0][j-1] + img[0][j];

    for(i = 1; i < img.length; i++)
        for(j = 1; j < img[0].length; j++)
			sum[i][j] = sum[i][j-1] + sum[i-1][j] - sum[i-1][j-1];*/

    //sqsum
	
    sqsum[0][0] = img[0][0] * img[0][0];
    for(i = 1; i < img.length; i++)
        sqsum[i][0] = sqsum[i-1][0] + img[i][0] * img[i][0];

    for(i = 0; i < img.length; i++)
        for(j = 1; j < img[0].length; j++) {
            sqsum[i][j] = sqsum[i][j-1];
            for(l = 0; l <= i; l++) {
                sqsum[i][j] = sqsum[i][j] + img[l][j] * img[l][j];
            }
        }
	
	/*sqsum[0][0] = img[0][0] * img[0][0];
    for(i = 1; i < img.length; i++)
        sqsum[i][0] = sqsum[i-1][0] + img[i][0] * img[i][0];
		
	for(j = 1; j < img[0].length; j++)
        sqsum[0][j] = sqsum[0][j-1] + img[0][j] * img[0][j];

    for(i = 1; i < img.length; i++)
        for(j = 1; j < img[0].length; j++)
           sqsum[i][j] = sqsum[i][j-1] + sqsum[i-1][j] - sqsum[i-1][j-1];*/

    //tilted
    var part_0, part_1, part_2, part_3, part_4;
    for(j = 0; j < img[0].length; j++)
        tilted[0][j] = img[0][j];
		
    for(i = 1; i < img.length; i++) {
        for(j = 0; j < img[0].length; j++) {
            if(j-1 < 0)
                part_0 = 0;
            else
                part_0 = tilted[i-1][j-1];

            if(j+1 == img[0].length)
                part_1 = 0;
            else
                part_1 = tilted[i-1][j+1];

            if(i-2 < 0)
                part_2 = 0;
            else
                part_2 = tilted[i-2][j];

            part_3 = img[i][j];

            part_4 = img[i-1][j];

            tilted[i][j] = part_0 + part_1 - part_2 + part_3 + part_4;
        }
    }
}

function runHaarClassifierCascade(cascade, ix, iy, start_stage, factor, weight_scale, sum, tilted, sqsum, rows, equ_rect) {

    var variance_norm_factor, mean;
    mean = calc_sum(equ_rect, ix, iy, sum, rows) * weight_scale;
    variance_norm_factor = calc_sqsum(equ_rect, ix, iy, sqsum);
    variance_norm_factor = variance_norm_factor * weight_scale - mean * mean;
    if(variance_norm_factor >= 0.0)
        variance_norm_factor = Math.sqrt(variance_norm_factor);
    else
        variance_norm_factor = 1.0;

    var result = -1;
    var i, j;
    for(i = start_stage; i < cascade.count; i++) {

        var stage_sum = 0;

        for(j = 0; j < cascade.stage_classifier[i].count; j++)
            stage_sum += evalHidHaarClassifier(cascade.stage_classifier[i].classifier[j], ix, iy, factor, weight_scale, sum, tilted, rows, variance_norm_factor);

        if(stage_sum < cascade.stage_classifier[i].threshold) {
            result = -1;
            return result;
        }

    }

    result = 1;
    return result;

}

function evalHidHaarClassifier(classifier, ix, iy, factor, weight_scale, sum, tilted, rows, variance_norm_factor) {

    var i, j, k, feature;

    var hid_feature = new Array(classifier.count);
    var r = new Array(3);

    for(i = 0; i < classifier.count; i++) {
        feature = classifier.haar_feature[i];
        hid_feature[i] = new HidFeature(feature.tilted, feature.rect.length);

        var base_w = -1, base_h = -1;
        var kx, ky;
        var flagx = 0, flagy = 0;
        var new_base_w = 0, new_base_h = 0;
        var x0 = 0, y0 = 0;
        var area0 = 0, sum0 = 0;

        for(j = 0; j < feature.rect.length; j++) {
            r[j] = feature.rect[j].r;
            base_w = (Math.min(base_w>>>0, (r[j].width-1)>>>0)) << 0;
            base_w = (Math.min(base_w>>>0, (r[j].x-r[0].x-1)>>>0)) << 0;
            base_h = (Math.min(base_h>>>0, (r[j].height-1)>>>0)) << 0;
            base_h = (Math.min(base_h>>>0, (r[j].y-r[0].y-1)>>>0)) << 0;
        }

        base_w += 1;
        base_h += 1;
        kx = r[0].width / base_w;
        ky = r[0].height / base_h;

        if(kx <= 0) {
            flagx = 1;
            new_base_w = Math.round(r[0].width * factor) / kx;
            x0 = Math.round(r[0].x * factor);
        }

        if(ky <= 0) {
            flagy = 1;
            new_base_h = Math.round(r[0].height * factor) / ky;
            y0 = Math.round(r[0].y * factor);
        }

        for(k = 0; k < feature.rect.length; k++) {
            var tr = new Rect(0, 0, 0, 0);
            var correction_ratio;

            if(flagx) {
                tr.x = Math.round((r[k].x - r[0].x) * new_base_w / base_w) + x0;
                tr.width = r[k].width * new_base_w / base_w;
            } else {
                tr.x = Math.round(r[k].x * factor);
                tr.width = Math.round(r[k].width * factor);
            }

            if(flagy) {
                tr.y = Math.round((r[k].y - r[0].y) * new_base_h / base_h) + y0;
                tr.height = r[k].height * new_base_h / base_h;
            } else {
                tr.y = Math.round(r[k].y * factor);
                tr.height = Math.round(r[k].height * factor);
            }

            hid_feature[i].rect[k].r = tr;

            correction_ratio = weight_scale * (!feature.tilted ? 1 : 0.5);

            hid_feature[i].rect[k].weight = feature.rect[k].weight * correction_ratio;

            if(k == 0)
                area0 = tr.width * tr.height;
            else
                sum0 += hid_feature[i].rect[k].weight * tr.width * tr.height;
        }

        hid_feature[i].rect[0].weight = -sum0 / area0;
    }

    var idx = 0;
    var eigenvalue, t, left, right, hfeature;
    do {

        hfeature = hid_feature[idx];
        t = classifier.threshold[idx] * variance_norm_factor;
        left = classifier.left[idx];
        right = classifier.right[idx];

        if(hfeature.tilted == 0) {

            eigenvalue = calc_sum(hfeature.rect[0].r, ix, iy, sum, rows) * hfeature.rect[0].weight;
            eigenvalue += calc_sum(hfeature.rect[1].r, ix, iy, sum, rows) * hfeature.rect[1].weight;

            if(hfeature.rect[2])
                eigenvalue += calc_sum(hfeature.rect[2].r, ix, iy, sum, rows) * hfeature.rect[2].weight;

        } else {

            eigenvalue = calc_tilted(hfeature.rect[0].r, ix, iy, tilted, rows) * hfeature.rect[0].weight;
            eigenvalue += calc_tilted(hfeature.rect[1].r, ix, iy, tilted, rows) * hfeature.rect[1].weight;

            if(hfeature.rect[2])
                eigenvalue += calc_tilted(hfeature.rect[2].r, ix, iy, tilted, rows) * hfeature.rect[2].weight;

        }

        idx = eigenvalue < t ? left : right;

    } while(idx > 0);

    return classifier.alpha[-idx];
}

/**
 *
 * calculate the rect's gray value sum using the integral image
 *
 **/
function calc_sum(rect, ix, iy, sum, rows) {

    var eigenvalue; //it is the sum of gray value in the rect area
    var p0, p1, p2, p3;

    p0 = sum[iy + rect.y][ix + rect.x]; //up left

    p1 = sum[iy + rect.y][ix + rect.x + rect.width]; //up right

	if((iy + rect.y + rect.height) >= rows)
		p2 = 0;
	else
		p2 = sum[iy + rect.y + rect.height][ix + rect.x]; //low left

	if((iy + rect.y + rect.height) >= rows)
		p3 = 0;
	else
		p3 = sum[iy + rect.y + rect.height][ix + rect.x + rect.width]; //low right

    eigenvalue = p0 + p3 - p1 - p2;

    return eigenvalue;
}

function calc_sqsum(rect, ix, iy, sqsum) {

    var eigenvalue;
    var p0, p1, p2, p3;

    p0 = sqsum[iy + rect.y][ix + rect.x];

    p1 = sqsum[iy + rect.y][ix + rect.x + rect.width];

    p2 = sqsum[iy + rect.y + rect.height][ix + rect.x];

    p3 = sqsum[iy + rect.y + rect.height][ix + rect.x + rect.width];

    eigenvalue = p0 + p3 - p1 - p2;

    return eigenvalue;

}

function calc_tilted(rect, ix, iy, tilted, rows) {

    var eigenvalue;
    var p0, p1, p2, p3;

    if(( iy + rect.y + rect.width) >= rows)
        p2 = 0;
    else
        p2 = tilted[iy + rect.y + rect.width][ix + rect.x + rect.width];

    if((iy + rect.y + rect.width + rect.height) >= rows || (ix + rect.x + rect.width - rect.height) < 0)
        p3 = 0;
    else
        p3 = tilted[iy + rect.y + rect.width + rect.height][ix + rect.x + rect.width - rect.height];

    p0 = tilted[iy + rect.y][ix + rect.x];

    if((ix + rect.x - rect.height) < 0)
        p1 = 0;
    else
        p1 = tilted[iy + rect.y + rect.height][ix + rect.x - rect.height];

    eigenvalue = p0 + p3 - p1 - p2;

    return eigenvalue;
}

function HidFeature(tilted, count) {
    this.tilted = tilted;
    this.rect = new Array(count);
    var i;
    for(i = 0; i < count; i++)
        this.rect[i] = new RectWithWeight(0, null);
}

function RectWithWeight(weight, r) {
    this.weight = weight;
    this.r = r;
}