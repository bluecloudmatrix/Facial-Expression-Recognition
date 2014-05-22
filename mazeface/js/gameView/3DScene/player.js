//caractor
var sphere;
var otherSphere;
function InitSphere(){
	var texture  = new THREE.ImageUtils.loadTexture('images/gameView/maps/ball_skin5.jpg');
	sphere = new THREE.Mesh(
		new THREE.SphereGeometry(5, 16, 16), 
		new THREE.MeshLambertMaterial({map: texture})
	);
	
	//sphere.position.x = -500;
	//sphere.position.z = -400;

	sphere.position.x = (GLOBALTOM.EYE.x-GLOBALTOM.MATRIX.x+GLOBALTOM.EYE.entrance.x-GLOBALTOM.MATRIX.width/2)*10;
	sphere.position.z = (GLOBALTOM.EYE.y-GLOBALTOM.MATRIX.y+GLOBALTOM.EYE.entrance.y-GLOBALTOM.MATRIX.height/2)*10;
	
	//console.log(GLOBALTOM.EYE.entrance.x + "vs" + GLOBALTOM.EYE.entrance.y);
	
	sphere.position.y = 0;		
	sphere.castShadow = true;
	scene.add(sphere);	
}

function InitOtherShpere(){
	var texture  = new THREE.ImageUtils.loadTexture('images/gameView/maps/ball_skin5.jpg');	
	otherSphere = new THREE.Mesh(
		new THREE.SphereGeometry(3, 16, 16), 
		new THREE.MeshLambertMaterial({map: texture})
	);
	otherSphere.position.x = sphere.position.x;
	otherSphere.position.z = sphere.position.z;
	otherSphere.position.y = 0;		
	otherSphere.castShadow = true;
	scene.add(otherSphere);
}