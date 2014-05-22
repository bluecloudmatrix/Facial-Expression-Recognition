/**
 * 人脸矩阵和头发边缘矩阵，眼睛模板迷宫矩阵，嘴巴和鼻子模板迷宫矩阵相或
 * 0(background) || 2(wall) = 2
 * 2013/8/17
 * authot@liuqiushan
 **/
(function () {

	var namespace = FACEMATRIX.namespace('FACEMATRIX.toMaze');
	
	if(namespace.OR === undefined) {
		
		namespace.OR = function(mapMatrix, Matrix, global_x, x, global_y, y, width, height, flag) {
			
			//Matrix一定在mapMatrix范围内
			var m = y - global_y;
			var n = x - global_x;
			
			var w = width,
				h = height;
			
			var i, j;
			for(i = m; i < h + m; i++) {
				for(j = n; j < w + n; j++) {
					if(mapMatrix[i][j] == 0 && Matrix[i-m][j-n] == 0)
						mapMatrix[i][j] = 0;
					else if(mapMatrix[i][j] == 0 && Matrix[i-m][j-n] == flag)
						mapMatrix[i][j] = flag;
					else if(mapMatrix[i][j] != 0 && Matrix[i-m][j-n] == 0)
						mapMatrix[i][j] = mapMatrix[i][j];
					else if(mapMatrix[i][j] != 0 && Matrix[i-m][j-n] == flag)
						mapMatrix[i][j] = flag;
				}
			}
			
		}
		
	}

}) ();