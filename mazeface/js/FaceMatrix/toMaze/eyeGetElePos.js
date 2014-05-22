/** 
 * 眼睛迷宫——获得入口、传送门和通行证的位置，并归白
 * 2013/9/5
 **/
(function() {
	
	var namespace = FACEMATRIX.namespace('FACEMATRIX.toMaze');
	
	if(namespace.eyeGetElePos === undefined) {
	
		namespace.eyeGetElePos = function(eContext, width, height) {

			var eDataBuffer = new ArrayBuffer();
			var eData = new Uint8Array(eDataBuffer);
			var eData = eContext.getImageData(0, 0, width, height);
				
			/*var eCanvas = document.createElement('canvas');
			eCanvas.width = width;
			eCanvas.height = height;
			var eC = eCanvas.getContext("2d");
			eC.putImageData(eData, 0, 0);
			document.body.appendChild(eCanvas);*/
				
			var i, j, idx;
			var redFlag = 0;
			var yellowFlag = 0;
			var greenFlag = 0;
			for(i = 0; i < height; i++) {
				for(j = 0; j < width; j++){
					idx = (i * width + j) * 4;

					if(eData.data[idx] == 255 && eData.data[idx+1] == 0 && eData.data[idx+2] == 0 && redFlag == 0) { //寻找红色——入口
						//console.log(1);
						GLOBALTOM.EYE.entrance.x = j;
						GLOBALTOM.EYE.entrance.y = i;
						//redFlag = 1;
						eData.data[idx] = 255;
						eData.data[idx+1] = 255;
						eData.data[idx+2] = 255;
					}
					
					if(eData.data[idx] == 255 && eData.data[idx+1] == 255 && eData.data[idx+2] == 0 && yellowFlag == 0) { //寻找黄色——传送门
						GLOBALTOM.EYE.portal.x = j;
						GLOBALTOM.EYE.portal.y = i;
						//yellowFlag = 1;
						eData.data[idx] = 255;
						eData.data[idx+1] = 255;
						eData.data[idx+2] = 255;
					}

					if(eData.data[idx] == 0 && eData.data[idx+1] == 255 && eData.data[idx+2] == 0 && greenFlag == 0) { //寻找绿色——通行证
						GLOBALTOM.EYE.gatePass.x = j;
						GLOBALTOM.EYE.gatePass.y = i;
						//greenFlag = 1;
						eData.data[idx] = 255;
						eData.data[idx+1] = 255;
						eData.data[idx+2] = 255;
					}
					
					/*if(eData.data[idx] == 255 && eData.data[idx+1] == 0 && eData.data[idx+2] == 0 && redFlag == 1) { //红色归白
						eData.data[idx] = 255;
						eData.data[idx+1] = 255;
						eData.data[idx+2] = 255;
					}
					
					if(eData.data[idx] == 255 && eData.data[idx+1] == 255 && eData.data[idx+2] == 0 && yellowFlag == 1) { //黄色归白
						eData.data[idx] = 255;
						eData.data[idx+1] = 255;
						eData.data[idx+2] = 255;
					}
					
					if(eData.data[idx] == 0 && eData.data[idx+1] == 255 && eData.data[idx+2] == 0 && greenFlag == 1) { //绿色归白
						eData.data[idx] = 255;
						eData.data[idx+1] = 255;
						eData.data[idx+2] = 255;
					}*/
					
				}
			}
			
			eContext.putImageData(eData, 0, 0);
			
			/*var eDB = new ArrayBuffer();
			var eD = new Uint8Array(eDB);
			var eD = eContext.getImageData(0, 0, width, height);
			
			var eCanvas = document.createElement('canvas');
			eCanvas.width = width;
			eCanvas.height = height;
			var eC = eCanvas.getContext("2d");
			eC.putImageData(eD, 0, 0);
			document.body.appendChild(eCanvas);*/
			
		}
	
	}
	
}
) ();