/**
 * 图像二值化处理
 * 2013/8/24 3:57am
 **/
(function() {

    var namespace = FACEMATRIX.namespace('FACEMATRIX.func');

    if(namespace.binary === undefined) {

        namespace.binary = function(context, x, y, width, height, W, H) {
		
			var bCanvas = document.createElement('canvas');
			bCanvas.width = W;
			bCanvas.height = H;

            var gCanvasDataBuffer = new ArrayBuffer();
            var gCanvasData = new Int8Array(gCanvasDataBuffer);

            gCanvasData = context.getImageData(0, 0, W, H);
			
			var bContext = bCanvas.getContext("2d");
			bContext.putImageData(gCanvasData, 0, 0);
			
			var bCanvasDataBuffer = new ArrayBuffer();
			var bCanvasData = new Int8Array(bCanvasDataBuffer);
			
			bCanvasData = bContext.getImageData(0, 0, W, H);

			//gray
            var i, j, idx, r, g, b, gray;
            for(i = y; i < y + height; i++) {
                for(j = x; j < x + width; j++) {
                    idx = (i * W + j) * 4;
                    r = gCanvasData.data[idx + 0];
					g = gCanvasData.data[idx + 1];
					b = gCanvasData.data[idx + 2];
					
					gray = 0.299 * r + 0.587 * g + 0.114 * b;
					
					gCanvasData.data[idx + 0] = gray;
					gCanvasData.data[idx + 1] = gray;
					gCanvasData.data[idx + 2] = gray;
					gCanvasData.data[idx + 3] = 255;
                }
            }
			
			//binary
			var sumGray = 0,
				avgGray = 0;
			var numPixels = width * height;
			var targetGray;
			for(i = y; i < y + height; i++) {
				for(j = x; j < x + width; j++) {
					idx = (i * W + j) * 4;
					targetGray = gCanvasData.data[idx];
					sumGray += targetGray;
				}
			}
			
			avgGray = sumGray / numPixels;
			
			var tGray;
			for(i = y; i < y + height; i++) {
				for(j = x; j < x + width; j++) {
					idx = (i * W + j) * 4;
					tGray = gCanvasData.data[idx];
					
					//compare
					if(tGray > avgGray) {
						bCanvasData.data[idx + 0] = 255; 
                        bCanvasData.data[idx + 1] = 255; 
                        bCanvasData.data[idx + 2] = 255; 
                        bCanvasData.data[idx + 3] = 255;
					} else {
						bCanvasData.data[idx + 0] = 0; 
                        bCanvasData.data[idx + 1] = 0; 
                        bCanvasData.data[idx + 2] = 0; 
                        bCanvasData.data[idx + 3] = 255;
					}
				}
			}
			/*
			//calculate the cross average
			var idxleft, idxup, idx, idxright, idxbelow;
			var idxleftGray, idxupGray, idxGray, idxrightGray, idxbelowGray, avgCross;
			for(i = y; i < y + height; i++) {
				for(j = x; j < x + width; j++) {
					idxleft = (i * W + j - 1) * 4;
					idxup = ((i - 1) * W + j) * 4;
					idx = (i * W + j) * 4;
					idxright = (i * W + j + 1) * 4;
					idxbelow = ((i + 1) * W + j) * 4;
					
					idxleftGray = gCanvasData.data[idxleft];
					idxupGray = gCanvasData.data[idxup];
					idxGray = gCanvasData.data[idx];
					idxrightGray = gCanvasData.data[idxright];
					idxbelowGray = gCanvasData.data[idxbelow];
					
					avgCross = (idxleftGray + idxupGray + idxGray + idxrightGray + idxbelowGray) / 5;
					
					//compare
					if(avgCross > avgGray) {	
						bCanvasData.data[idx + 0] = 255; 
                        bCanvasData.data[idx + 1] = 255; 
                        bCanvasData.data[idx + 2] = 255; 
                        bCanvasData.data[idx + 3] = 255;
					}
				}
			}
			
			//calculate the matrix average
			var blackPoints = 0, targetpoint, tarBinary, tarGray;
			var sumGrayMatrix, avgGrayMatrix, ii, jj;
			for(i = y + 3; i < y + height - 3; i++) {
				for(j = x + 3; j < x + width - 3; j++) {
					targetpoint = (i * W + j) * 4;
					tarBinary = bCanvasData.data[targetpoint];
					tarGray = gCanvasData.data[targetpoint];
					if(tarBinary != 255) {
						sumGrayMatrix = 0;
						avgGrayMatrix = 0;
						for(ii = i - 3; ii <= i + 3; ii++) {
							for(jj = j - 3; jj <= j + 3; jj++) {
								idx = (ii * W + jj) * 4;
								idxGray = gCanvasData.data[idx];
								sumGrayMatrix += idxGray;
							}
						}
						avgGrayMatrix = sumGrayMatrix / 49;
						
						//compare
						if(avgGrayMatrix > tarGray) {
							bCanvasData.data[targetpoint + 0] = 0; 
                            bCanvasData.data[targetpoint + 1] = 0; 
                            bCanvasData.data[targetpoint + 2] = 0; 
                            bCanvasData.data[targetpoint + 3] = 255;
                            blackPoints++;
						} else {
							bCanvasData.data[targetpoint + 0] = 255; 
                            bCanvasData.data[targetpoint + 1] = 255; 
                            bCanvasData.data[targetpoint + 2] = 255; 
                            bCanvasData.data[targetpoint + 3] = 255; 
						}
					}
				}
			}
			
			var balance = blackPoints / (width * height);
			var wports, bports;
			var susT, susTGray;
			for(i = y; i < y + height; i++) {
				for(j = x; j < x + width; j++) {
					idx = (i * W + j) * 4;
					idxGray = bCanvasData.data[idx];
					wports = 0;
					bports = 0;
					
					for(ii = i - 1; ii <= i + 1; ii++) {
						for(jj = j - 1; jj <= j + 1; jj++) {
							susT = (ii * W + jj) * 4;
							susTGray = bCanvasData.data[susT];
							if(jj != j && ii != i) {
								if(susTGray == 0) {
									bports++;
								} else {
									wports++;
								}
							}
						}
					}
					
					if(balance < 0.25) {
						if(bports >= 3) {
							bCanvasData.data[idx + 0] = 0;
                            bCanvasData.data[idx + 1] = 0; 
                            bCanvasData.data[idx + 2] = 0;
                            bCanvasData.data[idx + 3] = 255;
						} else if(wports >= 4) {
							bCanvasData.data[idx + 0] = 255;
                            bCanvasData.data[idx + 1] = 255; 
                            bCanvasData.data[idx + 2] = 255;
                            bCanvasData.data[idx + 3] = 255;
						}
					} else {
						if(bports >= 4) {
							bCanvasData.data[idx + 0] = 0;
                            bCanvasData.data[idx + 1] = 0; 
                            bCanvasData.data[idx + 2] = 0;
                            bCanvasData.data[idx + 3] = 255;
						} else if(wports >= 3) {
							bCanvasData.data[idx + 0] = 255;
                            bCanvasData.data[idx + 1] = 255; 
                            bCanvasData.data[idx + 2] = 255;
                            bCanvasData.data[idx + 3] = 255;
						}
					}
				}
			}*/
	
			context.putImageData(bCanvasData, 0, 0);
			
        }

    }

}) ();