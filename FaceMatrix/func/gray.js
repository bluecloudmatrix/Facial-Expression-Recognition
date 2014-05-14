/**
 * 灰度化
 * 2013/8/26 18:27pm
 **/
(function() {

	var namespace = FACEMATRIX.namespace('FACEMATRIX.func');
	
	if(namespace.gray === undefined) {
	
		namespace.gray = function(context, x, y, W, H) {
		
			var img_u8_1;
			img_u8_1 = new jsfeat.matrix_t(W, H, jsfeat.U8C1_t);
	
			var gCanvasDataBuffer = new ArrayBuffer();
			var gCanvasData = new Int8Array(gCanvasDataBuffer);
	
			gCanvasData = context.getImageData(x, y, W, H);
	
			jsfeat.imgproc.grayscale(gCanvasData.data, img_u8_1.data);
			
			// render result back to canvas
			var data_u32 = new Uint32Array(gCanvasData.data.buffer);
			var alpha = (0xff << 24);
			var i = img_u8_1.cols*img_u8_1.rows, pix = 0;
			while(--i >= 0) {
				pix = img_u8_1.data[i];
				data_u32[i] = alpha | (pix << 16) | (pix << 8) | pix;
			}
			
			return gCanvasData;
		}
		
	}

}) ();