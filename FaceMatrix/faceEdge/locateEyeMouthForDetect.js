/**
 * 寻找五官的位置
 * 2013/8/24 3:23am
 **/
(function() {

	var namespace = FACEMATRIX.namespace('FACEMATRIX.faceEdge');
	
	namespace.locateEyeMouthForDetect = function(App) {
		var i, j;
		
		//寻找眼睛的大致区域（用于眼睛状态识别）
		var m = 4,
			w = 4;
		GLOBALTOM.AppEyeArea.x = Math.round((App.comp[0].x - w / 2) * m);
		GLOBALTOM.AppEyeArea.y = Math.round((App.comp[0].y - w / 2) * m);
		GLOBALTOM.AppEyeArea.width = Math.round((App.comp[0].width + w) * m);
		GLOBALTOM.AppEyeArea.height = Math.round((App.comp[0].height + w) * m * (2/3));
		
		//console.log(GLOBALTOM.AppEyeArea.width);
		//console.log(GLOBALTOM.AppEyeArea.height);
		
		//寻找嘴巴的位置（用于嘴巴状态识别，用于放置嘴巴和鼻子组合模板迷宫）
		GLOBALTOM.MOUTH.x = Math.round((App.comp[0].x - w / 2) * m + (App.comp[0].width + w) * m * (1/4));
		GLOBALTOM.MOUTH.y = Math.round((App.comp[0].y - w / 2) * m + (App.comp[0].height + w) * m * (1/2));
		
		//GLOBALTOM.MOUTH.width = Math.round((App.comp[0].width + w) * m * (1/2));
		//GLOBALTOM.MOUTH.height = Math.round((App.comp[0].height + w) * m * (1/2));
		
		//console.log(GLOBALTOM.MOUTH.width);
		//console.log(GLOBALTOM.MOUTH.height);
		
		GLOBALTOM.MOUTH.mapMatrix = new Array(GLOBALTOM.MOUTH.height);
		GLOBALTOM.MOUTH.mouthEmptyMatrix = new Array(GLOBALTOM.MOUTH.height);
		
		for(i = 0; i < GLOBALTOM.MOUTH.height; i++) {
		
			GLOBALTOM.MOUTH.mapMatrix[i] = new Array(GLOBALTOM.MOUTH.width);
			GLOBALTOM.MOUTH.mouthEmptyMatrix[i] = new Array(GLOBALTOM.MOUTH.width);
			
			for(j = 0; j < GLOBALTOM.MOUTH.width; j++) {
				
				GLOBALTOM.MOUTH.mapMatrix[i][j] = 0;
				GLOBALTOM.MOUTH.mouthEmptyMatrix[i][j] = 0;
				
			}
				
		}
		
		//寻找眼睛非皮肤区域（用于放置眼睛模板迷宫）
		GLOBALTOM.EYE.x = Math.round((App.comp[0].x - w / 2) * m);
		GLOBALTOM.EYE.y = Math.round((App.comp[0].y - w / 2) * m + (App.comp[0].height + w) * m * (1/8));
			
		//GLOBALTOM.EYE.width = Math.round((App.comp[0].width + w) * m );
		//GLOBALTOM.EYE.height = Math.round((App.comp[0].height + w) * m * (3/8));
		
		//console.log(GLOBALTOM.EYE.width);
		//console.log(GLOBALTOM.EYE.height);
			
		GLOBALTOM.EYE.mapMatrix = new Array(GLOBALTOM.EYE.height);
		GLOBALTOM.EYE.eyeEmptyMatrix = new Array(GLOBALTOM.EYE.height);
			
		for(i = 0; i < GLOBALTOM.EYE.height; i++) {
			
			GLOBALTOM.EYE.mapMatrix[i] = new Array(GLOBALTOM.EYE.width);
			GLOBALTOM.EYE.eyeEmptyMatrix[i] = new Array(GLOBALTOM.EYE.width);
				
			for(j = 0; j < GLOBALTOM.EYE.width; j++) {
				GLOBALTOM.EYE.mapMatrix[i][j] = 0;
				GLOBALTOM.EYE.eyeEmptyMatrix[i][j] = 0;
			}
	
		}
	}

}) ();