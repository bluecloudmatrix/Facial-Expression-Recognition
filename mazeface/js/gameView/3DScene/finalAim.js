/**
 * 终点对象
 * 2013/8/31
 **/
function FinalAim(j, i, width, height) {

	this.j = j;
	this.i = i;
	this.width = width;
	this.height = height;
	
	this.floor = null;

}

FinalAim.prototype.showSelf = function() {

	this.floor = new THREE.Mesh(
			new THREE.PlaneGeometry(this.width, this.height), 
			new THREE.MeshLambertMaterial({color: 0xff0000})
		);
	
	this.floor.position.y = 0;
	this.floor.position.x = (this.j-GLOBALTOM.MATRIX.width/2) * 10;
	this.floor.position.z = (this.i-GLOBALTOM.MATRIX.height/2) * 10;
	this.floor.receiveShadow = true;	
	
	scene.add(this.floor);		

}

FinalAim.prototype.getArrJ = function() {

	return this.j;

}

FinalAim.prototype.getArrI = function() {

	return this.i;

}

FinalAim.prototype.showTrack = function() {

	if(gatePassObj.key == 1) {
		//alert("success");
		renderer.clear();
		
		stopAnimate = 0;
		
		//htracker.stop();
		
		$('#scen4').hide();
		$('#ThreeJS').hide();
		$('#scen5').fadeIn();
		
		//GAMEVIEW.faceControl.App.video.pause();
		//GAMEVIEW.faceControl.App.stream.stop();
		
		//document.body.style.backgroundImage = "none";

		var gCanvas = document.getElementById("trackShow");
		var gContext = gCanvas.getContext("2d");
		
		var w = gCanvas.width,
			h = gCanvas.height;
		
		var gCanvasDataBuffer = new ArrayBuffer(w * h);
		var gCanvasData = new Int8Array(gCanvasDataBuffer);
				
		gCanvasData = gContext.getImageData(0, 0, w, h);
				
		//上背景色（天蓝）
		var i, j;
		for(i = 0; i < h; i++) {
			for(j = 0; j < w; j++) {
				gCanvasData.data[(i*w+j)*4 + 0] = 0;
				gCanvasData.data[(i*w+j)*4 + 1] = 191;
				gCanvasData.data[(i*w+j)*4 + 2] = 255;
				gCanvasData.data[(i*w+j)*4 + 3] = 255;
			}
		}
		
		for(i = 0; i < GLOBALTOM.MATRIX.height; i++) {
			for(j = 0; j < GLOBALTOM.MATRIX.width; j++) {
				if(result_arr[j][i] == 1) {
					gCanvasData.data[((i+GLOBALTOM.MATRIX.y)*w+(j+GLOBALTOM.MATRIX.x))*4 + 0] = 255;
					gCanvasData.data[((i+GLOBALTOM.MATRIX.y)*w+(j+GLOBALTOM.MATRIX.x))*4 + 1] = 255;
					gCanvasData.data[((i+GLOBALTOM.MATRIX.y)*w+(j+GLOBALTOM.MATRIX.x))*4 + 2] = 255;
				} else if(arr[j][i] == 2) {
					gCanvasData.data[((i+GLOBALTOM.MATRIX.y)*w+(j+GLOBALTOM.MATRIX.x))*4 + 0] = 255;
					gCanvasData.data[((i+GLOBALTOM.MATRIX.y)*w+(j+GLOBALTOM.MATRIX.x))*4 + 1] = 255;
					gCanvasData.data[((i+GLOBALTOM.MATRIX.y)*w+(j+GLOBALTOM.MATRIX.x))*4 + 2] = 0;
				}
			}
		}
		
		gContext.putImageData(gCanvasData, 0, 0);
	} else {
		alert("sorry boy, you don't have a gatepass!");
	}

}