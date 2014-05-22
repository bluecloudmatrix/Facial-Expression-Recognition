/**
 * 调整亮度
 * 2013/8/15
 **/
(function() {
	
	var namespace = FACEMATRIX.namespace('FACEMATRIX.toMaze');
	
	if(namespace.adjustRGB === undefined) {
		
		namespace.adjustRGB = function(imgData, pix, last) {
			var m, idx, sum = 0;
			for(m = last; m < pix.length; m++) {
			
				sum += pix[m].gray;
			
				idx = (pix[m].i * imgData.width + pix[m].j) * 4;
				imgData.data[idx + 0] = 255;
				imgData.data[idx + 1] = 255;
				imgData.data[idx + 2] = 255;
				
			}
			
			var avg = sum / (pix.length - last);
			
			var factor = 255 / avg; //光照补偿系数

			for(m = 0; m < last; m++) {
				
				idx = (pix[m].i * imgData.width + pix[m].j) * 4;
				imgData.data[idx + 0] = Math.round(imgData.data[idx + 0] * factor);
				imgData.data[idx + 1] = Math.round(imgData.data[idx + 1] * factor);
				imgData.data[idx + 2] = Math.round(imgData.data[idx + 2] * factor);
			
			}
		}
		
	}

}) ();