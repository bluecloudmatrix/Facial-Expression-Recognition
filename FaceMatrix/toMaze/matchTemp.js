/**
 * 2013/8/27 14:18pm
 * authot@liuqiushan
 **/
(function() {

	var namespace = FACEMATRIX.namespace('FACEMATRIX.toMaze');
	
	if(namespace.matchTemp === undefined) {
	
		namespace.matchTemp = function(result_eye, result_mouth) {
			//eye match
			var eye_module_img = new Image();
			var eye_random, eye_path;
			
			if(result_eye == 1) { //open
			
				eye_random = Math.floor(Math.random()*2+1); //
				eye_path = "photo/maze_temp/eye_open/eye_module_0" + eye_random + ".png";
				eye_module_img.src = eye_path;
			
			} else if(result_eye == 0) { //close
			
				eye_random = Math.floor(Math.random()*2+1); //
				eye_path = "photo/maze_temp/eye_close/eye_module_0" + eye_random + ".png";
				eye_module_img.src = eye_path;
				
			}
			
			eye_module_img.onload = function() {
				
				var eCanvas = document.createElement('canvas');
				eCanvas.width = GLOBALTOM.EYE.width;
				eCanvas.height = GLOBALTOM.EYE.height;
				var eContext = eCanvas.getContext("2d");
					
				eContext.drawImage(eye_module_img, 0, 0, eye_module_img.width, eye_module_img.height, 0, 0, eCanvas.width, eCanvas.height);
				
				//
				FACEMATRIX.toMaze.eyeGetElePos(eContext, eCanvas.width, eCanvas.height);
				
				//
				FACEMATRIX.func.binary(eContext, 0, 0, eCanvas.width, eCanvas.height, eCanvas.width, eCanvas.height);
				
				var eDataBuffer = new ArrayBuffer();
				var eData = new Uint8Array(eDataBuffer);
				eData = eContext.getImageData(0, 0, eCanvas.width, eCanvas.height);
				
				//testing code
				//var output = document.getElementById('output');
				//var oContext = output.getContext('2d');
				//oContext.putImageData(eData, 0, 0);
				
				//
				FACEMATRIX.toMaze.tempMapping(GLOBALTOM.EYE.mapMatrix, eData, 3);
				
			};
			
			
			
			//mouth match
			var mouth_module_img = new Image();
			var mouth_random, mouth_path;
			
			if(result_mouth == 1) { //nature
				
				mouth_random = Math.floor(Math.random()*2+1); //闅忔満鐢熸垚1-2
				mouth_path = "photo/maze_temp/mouth_close/mouth_module_0" + mouth_random + ".png";
				mouth_module_img.src = mouth_path;
			
			} else if(result_mouth == 0) { //big smile
			
				mouth_random = Math.floor(Math.random()*2+1); //闅忔満鐢熸垚1-2
				mouth_path = "photo/maze_temp/mouth_open/mouth_module_0" + mouth_random + ".png";
				mouth_module_img.src = mouth_path;
				
			}
			
			mouth_module_img.onload = function() {
				
				var mCanvas = document.createElement('canvas');
				mCanvas.width = GLOBALTOM.MOUTH.width;
				mCanvas.height = GLOBALTOM.MOUTH.height;
				var mContext = mCanvas.getContext("2d");
					
				mContext.drawImage(mouth_module_img, 0, 0, mouth_module_img.width, mouth_module_img.height, 0, 0, mCanvas.width, mCanvas.height);
				
				//鑾峰緱鍏ュ彛銆佷紶閫侀棬鍜岄�琛岃瘉鐨勪綅缃紝骞跺綊鐧�
				FACEMATRIX.toMaze.mouthGetElePos(mContext, mCanvas.width, mCanvas.height);
				
				//浜屽�鍖�
				FACEMATRIX.func.binary(mContext, 0, 0, mCanvas.width, mCanvas.height, mCanvas.width, mCanvas.height);
				
				var mDataBuffer = new ArrayBuffer();
				var mData = new Uint8Array(mDataBuffer);
				mData = mContext.getImageData(0, 0, mCanvas.width, mCanvas.height);
				
				//灏嗗浘鐗囨暟鎹弽鏄犲湪鐪肩潧杩峰鐭╅樀涓�
				FACEMATRIX.toMaze.tempMapping(GLOBALTOM.MOUTH.mapMatrix, mData, 4);
				
			};
			
		}
	
	}

}) ();
 