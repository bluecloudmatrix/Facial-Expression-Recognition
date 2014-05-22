/**
 * Add嘴巴迷宫
 * 2013/9/6
 **/
(function() {

	var namespace = GAMEVIEW.namespace('GAMEVIEW.sceneChange');
	
	if(namespace.mouthMazeAdd === undefined) {
		namespace.mouthMazeAdd = function() {

			var textureWallCorner = new THREE.ImageUtils.loadTexture("images/gameView/maps/wall_skin5.jpg");
			var i, j, count = 0;
			for (i = 0; i < GLOBALTOM.MATRIX.height; i++){
				for (j = 0; j < GLOBALTOM.MATRIX.width; j++) {
					if(GLOBALTOM.MATRIX.mapMatrix[i][j] == 4) {
					
							count++;
							
							var material = new THREE.MeshLambertMaterial({map: textureWallCorner});
							
							//优化
							var preJ = j;
							var fuseNum = 0;
							while(GLOBALTOM.MATRIX.mapMatrix[i][j] == 4) {	
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

					}
				}
			}
			console.log("mouth: " + count);
			
			InitGatePass(1);
		}
	}

}) ();