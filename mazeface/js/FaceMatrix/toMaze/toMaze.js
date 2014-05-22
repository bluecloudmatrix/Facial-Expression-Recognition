/**
 * 响应按钮Convert事件
 * 用于利用已经判断出的信息（人眼状态和人脸椭圆）生成迷宫矩阵
 * 2013/8/14
 **/
(function() {

	var namespace = FACEMATRIX.namespace('FACEMATRIX.toMaze');
	
	if(namespace.toMaze === undefined) {
		
		namespace.toMaze = function() {
			$('#b2').hide();
			$('#show').hide();
			$('#scen3').fadeIn();
			
			/* generate matrix and show it */
			var GenerateMatrix = new FACEMATRIX.toMaze.MazeMatrix(GLOBALTOM.MATRIX, GLOBALTOM.HAIREDGE, GLOBALTOM.MOUTH, GLOBALTOM.EYE);
			
			GenerateMatrix.getHairEdge();
			
			GenerateMatrix.skin();
			
			GenerateMatrix.canny();
			
			GenerateMatrix.showMaze();
			//alert(GLOBALTOM.MATRIX.mapMatrix);

			sendMaze();
		}
		
	}
	
}) ();

function sendMaze() {
	var matrixString = '';
	var matrixHeight = GLOBALTOM.MATRIX.height;
	var matrixWidth = GLOBALTOM.MATRIX.width;	
	var matrix_x = GLOBALTOM.MATRIX.x;
	var matrix_y = GLOBALTOM.MATRIX.y;
	
	var eye_x = GLOBALTOM.EYE.x;
	var eye_y = GLOBALTOM.EYE.y;
	var eyeEntrance_x = GLOBALTOM.EYE.entrance.x;
	var eyeEntrance_y = GLOBALTOM.EYE.entrance.y;
	var eyePass_x = GLOBALTOM.EYE.gatePass.x;
	var eyePass_y = GLOBALTOM.EYE.gatePass.y;
	var eyePortal_x = GLOBALTOM.EYE.portal.x;
	var eyePortal_y = GLOBALTOM.EYE.portal.y;
	
	var mouth_x = GLOBALTOM.MOUTH.x;
	var mouth_y = GLOBALTOM.MOUTH.y;
	var mouthEntrance_x = GLOBALTOM.MOUTH.entrance.x;
	var mouthEntrance_y = GLOBALTOM.MOUTH.entrance.y;
	var mouthPass_x = GLOBALTOM.MOUTH.gatePass.x;
	var mouthPass_y = GLOBALTOM.MOUTH.gatePass.y;
	var mouthPortal_x = GLOBALTOM.MOUTH.portal.x;
	var mouthPortal_y = GLOBALTOM.MOUTH.portal.y;
	
	for(i = 0; i < GLOBALTOM.MATRIX.height; i++){
		for(j = 0; j < GLOBALTOM.MATRIX.width; j++){
			matrixString += GLOBALTOM.MATRIX.mapMatrix[i][j];
		}
	}
	//console.log(matrixString);
	var url = "createRoom";
	$.post("createRoom.action?username=lululu",
		{
			matrix:matrixString,
			height:matrixHeight,
			width:matrixWidth,
			matrix_x:matrix_x,
			matrix_y:matrix_y,	
			
			eye_x:eye_x,
			eye_y:eye_y,
			eyeEntrance_x:eyeEntrance_x,
			eyeEntrance_y:eyeEntrance_y,
			eyePass_x:eyePass_x,
			eyePass_y:eyePass_y,
			eyePortal_x:eyePortal_x,
			eyePortal_y:eyePortal_y,	
			
			mouth_x:mouth_x,
			mouth_y:mouth_y,
			mouthEntrance_x:mouthEntrance_x,
			mouthEntrance_y:mouthEntrance_y,
			mouthPass_x:mouthPass_x,
			mouthPass_y:mouthPass_y,
			mouthPortal_x:mouthPortal_x,
			mouthPortal_y:mouthPortal_y
	},function(data){/*alert(data);*/},"text"); 
}