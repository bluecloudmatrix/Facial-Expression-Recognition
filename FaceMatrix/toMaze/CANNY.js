/**
 * canny边缘提取
 * 2013/8/17
 **/
(function() {

	var namespace = FACEMATRIX.namespace('FACEMATRIX.toMaze');
	
	if(namespace.CANNY === undefined) {
		
		namespace.CANNY = function(x, y, width, height, id) {
		
			var img_u8;
			img_u8 = new jsfeat.matrix_t(width, height, jsfeat.U8C1_t);
			
			var gCanvas = document.getElementById(id),
				gContext = gCanvas.getContext("2d");    
			
			var gCanvasDataBuffer = new ArrayBuffer(width * height),
				gCanvasData = new Int8Array(gCanvasDataBuffer);
			
			gCanvasData = gContext.getImageData(x, y, width, height);
			
			jsfeat.imgproc.grayscale(gCanvasData.data, img_u8.data);
			
			//var r = options.blur_radius|0;
			var r = 2;
			var kernel_size = (r+1) << 1;
			
			jsfeat.imgproc.gaussian_blur(img_u8, img_u8, kernel_size, 0);
		 
			//jsfeat.imgproc.canny(img_u8, img_u8, options.low_threshold|0, options.high_threshold|0);
			jsfeat.imgproc.canny(img_u8, img_u8, 20, 70);
			 
			// render result back to canvas
			var data_u32 = new Uint32Array(gCanvasData.data.buffer);
			var alpha = (0xff << 24);
			var i = img_u8.cols*img_u8.rows, pix = 0;
			while(--i >= 0) {
				pix = img_u8.data[i];
				data_u32[i] = alpha | (pix << 16) | (pix << 8) | pix;
			}
		
			return gCanvasData;
		}
		
	}
	
	
}) ();