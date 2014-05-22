function changeSkin(imgUrl){
	scene.remove(sphere);
	var textureNew = new THREE.ImageUtils.loadTexture(imgUrl);
	var newPlayer_x = sphere.position.x;
	var newPlayer_y = sphere.position.y;
	var newPlayer_z = sphere.position.z;
	sphere = new THREE.Mesh(
		new THREE.SphereGeometry(5, 16, 16), 
		new THREE.MeshLambertMaterial({map: textureNew, color:0xffffff})
	);
	sphere.position.x = newPlayer_x;
	sphere.position.y = newPlayer_y;
	sphere.position.z = newPlayer_z;
	scene.add(sphere);
}