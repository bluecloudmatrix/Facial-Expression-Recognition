var camera;
function InitCamera(){
	camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 3000);
	//camera.position.x = 0;
	//camera.position.z = 0;
	camera.position.x = 0;
	camera.position.z = 0;
	camera.position.y = 120;
	camera.lookAt( {x:-500, y:0, z:-400 } );
}
	
var scene;
function InitScene(){
	//scene = new THREE.Scene();
	scene = new Physijs.Scene();
}
function InitFloor(){
	/*var textureFloor = new THREE.ImageUtils.loadTexture('images/gameView/maps/floor_skin1.jpg');				
	for (var i = 0; i < 2; i++){
		for (var j = 0; j < 2; j++) {				
			var floor = new THREE.Mesh(
				//new THREE.PlaneGeometry(200, 200), 
				new THREE.PlaneGeometry(8000, 8000), 
				new THREE.MeshLambertMaterial({map: textureFloor, color: 0x804000})//the wooden
				//new THREE.MeshLambertMaterial({map: textureFloor, color: 0x00fffc})
			);
			floor.position.y = -5;
			//floor.position.x = (j-10) * 200;
			floor.position.x = (j-10) * 200;
			//floor.position.z = (i-10) * 200;
			floor.position.z = (i-10) * 200;
			floor.receiveShadow = true;		
			scene.add(floor);				
		}
	}*/
	
	var texture = new THREE.ImageUtils.loadTexture('webgl/floor.png');
	texture.wrapT = texture.wrapS = THREE.RepeatWrapping;
	texture.repeat.set(100, 100);
	var material = new THREE.MeshBasicMaterial({ map: texture, color: 0x804000});
	var floor = new Physijs.BoxMesh(new THREE.PlaneGeometry(4000, 4000), material, 0);
	floor.position.y = -5;
	scene.add(floor);
	
}
var arr = new Array();
var result_arr = new Array();
var blocks = new Array();
function InitBlocks(){		
	//var textureWall = new THREE.ImageUtils.loadTexture('images/maps/wall_skin6.jpg');
	var textureWallStreetH = new THREE.ImageUtils.loadTexture("images/gameView/maps/wall_skin5.jpg");//8
	var textureWallStreetV = new THREE.ImageUtils.loadTexture("images/gameView/maps/wall_skin5.jpg");//9
	var textureWallCorner = new THREE.ImageUtils.loadTexture("images/gameView/maps/wall_skin5.jpg");//7
	
	var i, j, count = 0;
	for(i = 0; i < GLOBALTOM.MATRIX.width; i++)
		arr[i] = new Array();
		
	for(i = 0; i < GLOBALTOM.MATRIX.width; i++)
		result_arr[i] = new Array();

	for (i = 0; i < GLOBALTOM.MATRIX.height; i++){
		for (j = 0; j < GLOBALTOM.MATRIX.width; j++) {
			if(GLOBALTOM.MATRIX.mapMatrix[i][j] != 0) {
				result_arr[j][i] = 1;
			}
		}
	}
		
	for (i = 0; i < GLOBALTOM.MATRIX.height; i++){
		for (j = 0; j < GLOBALTOM.MATRIX.width; j++) {
			if(GLOBALTOM.MATRIX.mapMatrix[i][j] == 3 || i == 0 || i == GLOBALTOM.MATRIX.height-1 || j == 0 || j == GLOBALTOM.MATRIX.width-1) {
				if (GLOBALTOM.MATRIX.mapMatrix[i][j] == 3) { 
					count++;
					
					var material;
					//if(i > 0 && i < GLOBALTOM.MATRIX.height-1 && j > 0 && j < GLOBALTOM.MATRIX.width-1){
					//	if(GLOBALTOM.MATRIX.mapMatrix[i-1][j] == 3 && GLOBALTOM.MATRIX.mapMatrix[i+1][j] == 3){
					//		material = new THREE.MeshLambertMaterial({map: textureWallStreetV});
					//	}else if(GLOBALTOM.MATRIX.mapMatrix[i][j-1] == 3 && GLOBALTOM.MATRIX.mapMatrix[i][j+1] == 3){
					//		material = new THREE.MeshLambertMaterial({map: textureWallStreetH});
					//	}else{
							material = new THREE.MeshLambertMaterial({map: textureWallCorner});
					//	}
					//}
					
					//优化
					var preJ = j;
					var fuseNum = 0;
					while(GLOBALTOM.MATRIX.mapMatrix[i][j] == 3) {	
						arr[j][i] = 1;
						fuseNum++;
						j++;
					}
					j--;
					
					var b1 = new THREE.Mesh(
						new THREE.CubeGeometry(10*fuseNum, 10, 10),
						material
					);
					
					b1.position.y = 0;
					var nowJ = preJ + (fuseNum-1)/2;
					b1.position.x = (nowJ-GLOBALTOM.MATRIX.width/2) * 10;
					b1.position.z = (i-GLOBALTOM.MATRIX.height/2) * 10;	
										
					scene.add(b1);
					blocks.push(b1);		
				}
				arr[j][i] = 1;	
			} else {
				arr[j][i] = 0;
			}	
		}
	}
	console.log("eye: " + count);
}
