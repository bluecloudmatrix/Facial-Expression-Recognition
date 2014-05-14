/**
 * 侦测皮肤区域时清除嘴部和眼部区域
 * 2013/8/18
 **/
(function() {

	var namespace = FACEMATRIX.namespace('FACEMATRIX.toMaze');
	
	if(namespace.clearSkin === undefined) {
	
		namespace.clearSkin = function(imgData, x, y, width, height, W) {
		
			var i, j, idx;
			var w = x + width,
				h = y + height;
			//alert(y + "a" + x);
			for(i = y; i < h; i++) {
				for(j = x; j < w; j++) {
					idx = ( i * W + j) * 4;
					imgData.data[idx + 0] = 255;
					imgData.data[idx + 1] = 255;
					imgData.data[idx + 2] = 255;
				}
			}
			
		}
	
	}

}) ();
 