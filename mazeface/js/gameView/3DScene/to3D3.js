/**
 * turn mapMatrix into 3D scene via three.js
 * 2013/7/13
**/

var keyArr; //璁板綍鎸夐敭鏄惁琚寜涓�

var ball_fast_speed = 5;

var ball_slow_speed = 2;

var stopAnimate = 1; //0琛ㄧず涓�洿寰幆锛�琛ㄧず缁撴潫3D鍦烘櫙

var renderer;

	var other_x = -500, other_y=50, other_z=-400;
	var isOk = 0;
	var tool = 0;

	
	var channel = null;
	function startWebRtc(){
		isOk = 0;
		channel = new DataChannel();
		channel.connect("room123");
		channel.onopen = function(userid) {
			alert("open");
			isOk = 1;
		};

		channel.onmessage = function(message, userid) {
			//alert("received : " + message);
			//console.log(message);
			nums = message.split(' ');
			other_x = nums[0];
			other_y = nums[1];
			other_z = nums[2];
			tool = nums[3];
			//alert(tool);
			//console.log("receive:"+nums[0]+" "+nums[1]+" "+nums[2]);
		};

		channel.onleave = function(userid) {
			alert(userid+" leave!");
		};
	
	}
	function sendViaRtc(a, b, c, d){
		if(isOk == 1){
			str = a + " " + b + " " + c + " " + d;
			channel.send(str);
		}
	}


