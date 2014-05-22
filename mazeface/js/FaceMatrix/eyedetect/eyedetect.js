/**
 * we use it to judge whether eye is open or close
 * 2013/8/6 23:39
 * 杩囩▼鐢ㄦ柟娉�
 */
 function eyedetect() {
	
	var result_eye;
	
	var gCanvas = document.getElementById("output");
	var gContext = gCanvas.getContext("2d");   
	
	//gContext.strokeStyle = "#007500";	
	//gContext.strokeRect(GLOBALTOM.AppEyeArea.x, GLOBALTOM.AppEyeArea.y, GLOBALTOM.AppEyeArea.width, GLOBALTOM.AppEyeArea.height);
	
	var gCanvasData = FACEMATRIX.func.gray(gContext, GLOBALTOM.AppEyeArea.x, GLOBALTOM.AppEyeArea.y, GLOBALTOM.AppEyeArea.width, GLOBALTOM.AppEyeArea.height);

	var img = new Array(GLOBALTOM.AppEyeArea.height);
	var j, k;
	for (j = 0; j < GLOBALTOM.AppEyeArea.height; j++) {
		img[j] = new Array(GLOBALTOM.AppEyeArea.width);
		for(k = 0; k < GLOBALTOM.AppEyeArea.width; k++) {
			img[j][k] = gCanvasData.data[(j * GLOBALTOM.AppEyeArea.width + k) * 4];
		}
	}
	
	var object_area;
	var cascade = HaarClassifierCascade;
	var scale_factor = 1.2;
	object_area = haarDetect(img, cascade, scale_factor);
	
	var ovalCanvas = document.getElementById("oval");
	var ovalContext = ovalCanvas.getContext("2d");  
	ovalContext.globalAlpha = (Math.sin(0) + 0.8) / 1; 
	ovalContext.strokeStyle = "#ff00ff";
	for(var k = 0; k < object_area.length; k++) {	
			ovalContext.strokeRect(object_area[k].x + GLOBALTOM.AppEyeArea.x, object_area[k].y + GLOBALTOM.AppEyeArea.y, object_area[k].width, object_area[k].height);			
	}
	
	var _contextItemDiv = document.getElementById("result");
	if(object_area.length > 0) {
		//_contextItemDiv.innerHTML="open";
		//alert("open");
		document.clear.style.display = "block";
		result_eye = 1;
		return result_eye;
	} else {
		//_contextItemDiv.innerHTML="close";
		//alert("close");
		document.sleepy.style.display = "block";
		result_eye = 0;
		return result_eye;
	}		
 }