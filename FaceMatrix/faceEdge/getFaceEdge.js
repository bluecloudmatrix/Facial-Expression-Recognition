/**
 * 2013/8/14
 * use faceOval and GLOBALTOM.AppEyeArea to get the face edge
 *
 **/
(function() {
	
	var namespace = FACEMATRIX.namespace('FACEMATRIX.faceEdge');
	
	if(namespace.getFaceEdge === undefined) {
	
		namespace.getFaceEdge = function() {
			var canvas = document.getElementById("oval");
			var context = canvas.getContext("2d");
			context.globalAlpha = (Math.sin(0) + 0.8) / 1; 
			
			var x = GLOBALTOM.AppEyeArea.x + GLOBALTOM.AppEyeArea.width*0.5;
			var y = GLOBALTOM.AppEyeArea.y + GLOBALTOM.AppEyeArea.height*0.5;
			var a = GLOBALTOM.AppEyeArea.width*0.65;
			var b = GLOBALTOM.AppEyeArea.height*1.3;
						
			FACEMATRIX.faceEdge.faceOval.BezierEllipse(context, x, y, a, b);
			
			//寻找人脸椭圆外接矩形区域（人脸迷宫矩阵所在）
			GLOBALTOM.MATRIX.x = Math.round(x - a);
			GLOBALTOM.MATRIX.y = Math.round(y - b);
			GLOBALTOM.MATRIX.width = Math.round(2 * a);
			GLOBALTOM.MATRIX.height = Math.round(2 * b);
			GLOBALTOM.MATRIX.mapMatrix = new Array(GLOBALTOM.MATRIX.height);
			var i, j;
			for(i = 0; i < GLOBALTOM.MATRIX.height; i++) {
				GLOBALTOM.MATRIX.mapMatrix[i] = new Array(GLOBALTOM.MATRIX.width);
				for(j = 0; j < GLOBALTOM.MATRIX.width; j++)
					GLOBALTOM.MATRIX.mapMatrix[i][j] = 0;
			}
				
			//console.log(GLOBALTOM.MATRIX.width);
			//console.log(GLOBALTOM.MATRIX.height);
			
			//寻找头发轮廓区域（用于组合迷宫）
			GLOBALTOM.HAIREDGE.x = GLOBALTOM.MATRIX.x;
			GLOBALTOM.HAIREDGE.y = GLOBALTOM.MATRIX.y;
			GLOBALTOM.HAIREDGE.width = GLOBALTOM.MATRIX.width;
			GLOBALTOM.HAIREDGE.height = Math.round(GLOBALTOM.MATRIX.height * 0.5);
			GLOBALTOM.HAIREDGE.hairMatrix = new Array(GLOBALTOM.HAIREDGE.height);
			for(i = 0; i < GLOBALTOM.HAIREDGE.height; i++) {
				GLOBALTOM.HAIREDGE.hairMatrix[i] = new Array(GLOBALTOM.HAIREDGE.width);
				for(j = 0; j < GLOBALTOM.HAIREDGE.width; j++)
					GLOBALTOM.HAIREDGE.hairMatrix[i][j] = 0;
			}
			
		};
	}
	
}) ();