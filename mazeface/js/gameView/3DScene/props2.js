var props = new Array(3);
function initProps(){
	var textureBottom = new THREE.ImageUtils.loadTexture("images/gameView/maps/props_bottom.jpg");	
	var bottomPlane;
	/*
	 *props[0] --> kill all the enemies
	 *props[1] --> ignore enemies
	 *props[2] --> speed up
	 */	
	
	for(var i = 0; i < 3; i++){
		var textureUrl = "images/gameView/maps/props_box" + i + ".jpg";
		var textureBox = new THREE.ImageUtils.loadTexture(textureUrl);
		
		var prop = new THREE.Object3D();
		prop.position.x = -450 + i*100;
		prop.position.z = -400;
		prop.position.y = 3;
		
		box = new THREE.Mesh(
			new THREE.CubeGeometry(10,10,10),
			new THREE.MeshLambertMaterial({map: textureBox})
		);
		box.position.x = 0;
		box.position.z = 0;
		box.position.y = 1;
		box.rotation.set(Math.PI/4, 0, Math.PI/4);
		
		bottomPlane = new THREE.Mesh(
			new THREE.PlaneGeometry(10, 10),
			new THREE.MeshLambertMaterial({map: textureBottom, color: 0xe8e8e8})
		);
		bottomPlane.position.x = 0;
		bottomPlane.position.z = 0;
		bottomPlane.position.y = -7;
		
		prop.add(box);
		prop.add(bottomPlane);
		scene.add(prop);
		//props.push(prop);
		props[i] = prop;
	}		
}

//prop one --> kill all the enemies
function killAllEnemies(){
	propOneActive = true;
	for(var i = 0; i < enemyObjs.length; i++){
		scene.remove(enemyObjs[i].mybody);
	}
}
//prop two --> ignore enemies
function shield(){
	propTwoActive = true;
}
//prop three --> speed up
function speedUp(){
	propThreeActive = true;
}

//catch props
var propOneGot = false;
var propTwoGot = false;
var propThreeGot = false;
function catchProps(){	
	var player_x = sphere.position.x;
	var player_z = sphere.position.z;
	var props_x1 = props[0].position.x;
	var props_z1 = props[0].position.z;
	var props_x2 = props[1].position.x;
	var props_z2 = props[1].position.z;
	var props_x3 = props[2].position.x;
	var props_z3 = props[2].position.z;
		
	if((props_x1-player_x)*(props_x1-player_x)+(props_z1-player_z)*(props_z1-player_z)<100 && !propOneGot){
		//kill all the enemies		
		propOneSound();
		propOneOut();
		PropOneFlash();
		killAllEnemies();
	}else if((props_x2-player_x)*(props_x2-player_x)+(props_z2-player_z)*(props_z2-player_z)<100 && !propTwoGot){
		//ignore enemies
		propTwoSound();
		propTwoOut();
		PropTwoFlash();
		changeSkin("images/gameView/maps/ball_prop2.jpg");
	}else if((props_x3-player_x)*(props_x3-player_x)+(props_z3-player_z)*(props_z3-player_z)<100 && !propThreeGot){
		//speed up
		propThreeSound();
		propThreeOut();
		PropThreeFlash();
		changeSkin("images/gameView/maps/ball_prop3.jpg");
		speedUp();
	}	
}
function propOneOut(){
	propOneGot = true;	
	scene.remove(props[0]);
	sendViaRtc(sphere.position.x, sphere.position.y, sphere.position.z, 1);
}
function propTwoOut(){
	propTwoGot = true;	
	scene.remove(props[1]);
	sendViaRtc(sphere.position.x, sphere.position.y, sphere.position.z, 2);
}
function propThreeOut(){
	propThreeGot = true;	
	scene.remove(props[2]);
	sendViaRtc(sphere.position.x, sphere.position.y, sphere.position.z, 3);
}
	