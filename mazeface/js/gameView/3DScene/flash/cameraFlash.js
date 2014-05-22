function cameraFlash(){
	for(var i = 0; i < 64; i++){
		camera.position.x = -500;
		camera.position.y = 125*Math.cos(i/100);
		camera.position.z = 125*Math.sin(i/100);
		camera.lookAt(-500, 50, -400);
	}
}