function to3D3() {
	
	$('#scen2').hide();
	$('#scen3').hide();
	$('#scen4').fadeIn();
	$('#ThreeJS').fadeIn();
	
	//for the background music
	var music = document.getElementById("bgSound");
	music.play();
	
	//璋冭妭涓庡皬鐞冪殑瑙嗚鍜岃窛绂�
	var distance = 180; 
	var angle_view = 50;
	var halfWidth = Math.floor(GLOBALTOM.MATRIX.width*10/2);
	var halfHeight = Math.floor(GLOBALTOM.MATRIX.height*10/2);
	keyArr = new Array();
	var ctrl = false;
	var venus, earth, moon, mars, jupiter, saturn, neptune;
	var container, stats;
	var t = 0;
	
	function onkeydown(e){
		var e = event || window.event;     
		var keycode = e.which ? e.which : e.keyCode;
			/*switch (keycode){
				case 37://left
					keyArr[37] = 1;
					break;
				case 39://right
					keyArr[39] = 1;
					break;	
				case 38://up
					keyArr[38] = 1;
					break;
				case 40://down
					keyArr[40] = 1;
					break;				
			}*/
		if(keycode == 37){//left
			keyArr[37] = 1;
		}else if(keycode == 39){//right
			keyArr[39] = 1;
		}else if(keycode == 38){//up
			keyArr[38] = 1;
		}else if(keycode == 40){//down
			keyArr[40] = 1;
		}else 
		if(keycode == 87){//w			
			keyArr[87] = 1;
		}else if(keycode == 83){//s
			keyArr[83] = 1;
		}else if(keycode == 65){//a			
			keyArr[65] = 1;
		}else if(keycode == 68){//d
			keyArr[68] = 1;
		}
	}
	
	function onkeyup(e){
		var e = event || window.event;     
		var keycode = e.which ? e.which : e.keyCode;
			/*switch (keycode){
				case 37:
					keyArr[37] = 0;
					break;
				case 39:
					keyArr[39] = 0;
					break;	
				case 38:
					keyArr[38] = 0;
					break;
				case 40:
					keyArr[40] = 0;
					break;				
			}*/
		if(keycode == 37){//left
			keyArr[37] = 0;
		}else if(keycode == 39){//right
			keyArr[39] = 0;
		}else if(keycode == 38){//up
			keyArr[38] = 0;
		}else if(keycode == 40){//down
			keyArr[40] = 0;
		}else 
		if(keycode == 87){//w		
			keyArr[87] = 0;
		}else if(keycode == 83){//s
			keyArr[83] = 0;
		}else if(keycode == 65){//a			
			keyArr[65] = 0;
		}else if(keycode == 68){//d
			keyArr[68] = 0;
		}
	}
	
	function HandleKeySlow(){
		t++;	
		otherSphere.position.x = other_x;
		otherSphere.position.z = other_z;
		if(tool == 1){
			scene.remove(props[0]);
		}else if(tool == 2){
			scene.remove(props[1]);
		}else if(tool == 3){
			scene.remove(props[2]);
		}
		/*
		 *direction: 0 --> right
		 *			 1 --> left
		 *			 2 --> up
		 *			 3 --> down
		 */		
		if(keyArr[38]){ //up
			camera.position.x = sphere.position.x;
			camera.position.z = sphere.position.z - distance; //鎷夎繎鎽勫儚鏈轰笌灏忕悆涔嬮棿鐨勮窛绂�
			camera.position.y = angle_view; //瑙嗚鏃笉瑕佸お骞筹紝涔熶笉瑕佸お淇�
			camera.lookAt({x:sphere.position.x, y:sphere.position.y, z:sphere.position.z}); //鎽勫儚鏈哄鍑嗗皬鐞�
			sphere.rotation.set(t/10, 0, 0);			
			collision(sphere, halfWidth, halfHeight, ball_slow_speed, 2);			
		}
		if(keyArr[40]){ //down
			camera.position.x = sphere.position.x;
			camera.position.z = sphere.position.z - distance;
			camera.position.y = angle_view;
			camera.lookAt({x:sphere.position.x, y:sphere.position.y, z:sphere.position.z});
			sphere.rotation.set(-t/10, 0, 0);
			collision(sphere, halfWidth, halfHeight, ball_slow_speed, 3);
		}		
		if(keyArr[37]){ //left
			camera.position.x = sphere.position.x;
			camera.position.z = sphere.position.z - distance;	
			camera.position.y = angle_view;
			camera.lookAt({x:sphere.position.x, y:sphere.position.y, z:sphere.position.z});
			sphere.rotation.set(0, 0, -t/10);
			collision(sphere, halfWidth, halfHeight, ball_slow_speed, 1);
		}
			
		if(keyArr[39]){ //right
			camera.position.x = sphere.position.x;
			camera.position.z = sphere.position.z - distance;
			camera.position.y = angle_view;
			camera.lookAt({x:sphere.position.x, y:sphere.position.y, z:sphere.position.z});
			sphere.rotation.set(0, 0, t/10);
			collision(sphere, halfWidth, halfHeight, ball_slow_speed, 0);			
		}	
		sendViaRtc(sphere.position.x, sphere.position.y, sphere.position.z);
	}
	
	function HandleKeyFast(){		
		t++;
		otherSphere.position.x = other_x;
		otherSphere.position.z = other_z;
		if(tool == 1){
			scene.remove(props[0]);
		}else if(tool == 2){
			scene.remove(props[1]);
		}else if(tool == 3){
			scene.remove(props[2]);
		}
		/*
		 *direction: 0 --> right
		 *			 1 --> left
		 *			 2 --> up
		 *			 3 --> down
		 */	 
		 
		if(keyArr[38]){ //up
			camera.position.x = sphere.position.x;
			camera.position.z = sphere.position.z - distance;
			camera.position.y = angle_view;
			camera.lookAt({x:sphere.position.x, y:sphere.position.y, z:sphere.position.z});
			sphere.rotation.set(t/2, 0, 0);			
			collision(sphere, halfWidth, halfHeight, ball_fast_speed, 2);			
		}
		if(keyArr[40]){ //down
			camera.position.x = sphere.position.x;
			camera.position.z = sphere.position.z - distance;	
			camera.position.y = angle_view;
			camera.lookAt({x:sphere.position.x, y:sphere.position.y, z:sphere.position.z});
			sphere.rotation.set(-t/2, 0, 0);
			collision(sphere, halfWidth, halfHeight, ball_fast_speed, 3);
		}	
		if(keyArr[37]){ //left
			camera.position.x = sphere.position.x;
			camera.position.z = sphere.position.z - distance;	
			camera.position.y = angle_view;
			camera.lookAt({x:sphere.position.x, y:sphere.position.y, z:sphere.position.z});
			sphere.rotation.set(0, 0, -t/2);
			collision(sphere, halfWidth, halfHeight, ball_fast_speed, 1);
		}
			
		if(keyArr[39]){ //right
			camera.position.x = sphere.position.x;
			camera.position.z = sphere.position.z - distance;
			camera.position.y = angle_view;
			camera.lookAt({x:sphere.position.x, y:sphere.position.y, z:sphere.position.z});
			sphere.rotation.set(0, 0, t/2);
			collision(sphere, halfWidth, halfHeight, ball_fast_speed, 0);			
		}
		sendViaRtc(sphere.position.x, sphere.position.y, sphere.position.z);
	
	}
	
	function HandleCamera(){		
		if(keyArr[87]){//w
			camera.position.x = sphere.position.x;
			camera.position.z = sphere.position.z-1;
			camera.position.y = 250;
			camera.lookAt({x:sphere.position.x, y:0, z:sphere.position.z});				
		}
		
		if(keyArr[83]){//s
			camera.position.x = sphere.position.x;
			camera.position.z = sphere.position.z + 100;
			camera.position.y = 120;
			camera.lookAt({x:sphere.position.x, y:0, z:sphere.position.z});			
		}
		
		
		if(keyArr[65]){//a
			camera.position.x = sphere.position.x + 100;
			camera.position.z = sphere.position.z;			
			camera.position.y = 150;
			camera.lookAt({x:sphere.position.x, y:0, z:sphere.position.z});				
		}
		
		if(keyArr[68]){//d
			camera.position.x = sphere.position.x - 100;
			camera.position.z = sphere.position.z;
			camera.position.y = 150;
			camera.lookAt({x:sphere.position.x, y:0, z:sphere.position.z});			
		}
	}
	
	function InitLight() { 
		light = new THREE.DirectionalLight(0x9fcef4, 1.0, 0);
		light.position.set(10, 300, -130);
		light.intensity = 2;
		light.castShadow = true;		//鍚敤闃村奖
		scene.add(light);	
	}
		
	function initStars(){
		//閲戞槦
		var texture1 = new THREE.ImageUtils.loadTexture('images/gameView/maps/venus_skin.jpg');
		venus = new THREE.Mesh(
			new THREE.SphereGeometry(50, 50, 50),
			new THREE.MeshLambertMaterial({map: texture1})
		);
		scene.add(venus);
		//鍦扮悆
		var texture2  = new THREE.ImageUtils.loadTexture('images/gameView/maps/earth_skin.jpg');
		earth = new THREE.Mesh(
			new THREE.SphereGeometry(50, 50, 50),
			new THREE.MeshLambertMaterial({map: texture2})
		);
		scene.add(earth);		
		//鏈堢悆
		var texture2_1  = new THREE.ImageUtils.loadTexture('images/gameView/maps/moon_skin.jpg');
		moon = new THREE.Mesh(
			new THREE.SphereGeometry(5,20,20),
			new THREE.MeshLambertMaterial({map: texture2_1})
		);
		scene.add(moon);
		//鐏槦
		var texture3 = new THREE.ImageUtils.loadTexture('images/gameView/maps/mars_skin.jpg');
		mars = new THREE.Mesh(
			new THREE.SphereGeometry(40, 40, 40),
			new THREE.MeshLambertMaterial({map: texture3})
		);
		scene.add(mars);
		//鏈ㄦ槦
		var texture4 = new THREE.ImageUtils.loadTexture('images/gameView/maps/jupiter_skin.jpg');
		jupiter = new THREE.Mesh(
			new THREE.SphereGeometry(200, 200, 200),
			new THREE.MeshLambertMaterial({map: texture4})
		);
		scene.add(jupiter);
		//鍦熸槦
		var texture5 = new THREE.ImageUtils.loadTexture('images/gameView/maps/saturn_skin.jpg');
		saturn = new THREE.Mesh(
			new THREE.SphereGeometry(200, 200, 200),
			new THREE.MeshLambertMaterial({map: texture5})
		);
		scene.add(saturn);
		//娴风帇鏄�
		var texture6 = new THREE.ImageUtils.loadTexture('images/gameView/maps/neptune_skin.jpg') ;
		neptune = new THREE.Mesh(
			new THREE.SphereGeometry(100, 100, 100),
			new THREE.MeshLambertMaterial({map: texture6})
		);
		scene.add(neptune);
	}
		
	function InitRender(){
		renderer = new THREE.WebGLRenderer({antialias:true}); //璁剧疆涓烘姉閿娇鏈夋晥
		renderer.setSize(window.innerWidth, window.innerHeight);
		//console.log(window.innerWidth + "vs" + window.innerHeight);
		//renderer.setSize(1366, 667);
		//renderer.setClearColor(0x000000,0);
		renderer.shadowMapEnabled = false;		
		container = document.getElementById( 'ThreeJS' );
		container.appendChild(renderer.domElement);
		//document.body.appendChild(renderer.domElement);
		
		//stats = new Stats();
		//stats.domElement.style.position = 'absolute';
		//stats.domElement.style.bottom = '0px';
		//stats.domElement.style.zIndex = 100;
		//container.appendChild( stats.domElement );
	
		THREEx.WindowResize(renderer, camera);
		THREEx.FullScreen.bindKey({ charCode : 'm'.charCodeAt(0) });
	}	
	
	function animate() {
	
		if(stopAnimate == 1) {
		
			//stats.update();
			
			//GAMEVIEW.faceControl.App.drawToCanvas();
	
			if(!propThreeActive){
				HandleKeySlow();
				HandleCamera();
			}else{
				HandleKeyFast();
				HandleCamera();
			}
			//camera.position.x = sphere.position.x;
			//camera.position.z = sphere.position.z -100;			
			//camera.lookAt({x:sphere.position.x, y:50, z:sphere.position.z});
			//renderer.clear();
			
			if(t < 230){
				camera.position.x = 200*Math.cos(t/50)-500;
				camera.position.y = 600;
				camera.position.z = 200*Math.sin(t/50)-400;
				camera.lookAt( {x:-500, y:50, z:-400 } );   
			}
			if(t >= 230 && t < 430){
				var i = t - 230;
				camera.position.x = -500;
				camera.position.y = 110*Math.cos(i/200)+50;
				camera.position.z = -110*Math.sin(i/200)-400;
				camera.lookAt( {x:-500, y:50, z:-400 } );   
			}
			t++;
			
			venus.rotation.set(0, t/50, 0);
			venus.position.set(-200*Math.sin(t/100)-500, 150, 200*Math.cos(t/100)-100);
			earth.rotation.set(0, t/100, 0);	
			earth.position.set(-500*Math.sin(t/220)-500, 150, 500*Math.cos(t/220)-100);
			moon.rotation.set(0, t/200, 0);
			moon.position.set(-70*Math.sin(t/200)+earth.position.x, 100, 70*Math.cos(t/200)+earth.position.z);
			mars.rotation.set(0, t/30, 0);
			mars.position.set(-800*Math.sin(t/290)-500, 150, 800*Math.cos(t/290)-100);
			jupiter.rotation.set(0, t/200, 0);
			jupiter.position.set(-1100*Math.sin(t/380)-500, 200, 1100*Math.cos(t/380)-100)
			saturn.rotation.set(0, t/200, 0);
			saturn.position.set(-1400*Math.sin(t/510)-500, 200, 1400*Math.cos(t/510)-100)
			neptune.rotation.set(0, t/20, 0);
			neptune.position.set(-1700*Math.sin(t/590)-500, 160, 1700*Math.cos(t/590)-100)
			
			particleSystem.rotation.set(0, t/150, 0);
			//for(var i = 0; i < enemyObjs.length; i++){
			//	enemyMove(enemyObjs[i]);			
			//}
			enemyMove(enemyObjs[0], t);
			//enemyMove(enemyObjs[1]);
			//enemyMove(enemyObjs[2]);
			//enemyMove(enemyObjs[3]);
			props[0].rotation.set(0, t/50, 0);
			props[1].rotation.set(0, t/50, 0);
			props[2].rotation.set(0, t/50, 0);
			//prop.rotation.set(0, t/50, 0);
			catchProps();
			
			renderer.render(scene, camera);
			window.requestAnimationFrame(animate);
			
		} else {
			return 0;
		}	
	}
	
	function Start(){
		//document.body.style.backgroundImage="url('images/gameView/backgrounds/universeTest.jpg')";
		startWebRtc();
		InitCamera();
		InitScene();
		InitLight();
		InitSphere();
		InitOtherShpere();
		InitFloor();
		InitBlocks();
		InitEnemy();
		initProps();
		InitFinalAim(); //鍒濆鍖栫粓鐐瑰璞�
		InitGatePass(0); //鍒濆鍖栭�琛岃瘉瀵硅薄0:eye, 1:mouth
		InitPortal(0); //鍒濆鍖栦紶閫侀棬瀵硅薄0:eye, 1:mouth
		initParticles();
		initStars();
		InitRender();
		
		//document.addEventListener("keydown",function(e){onkeydown(e);},false);
		//document.addEventListener("keyup",function(e){onkeyup(e);},false);
		
		//鐜╁鍑虹幇鍦ㄦ父鎴忓満鏅腑
		//GAMEVIEW.faceControl.App.init(animate);
		
		//for each facetracking event received draw rectangle around tracked face on canvas
		var videoInput = document.createElement('video');
		var overlay = control.getContext('2d');	
		//var glasses = new Image();
		//glasses.src = 'photo/glasses01.png';
		
		document.addEventListener("facetrackingEvent", function( event ) {
			//clear canvas
			//overlay.clearRect(0,0,320,240);
			
			//once we have stable tracking, draw rectangle
			if (event.detection == "CS") {
				
				overlay.beginPath();
                overlay.arc(event.x, event.y+10, event.width*0.1, 0, Math.PI * 2, true);
                overlay.closePath();
				overlay.fillStyle = "#FF0000";
                overlay.fill();
				
				//overlay.drawImage(glasses, event.x, event.y, event.width*0.1, event.height*0.1);
			
				overlay.translate(event.x, event.y)
				overlay.rotate(event.angle-(Math.PI/2));
				overlay.strokeStyle = "#00CC00";
				overlay.strokeRect((-(event.width/2)) >> 0, (-(event.height/2)) >> 0, event.width, event.height);
				overlay.rotate((Math.PI/2)-event.angle);
				overlay.translate(-event.x, -event.y);

				GAMEVIEW.faceControl.faceTriggerThird(event.x, event.y);
				
			}		
		});
		
		//            the face tracking setup
		htracker = new headtrackr.Tracker({altVideo : {ogv : "./media/capture5.ogv", mp4 : "./media/capture5.mp4"}, calcAngles : true, ui : false, headPosition : false, debug : false});
		htracker.init(videoInput, control); 
		htracker.start();
		
		animate();
	}
	
	Start();
}