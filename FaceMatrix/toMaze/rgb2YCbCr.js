/**
 * RGB转化为YCbCr颜色空间
 * 2013/8/15
 **/
(function() {
	
	var namespace = FACEMATRIX.namespace('FACEMATRIX.toMaze');
	
	if(namespace.rgb2YCbCr === undefined) {
		
		namespace.rgb2YCbCr = function(r, g, b, YCbCr, idx) {
			
			var Y = 0.2990 * r + 0.5870 * g + 0.1140 * b + 0 * 1;
			var Cb = (-0.1687) * r + (-0.3313) * g + 0.5000 * b + 128 * 1;
			var Cr = 0.5000 * r + (-0.4187) * g + (-0.0813) * b + 128 * 1;
			
			//下面的转化效果差
			/*var Y = 0.2990 * r + 0.5870 * g + 0.1140 * b;
			var Cb, Cr;
			if(Y < 200) {
				Cr = (r - Y) * 0.713;
				Cb = (b - Y) * 0.564;
			}else {
				Cr = (Math.pow((r-Y), 2) * 0.713)*((-1)*(5000/91)*(Math.pow((Y-200), -2))+7);
				Cb = ((-1)*(Math.pow((b-Y), 2))*0.564)*(125*(Math.pow((Y-200), -2))-3);
			}*/
				
			
			
			YCbCr[idx + 0] = Y;
			YCbCr[idx + 1] = Cb;
			YCbCr[idx + 2] = Cr;
			YCbCr[idx + 3] = 0;
			
		}
		
	}
	
}) ();