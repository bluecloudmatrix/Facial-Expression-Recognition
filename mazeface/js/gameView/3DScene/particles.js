var particleSystem, lightSystem, particleCount = 20; //300
var particles = new Array(particleCount);

function initParticles(){
	particleSystem = new THREE.Object3D();
	particleSystem.position.x = 0;
	particleSystem.position.z = 0;
	particleSystem.position.y = 0;	
	var texture = new THREE.ImageUtils.loadTexture("images/gameView/maps/particle.jpg");
	
	for(var i = 0; i < particleCount; i++){
		var r = Math.floor(Math.random()*2+2);
		var particle = new THREE.Mesh(
			new THREE.SphereGeometry(r,10,10),
			//new THREE.MeshBasicMaterial({map: texture})
			new THREE.MeshLambertMaterial({map: texture})
		);
		particle.position.x = Math.floor(Math.random()*3001-1500); //create a number between -1500 and 1500
		particle.position.z = Math.floor(Math.random()*3001-1500); //create a number between -750 and 750
		particle.position.y = Math.floor(Math.random()*401-100); //create a number between 0 and 600
		
		//particle.castShadow = false;
				
		particleSystem.add(particle);		
		//particles[i] = particle;
		//scene.add(particle);
		//if(i == particleCount - 1){
		//	scene.add(particleSystem);
		//}
	}
	scene.add(particleSystem);
}