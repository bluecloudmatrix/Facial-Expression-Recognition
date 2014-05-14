/**
 * 人脸矩阵和眼睛模板迷宫的空矩阵相与，去除因为和头发矩阵相或留下的眼部轮廓区域
 * 0(background) & 2(wall) = 0
 * 2013/8/27 10:51am
 **/
(function() {

	var namespace = FACEMATRIX.namespace('FACEMATRIX.toMaze');
	
	if(namespace.AND === undefined) {
	
		namespace.AND = function(mapMatrix, emptyMatrix, global_x, x, global_y, y, width, height) {
		
			//eyeEmptyMatrix一定在mapMatrix范围内
			var m = y - global_y;
			var n = x - global_x;
			
			var w = width,
				h = height;
			
			var i, j;
			for(i = m; i < h + m; i++) {
				for(j = n; j < w + n; j++) {
				
					if(mapMatrix[i][j] == 0 && emptyMatrix[i-m][j-n] == 0) 
						mapMatrix[i][j] = 0;
					else if(mapMatrix[i][j] != 0 && emptyMatrix[i-m][j-n] == 0)
						mapMatrix[i][j] = 0;

				}
			}
		
		}
	
	}

}) ();