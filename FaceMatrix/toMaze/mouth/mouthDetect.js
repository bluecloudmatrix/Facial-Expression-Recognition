/**
 * 检测嘴的状态
 * 2013/8/24 3:13am
 **/
(function() {

	var namespace = FACEMATRIX.namespace('FACEMATRIX.toMaze.mouth');
	
	if(namespace.mouthDetect === undefined) {
	
		namespace.mouthDetect = function() {
		
			var canvas = document.getElementById("output"),
				context = canvas.getContext("2d");
			
			/*
			//二值化
			FACEMATRIX.func.binary(context, GLOBALTOM.MOUTH.x, GLOBALTOM.MOUTH.y, GLOBALTOM.MOUTH.width, GLOBALTOM.MOUTH.height, canvas.width, canvas.height);
			
			//连通区域标记
			var imgDataBuffer = new ArrayBuffer();
			var imgData = new Uint8Array(imgDataBuffer);				
			imgData = context.getImageData(GLOBALTOM.MOUTH.x, GLOBALTOM.MOUTH.y, GLOBALTOM.MOUTH.width, GLOBALTOM.MOUTH.height);
			
			FACEMATRIX.toMaze.connectedRegion(imgData, 255);

			FACEMATRIX.toMaze.connectedRegion(imgData, 0);
			
			context.putImageData(imgData, GLOBALTOM.MOUTH.x, GLOBALTOM.MOUTH.y);
			*/
			
			//LBP
			var gCanvasData;
			gCanvasData = FACEMATRIX.func.gray(context, 0, 0, canvas.width, canvas.height);
			
			var AimHistsSeq, compare, result;
			AimHistsSeq = FACEMATRIX.toMaze.mouth.getAimLBPHist(gCanvasData, GLOBALTOM.MOUTH.x, GLOBALTOM.MOUTH.y, GLOBALTOM.MOUTH.width, GLOBALTOM.MOUTH.height, canvas.width, canvas.height);
			
			compare = FACEMATRIX.toMaze.mouth.drawHists(AimHistsSeq);
			
			//compared with norm LBP
			//result=0 big smile; result=1 nature
			result = FACEMATRIX.toMaze.mouth.compareWithNormLBP(compare);
			
			return result;
			
		}
	
	}

}) ();