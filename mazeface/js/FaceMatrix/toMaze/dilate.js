/**
 * 膨胀处理
 * 2013/8/15
 **/
(function() {
	
	var namespace = FACEMATRIX.namespace('FACEMATRIX.toMaze');
	
	if(namespace.dilate === undefined) {
	
		namespace.dilate = function(imgData) {
			
			//保留一份canvas数据
			var arrayBuffer = new ArrayBuffer(imgData.data.length);
			var preImg = new Uint8Array(arrayBuffer);
			
			var i, j, idx;
			var height = imgData.height,
				width = imgData.width;
			for(i = 0; i < height; i++) {
				for(j = 0; j < width; j++) {
					idx = (i * width + j) * 4;
					preImg[idx + 0] = imgData.data[idx + 0];
					preImg[idx + 1] = imgData.data[idx + 1];
					preImg[idx + 2] = imgData.data[idx + 2];
					preImg[idx + 3] = imgData.data[idx + 3];
				}
			}
			
			var offsetl, newOffset, total, x, y, offsetY, nowX, nowOffset;
			var size = 3;
			for(i = height; i--;) {
				offsetl = i * width;	
				for(j = width; j--;) {
					newOffset = 0;
					total = 0;
					//3x3区域
					for(y = size; y--;) {
						offsetY = (y + i) * width * 4;
						for(x = size; x--;) {
							nowX = (x + j) * 4;
							nowOffset = offsetY + nowX;
							
							(preImg[nowOffset] + preImg[nowOffset + 1] + preImg[nowOffset + 2] > total) &&
							(total = preImg[nowOffset] + preImg[nowOffset + 1] + preImg[nowOffset + 2]) &&
							(newOffset = nowOffset)
							
						}
					}
					
					imgData.data[(j+offsetl)*4] = preImg[newOffset];
					imgData.data[(j+offsetl)*4+1] = preImg[newOffset+1];
					imgData.data[(j+offsetl)*4+2] = preImg[newOffset+2];
					imgData.data[(j+offsetl)*4+3] = preImg[newOffset+3];
				}
			}
		}
	
	}
	
}) ();