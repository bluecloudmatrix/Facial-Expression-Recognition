/**
 * 根据肤色模型统计数据进行肤色判断
 * 2013/8/15
 * authot@liuqiushan
 **/
(function() {
	
	var namespace = FACEMATRIX.namespace('FACEMATRIX.toMaze');
	
	if(namespace.judgeSkin === undefined) {
		
		namespace.judgeSkin = function (YCbCr, imgData) {
		
			var i, j, idx, Y, Cb, Cr;
			for(i = 0; i < imgData.height; i++) {
				for(j = 0; j < imgData.width; j++) {
				
					idx = (i*imgData.width + j) * 4;
					Y = YCbCr[idx + 0];
					Cb = YCbCr[idx + 1];
					Cr = YCbCr[idx + 2];
					
					//console.log(Y);
					//console.log(Cb);
					//console.log(Cr);
					
					//光照强，Y分量趋于255, 导致Cb和Cr同时趋于0，分辨差（Y超过200时，Cb和Cr开始变化）
					if(Y >= 32 && Y <= 240 && Cb >= 90 && Cb <= 118 && Cr >=140 && Cr <= 170) {
						imgData.data[idx + 0] = 255;
						imgData.data[idx + 1] = 255;
						imgData.data[idx + 2] = 255;
						imgData.data[idx + 3] = 255;
					} else {	
						imgData.data[idx + 0] = 0;
						imgData.data[idx + 1] = 0;
						imgData.data[idx + 2] = 0;
						imgData.data[idx + 3] = 255;
					}
				}
			}	
		}
		
	}
	
}) ();