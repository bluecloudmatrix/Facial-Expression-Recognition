/**
 * 将眼睛迷宫从scene中remove
 * 2013/9/6
 **/
(function() {

	var namespace = GAMEVIEW.namespace('GAMEVIEW.sceneChange');
	
	if(namespace.eyeMazeRemove === undefined) {
		namespace.eyeMazeRemove = function() {

			//消除碰撞检测
			var i, j;
			for (i = 0; i < GLOBALTOM.MATRIX.height; i++)
				for (j = 0; j < GLOBALTOM.MATRIX.width; j++) 
					if(GLOBALTOM.MATRIX.mapMatrix[i][j] == 3) 
						arr[j][i] = 0;
					
			
			//将3D墙从scene中remove
			var x;
			for(x in blocks) {
				scene.remove(blocks[x]);
			}
		}
	}

}) ();