/**
 * 鍒涘缓閫氳璇佸璞�
 * 2013/9/6
 **/
var GatePass = function(scene, j, i, width, height) {
	this.scene = scene;
	this.j = j;
	this.i = i;
	this.width = width;
	this.height = height;
	
	this.floor = null;
	this.key = 0; //1浠ｈ〃寰楀埌key
}

GatePass.prototype.showSelf = function() {	
	var texture = new THREE.ImageUtils.loadTexture("images/gameView/key.jpg");
	this.floor = new THREE.Mesh(
		new THREE.CubeGeometry(this.width, this.width, this.width), 
		new THREE.MeshLambertMaterial({map: texture})
	);
	
	this.floor.position.y = 5;
	this.floor.position.x = (this.j-GLOBALTOM.MATRIX.width/2) * 10;;
	this.floor.position.z = (this.i-GLOBALTOM.MATRIX.height/2) * 10;
	//this.floor.rotation.set(Math.PI/2, 0, 0);
	this.floor.receiveShadow = true;	
	
	this.scene.add(this.floor);		
}

GatePass.prototype.getArrJ = function() {

	return this.j;

}

GatePass.prototype.getArrI = function() {

	return this.i;

}

GatePass.prototype.getKey = function() {
	this.key = 1;
	this.scene.remove(this.floor);
}