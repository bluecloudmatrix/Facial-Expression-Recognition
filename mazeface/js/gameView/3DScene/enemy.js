var propOneActive = false;
var propTwoActive = false;
var propThreeActive = false;
var enemyData = [
				  {"startx":-480,"endx":175,"startz":-410,"endz":15,"dir":"x","dir2":1,"delta":0.5},
				  {"startx":115,"endx":55,"startz":55,"endz":55,"dir":"x","dir2":-1,"delta":-0.5},
				  {"startx":15,"endx":15,"startz":35,"endz":135,"dir":"z","dir2":1,"delta":0.5},
				  {"startx":115,"endx":115,"startz":135,"endz":35,"dir":"z","dir2":-1,"delta":-0.5}
				];

var enemyNumber = 0;
var iEnemyArr = new Array();
function enemy(obj, textureNum){
	this.startX = obj.startx;
	this.endX = obj.endx;
	this.startZ = obj.startz;
	this.endZ = obj.endz;
	
	this.dir = obj.dir;
	this.dir2 = obj.dir2;
		
	this.delta = obj.delta;
	this.die = 0;
		
	texture = new THREE.ImageUtils.loadTexture('images/gameView/maps/enemy_skin'+textureNum+'.jpg');
	this.mybody = new THREE.Mesh(
		new THREE.SphereGeometry(5, 16, 16), 
		new THREE.MeshLambertMaterial({map: texture})
	);
	if(arr[parseInt((this.startX+1500)/10)][parseInt((this.startZ+750)/10)] == 0){
		this.mybody.position.x = this.startX;
		this.mybody.position.z = this.startZ;
	}else{
		var centerX = parseInt((this.startX+1500)/10);
		var centerZ = parseInt((this.startZ+750)/10);
		for(var x = centerX-2; x < centerX+3; x++){
			for(var z = centerZ-2; z < centerZ+3; z++){
				if(arr[x][z] == 0){
					this.mybody.position.x = x*10-1500;
					this.mybody.position.z = z*10-750;
				}
			}
		}
	}
	this.mybody.position.y = 0;
	enemyNumber++;
	scene.add(this.mybody);
}	
	
	var direction = 0, steps = 0, maxSteps = 30;
	/*
	 *direction: 0 --> right
	 *			 1 --> left
	 *			 2 --> up
	 *			 3 --> down
	*/
	function enemyMove(enemy, t){
		if(meetEnemy(enemy)){
			alert("busted!");
		}
		if(direction == 0 && steps < maxSteps){
			enemy.mybody.rotation.set(0, 0, t/20);
			if(enemy.mybody.position.z > camera.position.z){				
				enemy_x = enemy.mybody.position.x - 1;
				enemy_z = enemy.mybody.position.z;
				if(arr[parseInt((enemy_x+1500)/10)][parseInt((enemy_z+750)/10)] == 0 && arr[parseInt((enemy_x+1500)/10)][Math.ceil((enemy_z+750)/10)] == 0){
					enemy.mybody.position.x = enemy_x;
					if(meetEnemy(enemy)){
						alert("busted!");
					}
					steps++;
				}else{
					steps = 0;
					while(true){
						var dir = Math.floor(Math.random()*4);
						var e_x = 0, e_z = 0;
						if(dir == 0){							
							e_x = enemy.mybody.position.x - 1;
							e_z = enemy.mybody.position.z;
							if(arr[parseInt((e_x+1500)/10)][parseInt((e_z+750)/10)] == 0 && arr[parseInt((e_x+1500)/10)][Math.ceil((e_z+750)/10)] == 0){
								direction = dir;
								break;
							}
						}else if(dir == 1){
							e_x = enemy.mybody.position.x + 1;
							e_z = enemy.mybody.position.z;
							if(arr[parseInt((e_x+1500+9)/10)][parseInt((e_z+750)/10)] == 0 && arr[parseInt((e_x+1500+9)/10)][Math.ceil((e_z+750)/10)] == 0){
								direction = dir;
								break;
							}
						}else if(dir == 2){
							e_x = enemy.mybody.position.x;
							e_z = enemy.mybody.position.z + 1;
							if(arr[parseInt((e_x+1500)/10)][parseInt((e_z+750+9)/10)] == 0 && arr[Math.ceil((e_x+1500)/10)][parseInt((e_z+750+9)/10)] == 0){
								direction = dir;
								break;
							}
						}else if(dir == 3){
							e_x = enemy.mybody.position.x;
							e_z = enemy.mybody.position.z - 1;
							if(arr[parseInt((e_x+1500)/10)][parseInt((e_z+750)/10)] == 0 && arr[Math.ceil((e_x+1500)/10)][parseInt((e_z+750)/10)] == 0){
								direction = dir;
								break;
							}
						}
					}					
				}
			}else{
				enemy_x = enemy.mybody.position.x + 1;
				enemy_z = enemy.mybody.position.z;
				if(arr[parseInt((enemy_x+1500)/10)][parseInt((enemy_z+750)/10)] == 0){
					enemy.mybody.position.x = enemy_x;
					if(meetEnemy(enemy)){
						alert("busted!");
					}
					steps++;
				}else{
					steps = 0;
					while(true){
						var dir = Math.floor(Math.random()*4);
						var e_x = 0, e_z = 0;
						if(dir == 0){							
							e_x = enemy.mybody.position.x + 1;
							e_z = enemy.mybody.position.z;
							if(arr[parseInt((e_x+1500)/10)][parseInt((e_z+750)/10)] == 0){
								direction = dir;
								break;
							}
						}else if(dir == 1){
							e_x = enemy.mybody.position.x - 1;
							e_z = enemy.mybody.position.z;
							if(arr[parseInt((e_x+1500)/10)][parseInt((e_z+750)/10)] == 0){
								direction = dir;
								break;
							}
						}else if(dir == 2){
							e_x = enemy.mybody.position.x;
							e_z = enemy.mybody.position.z - 1;
							if(arr[parseInt((e_x+1500)/10)][parseInt((e_z+750)/10)] == 0){
								direction = dir;
								break;
							}
						}else if(dir == 3){
							e_x = enemy.mybody.position.x;
							e_z = enemy.mybody.position.z + 1;
							if(arr[parseInt((e_x+1500)/10)][parseInt((e_z+750)/10)] == 0){
								direction = dir;
								break;
							}
						}
					}	
				}
			}
		}else if(direction == 1 && steps < maxSteps){
			enemy.mybody.rotation.set(0, 0, -t/20);
			if(enemy.mybody.position.z > camera.position.z){
				enemy_x = enemy.mybody.position.x + 1;
				enemy_z = enemy.mybody.position.z;
				if(arr[parseInt((enemy_x+1500+9)/10)][parseInt((enemy_z+750)/10)] == 0 && arr[parseInt((enemy_x+1500+9)/10)][Math.ceil((enemy_z+750)/10)] == 0){
					enemy.mybody.position.x = enemy_x;
					if(meetEnemy(enemy)){
						alert("busted!");
					}
					steps++;
				}else{
					steps = 0;
					while(true){
						var dir = Math.floor(Math.random()*4);
						var e_x = 0, e_z = 0;
						if(dir == 0){							
							e_x = enemy.mybody.position.x - 1;
							e_z = enemy.mybody.position.z;
							if(arr[parseInt((e_x+1500)/10)][parseInt((e_z+750)/10)] == 0 && arr[parseInt((e_x+1500)/10)][Math.ceil((e_z+750)/10)] == 0){
								direction = dir;
								break;
							}
						}else if(dir == 1){
							e_x = enemy.mybody.position.x + 1;
							e_z = enemy.mybody.position.z;
							if(arr[parseInt((e_x+1500+9)/10)][parseInt((e_z+750)/10)] == 0 && arr[parseInt((e_x+1500+9)/10)][Math.ceil((e_z+750)/10)] == 0){
								direction = dir;
								break;
							}
						}else if(dir == 2){
							e_x = enemy.mybody.position.x;
							e_z = enemy.mybody.position.z + 1;
							if(arr[parseInt((e_x+1500)/10)][parseInt((e_z+750+9)/10)] == 0 && arr[Math.ceil((e_x+1500)/10)][parseInt((e_z+750+9)/10)] == 0){
								direction = dir;
								break;
							}
						}else if(dir == 3){
							e_x = enemy.mybody.position.x;
							e_z = enemy.mybody.position.z - 1;
							if(arr[parseInt((e_x+1500)/10)][parseInt((e_z+750)/10)] == 0 && arr[Math.ceil((e_x+1500)/10)][parseInt((e_z+750)/10)] == 0){
								direction = dir;
								break;
							}
						}
					}	
				}
			}else{
				enemy_x = enemy.mybody.position.x - 1;
				enemy_z = enemy.mybody.position.z;
				if(arr[parseInt((enemy_x+1500)/10)][parseInt((enemy_z+750)/10)] == 0){
					enemy.mybody.position.x = enemy_x;
					if(meetEnemy(enemy)){
						alert("busted!");
					}
					steps++;
				}else{
					steps = 0;
					while(true){
						var dir = Math.floor(Math.random()*4);
						var e_x = 0, e_z = 0;
						if(dir == 0){							
							e_x = enemy.mybody.position.x + 1;
							e_z = enemy.mybody.position.z;
							if(arr[parseInt((e_x+1500)/10)][parseInt((e_z+750)/10)] == 0){
								direction = dir;
								break;
							}
						}else if(dir == 1){
							e_x = enemy.mybody.position.x - 1;
							e_z = enemy.mybody.position.z;
							if(arr[parseInt((e_x+1500)/10)][parseInt((e_z+750)/10)] == 0){
								direction = dir;
								break;
							}
						}else if(dir == 2){
							e_x = enemy.mybody.position.x;
							e_z = enemy.mybody.position.z - 1;
							if(arr[parseInt((e_x+1500)/10)][parseInt((e_z+750)/10)] == 0){
								direction = dir;
								break;
							}
						}else if(dir == 3){
							e_x = enemy.mybody.position.x;
							e_z = enemy.mybody.position.z + 1;
							if(arr[parseInt((e_x+1500)/10)][parseInt((e_z+750)/10)] == 0){
								direction = dir;
								break;
							}
						}
					}	
				}
			}
		}else if(direction == 2 && steps < maxSteps){
			enemy.mybody.rotation.set(t/20, 0, 0);
			if(enemy.mybody.position.z > camera.position.z){
				enemy_x = enemy.mybody.position.x;
				enemy_z = enemy.mybody.position.z + 1;
				if(arr[parseInt((enemy_x+1500)/10)][parseInt((enemy_z+750+9)/10)] == 0 && arr[Math.ceil((enemy_x+1500)/10)][parseInt((enemy_z+750+9)/10)] == 0){
					enemy.mybody.position.z = enemy_z;
					if(meetEnemy(enemy)){
						alert("busted!");
					}
					steps++;
				}else{
					steps = 0;
					while(true){
						var dir = Math.floor(Math.random()*4);
						var e_x = 0, e_z = 0;
						if(dir == 0){							
							e_x = enemy.mybody.position.x - 1;
							e_z = enemy.mybody.position.z;
							if(arr[parseInt((e_x+1500)/10)][parseInt((e_z+750)/10)] == 0 && arr[parseInt((e_x+1500)/10)][Math.ceil((e_z+750)/10)] == 0){
								direction = dir;
								break;
							}
						}else if(dir == 1){
							e_x = enemy.mybody.position.x + 1;
							e_z = enemy.mybody.position.z;
							if(arr[parseInt((e_x+1500+9)/10)][parseInt((e_z+750)/10)] == 0 && arr[parseInt((e_x+1500+9)/10)][Math.ceil((e_z+750)/10)] == 0){
								direction = dir;
								break;
							}
						}else if(dir == 2){
							e_x = enemy.mybody.position.x;
							e_z = enemy.mybody.position.z + 1;
							if(arr[parseInt((e_x+1500)/10)][parseInt((e_z+750+9)/10)] == 0 && arr[Math.ceil((e_x+1500)/10)][parseInt((e_z+750+9)/10)] == 0){
								direction = dir;
								break;
							}
						}else if(dir == 3){
							e_x = enemy.mybody.position.x;
							e_z = enemy.mybody.position.z - 1;
							if(arr[parseInt((e_x+1500)/10)][parseInt((e_z+750)/10)] == 0 && arr[Math.ceil((e_x+1500)/10)][parseInt((e_z+750)/10)] == 0){
								direction = dir;
								break;
							}
						}
					}	
				}
			}else{
				enemy_x = enemy.mybody.position.x;
				enemy_z = enemy.mybody.position.z - 1;
				if(arr[parseInt((enemy_x+1500)/10)][parseInt((enemy_z+750)/10)] == 0){
					enemy.mybody.position.z = enemy_z;
					if(meetEnemy(enemy)){
						alert("busted!");
					}
					steps++;
				}else{
					steps = 0;
					while(true){
						var dir = Math.floor(Math.random()*4);
						var e_x = 0, e_z = 0;
						if(dir == 0){							
							e_x = enemy.mybody.position.x + 1;
							e_z = enemy.mybody.position.z;
							if(arr[parseInt((e_x+1500)/10)][parseInt((e_z+750)/10)] == 0){
								direction = dir;
								break;
							}
						}else if(dir == 1){
							e_x = enemy.mybody.position.x - 1;
							e_z = enemy.mybody.position.z;
							if(arr[parseInt((e_x+1500)/10)][parseInt((e_z+750)/10)] == 0){
								direction = dir;
								break;
							}
						}else if(dir == 2){
							e_x = enemy.mybody.position.x;
							e_z = enemy.mybody.position.z - 1;
							if(arr[parseInt((e_x+1500)/10)][parseInt((e_z+750)/10)] == 0){
								direction = dir;
								break;
							}
						}else if(dir == 3){
							e_x = enemy.mybody.position.x;
							e_z = enemy.mybody.position.z + 1;
							if(arr[parseInt((e_x+1500)/10)][parseInt((e_z+750)/10)] == 0){
								direction = dir;
								break;
							}
						}
					}	
				}
			}
		}else if(direction == 3 && steps < maxSteps){
			enemy.mybody.rotation.set(-t/20, 0, 0);
			if(enemy.mybody.position.z > camera.position.z){
				enemy_x = enemy.mybody.position.x;
				enemy_z = enemy.mybody.position.z - 1;
				if(arr[parseInt((enemy_x+1500)/10)][parseInt((enemy_z+750)/10)] == 0 && arr[Math.ceil((enemy_x+1500)/10)][parseInt((enemy_z+750)/10)] == 0){
					enemy.mybody.position.z = enemy_z;
					if(meetEnemy(enemy)){
						alert("busted!");
					}
					steps++;
				}else{
					step = 0;
					while(true){
						var dir = Math.floor(Math.random()*4);
						var e_x = 0, e_z = 0;
						if(dir == 0){							
							e_x = enemy.mybody.position.x - 1;
							e_z = enemy.mybody.position.z;
							if(arr[parseInt((e_x+1500)/10)][parseInt((e_z+750)/10)] == 0 && arr[parseInt((e_x+1500)/10)][Math.ceil((e_z+750)/10)] == 0){
								direction = dir;
								break;
							}
						}else if(dir == 1){
							e_x = enemy.mybody.position.x + 1;
							e_z = enemy.mybody.position.z;
							if(arr[parseInt((e_x+1500+9)/10)][parseInt((e_z+750)/10)] == 0 && arr[parseInt((e_x+1500+9)/10)][Math.ceil((e_z+750)/10)] == 0){
								direction = dir;
								break;
							}
						}else if(dir == 2){
							e_x = enemy.mybody.position.x;
							e_z = enemy.mybody.position.z + 1;
							if(arr[parseInt((e_x+1500)/10)][parseInt((e_z+750+9)/10)] == 0 && arr[Math.ceil((e_x+1500)/10)][parseInt((e_z+750+9)/10)] == 0){
								direction = dir;
								break;
							}
						}else if(dir == 3){
							e_x = enemy.mybody.position.x;
							e_z = enemy.mybody.position.z - 1;
							if(arr[parseInt((e_x+1500)/10)][parseInt((e_z+750)/10)] == 0 && arr[Math.ceil((e_x+1500)/10)][parseInt((e_z+750)/10)] == 0){
								direction = dir;
								break;
							}
						}
					}	
				}
			}else{
				enemy_x = enemy.mybody.position.x;
				enemy_z = enemy.mybody.position.z + 1;
				if(arr[parseInt((enemy_x+1500)/10)][parseInt((enemy_z+750)/10)] == 0){
					enemy.mybody.position.z = enemy_z;
					if(meetEnemy(enemy)){
						alert("busted!");
					}
					steps++;
				}else{
					step = 0;
					while(true){
						var dir = Math.floor(Math.random()*4);
						var e_x = 0, e_z = 0;
						if(dir == 0){							
							e_x = enemy.mybody.position.x + 1;
							e_z = enemy.mybody.position.z;
							if(arr[parseInt((e_x+1500)/10)][parseInt((e_z+750)/10)] == 0){
								direction = dir;
								break;
							}
						}else if(dir == 1){
							e_x = enemy.mybody.position.x - 1;
							e_z = enemy.mybody.position.z;
							if(arr[parseInt((e_x+1500)/10)][parseInt((e_z+750)/10)] == 0){
								direction = dir;
								break;
							}
						}else if(dir == 2){
							e_x = enemy.mybody.position.x;
							e_z = enemy.mybody.position.z - 1;
							if(arr[parseInt((e_x+1500)/10)][parseInt((e_z+750)/10)] == 0){
								direction = dir;
								break;
							}
						}else if(dir == 3){
							e_x = enemy.mybody.position.x;
							e_z = enemy.mybody.position.z + 1;
							if(arr[parseInt((e_x+1500)/10)][parseInt((e_z+750)/10)] == 0){
								direction = dir;
								break;
							}
						}
					}	
				}
			}
		}else if(steps >= maxSteps){
			while(true){
				var dir = Math.floor(Math.random()*4);
				var e_x = 0, e_z = 0;
				if(dir == 0){	
					if(enemy.mybody.position.z > camera.position.z){
						e_x = enemy.mybody.position.x - 1;
						e_z = enemy.mybody.position.z;
						if(arr[parseInt((e_x+1500)/10)][parseInt((e_z+750)/10)] == 0 && arr[parseInt((e_x+1500)/10)][Math.ceil((e_z+750)/10)] == 0){
							direction = dir;
							steps = 0;
							break;
						}
					}else{
						e_x = enemy.mybody.position.x + 1;
						e_z = enemy.mybody.position.z;
						if(arr[parseInt((e_x+1500)/10)][parseInt((e_z+750)/10)] == 0){
							direction = dir;
							steps = 0;
							break;
						}
					}
				}else if(dir == 1){
					if(enemy.mybody.position.z > camera.position.z){
						e_x = enemy.mybody.position.x + 1;
						e_z = enemy.mybody.position.z;
						if(arr[parseInt((e_x+1500+9)/10)][parseInt((e_z+750)/10)] == 0 && arr[parseInt((e_x+1500+9)/10)][Math.ceil((e_z+750)/10)] == 0){
							direction = dir;
							steps = 0;
							break;
						}
					}else{
						e_x = enemy.mybody.position.x - 1;
						e_z = enemy.mybody.position.z;
						if(arr[parseInt((e_x+1500)/10)][parseInt((e_z+750)/10)] == 0){
							direction = dir;
							steps = 0;
							break;
						}
					}
				}else if(dir == 2){
					if(enemy.mybody.position.z > camera.position.z){
						e_x = enemy.mybody.position.x;
						e_z = enemy.mybody.position.z + 1;
						if(arr[parseInt((e_x+1500)/10)][parseInt((e_z+750+9)/10)] == 0 && arr[Math.ceil((e_x+1500)/10)][parseInt((e_z+750+9)/10)] == 0){
							direction = dir;
							steps = 0;
							break;
						}
					}else{
						e_x = enemy.mybody.position.x;
						e_z = enemy.mybody.position.z - 1;
						if(arr[parseInt((e_x+1500)/10)][parseInt((e_z+750)/10)] == 0){
							direction = dir;
							steps = 0;
							break;
						}
					}
				}else if(dir == 3){
					if(enemy.mybody.position.z > camera.position.z){
						e_x = enemy.mybody.position.x;
						e_z = enemy.mybody.position.z - 1;
						if(arr[parseInt((e_x+1500)/10)][parseInt((e_z+750)/10)] == 0 && arr[Math.ceil((e_x+1500)/10)][parseInt((e_z+750)/10)] == 0){
							direction = dir;
							steps = 0;
							break;
						}
					}else{
						e_x = enemy.mybody.position.x;
						e_z = enemy.mybody.position.z + 1;
						if(arr[parseInt((e_x+1500)/10)][parseInt((e_z+750)/10)] == 0){
							direction = dir;
							steps = 0;
							break;
						}
					}
				}
			}	
		}
	}
	
	var enemyObjs = new Array(enemyData.length);
	function InitEnemy(){
		for(var i = 0; i < enemyData.length; i++){
			var textureNum = Math.floor(Math.random()*4);
			enemyObjs[i] = new enemy(enemyData[i], textureNum);
			iEnemyArr.push(enemyObjs[i]);
			//enemyObj.mybody.position.x += o;
			//console.log(enemyObj.mybody.position.x + " " + o);
			//iEnemyArr[i].create();
			//iEnemyArr[i].move();
		}
	}
	
	function meetEnemy(enemy){
		var enemyX = enemy.mybody.position.x;
		var enemyZ = enemy.mybody.position.z;
		var sphereX = sphere.position.x;
		var sphereZ = sphere.position.z;
		if(!propOneActive && !propTwoActive){
			if((enemyX-sphereX)*(enemyX-sphereX)+(enemyZ-sphereZ)*(enemyZ-sphereZ) <= 100){
				return true;
			}else{
				return false;
			}
		}
	}
	