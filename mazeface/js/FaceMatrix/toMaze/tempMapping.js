/**
 * 将模板迷宫二值化后的图片数据反映到矩阵上（眼睛和嘴巴）
 * 2013/8/27
 **/
(function() {

	var namespace = FACEMATRIX.namespace('FACEMATRIX.toMaze');
	
	if(namespace.tempMapping === undefined) {
	
		namespace.tempMapping = function(Matrix, CanvasData, flag) {
		
			var width = CanvasData.width;
			var height = CanvasData.height;

			var i, j, idx;
			for(i = 0; i < height; i++)
				for(j = 0; j < width; j++){
				
					idx = (i * width + j) * 4;
					if(CanvasData.data[idx] == 0)
						Matrix[i][j] = flag;

				}
		}
	
	}

}) ();