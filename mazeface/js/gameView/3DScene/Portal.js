/**
 * 浼犻�闂ㄥ璞�
 * 2013/9/6
 **/
var Portal = function(scene, j, i, width, height) {
	this.scene = scene;
	this.j = j;
	this.i = i;
	this.width = width;
	this.height = height;
	
	this.floor = null;
}

Portal.prototype.showSelf = function() {
	var texture = new THREE.ImageUtils.loadTexture("images/gameView/gate.jpg");
	this.floor = new THREE.Mesh(
		new THREE.CubeGeometry(this.width, 20, this.height), 
		new THREE.MeshLambertMaterial({map: texture})
	);
	
	this.floor.position.y = 5;
	this.floor.position.x = (this.j-GLOBALTOM.MATRIX.width/2) * 10;
	this.floor.position.z = (this.i-GLOBALTOM.MATRIX.height/2) * 10;
	this.floor.receiveShadow = true;	
	
	this.scene.add(this.floor);		
}

Portal.prototype.getArrJ = function() {

	return this.j;

}

Portal.prototype.getArrI = function() {

	return this.i;

}

Portal.prototype.transfer = function() {

	if(gatePassObj.key == 1) {
		this.scene.remove(this.floor);
		sphere.position.x = (GLOBALTOM.MOUTH.x-GLOBALTOM.MATRIX.x+GLOBALTOM.MOUTH.entrance.x-GLOBALTOM.MATRIX.width/2)*10;
		sphere.position.z = (GLOBALTOM.MOUTH.y-GLOBALTOM.MATRIX.y+GLOBALTOM.MOUTH.entrance.y-GLOBALTOM.MATRIX.height/2)*10;
		sphere.position.y = 0;	
		
		GAMEVIEW.sceneChange.eyeMazeRemove();
		GAMEVIEW.sceneChange.mouthMazeAdd();
		
	} else {
		alert("sorry boy, you don't have a gatepass!");
	}
	
}