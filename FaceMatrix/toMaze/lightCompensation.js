/**
 * 光照补偿
 * 2013/8/15
 * authot@liuqiushan
 **/
(function() {
	
	var namespace = FACEMATRIX.namespace('FACEMATRIX.toMaze');
	
	if(namespace.lightCompensation === undefined) {
		
		namespace.lightCompensation = function(gCanvas, gContext) {
			//每个像素包含i, j, gray三个属性
			var pix = new Array(gCanvas.height * gCanvas.width);

			var imgData = gContext.getImageData(0, 0, gCanvas.width, gCanvas.height);
			
			var i, j, idx, sum = 0;
			var r, g, b, gray;
			for(i = 0; i < gCanvas.height; i++) {
				for(j = 0; j < gCanvas.width; j++) {
					idx = (i * gCanvas.width + j) * 4;
					//求像素点的亮度值
					r = imgData.data[idx + 0];
					g = imgData.data[idx + 1];
					b = imgData.data[idx + 2];
					
					gray = r * 0.299 + g * 0.587 + b * 0.114;
					
					pix[i*gCanvas.width+j] = {};
					
					pix[i*gCanvas.width+j].i = i;
					pix[i*gCanvas.width+j].j = j;
					pix[i*gCanvas.width+j].gray = gray;
					
					sum += gray;
				}
			}
			
			//求平均亮度灰度值
			var avg = sum / (gCanvas.width * gCanvas.height);
			var threshold = 128;
			var last;
			//光照补偿
			if(avg < threshold) {
			
				FACEMATRIX.toMaze.quick_sort(pix, 0, pix.length-1);
				
				last = Math.round(pix.length * 0.95);
				
				FACEMATRIX.toMaze.adjustRGB(imgData, pix, last);
				
			}
			
			gContext.putImageData(imgData, 0, 0);
		}
		
	}
	
}) ();