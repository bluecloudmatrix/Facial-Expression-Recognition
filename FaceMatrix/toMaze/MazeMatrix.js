/**
 * an object used to canny and show maze
 * 2013/8/14
 * authot@liuqiushan
 **/
(function() {

	var namespace = FACEMATRIX.namespace('FACEMATRIX.toMaze');

	if(namespace.MazeMatrix === undefined) {
		
		namespace.MazeMatrix = function(global_matrix, hair_edge, mouth, eye) {
				this.x = global_matrix.x;
				this.y = global_matrix.y;
				this.width = global_matrix.width;
				this.height = global_matrix.height;
				this.mapMatrix = global_matrix.mapMatrix;
								
				this.x_hair = hair_edge.x;
				this.y_hair = hair_edge.y;
				this.width_hair = hair_edge.width;
				this.height_hair = hair_edge.height;
				this.hair_matrix = hair_edge.hairMatrix;
				
				//嘴巴矩阵属性
				this.x_mouth = mouth.x;
				this.y_mouth = mouth.y;
				this.width_mouth = mouth.width;
				this.height_mouth = mouth.height;
				this.mouth_matrix = mouth.mapMatrix;
				this.mouth_empty_matrix = mouth.mouthEmptyMatrix;
				
				//眼睛
				this.x_eye = eye.x;
				this.y_eye = eye.y;
				this.width_eye = eye.width;
				this.height_eye = eye.height;
				this.eye_matrix = eye.mapMatrix;
				this.eye_empty_matrix = eye.eyeEmptyMatrix;
				
		};
		
		var p = namespace.MazeMatrix.prototype;
		
		p.getHairEdge = function() {
	
			var imgData = FACEMATRIX.toMaze.CANNY(this.x_hair, this.y_hair, this.width_hair, this.height_hair, "output");	
			  
			var m ,n;
			for(m = 0; m < this.height_hair; m++) {
				for(n = 0; n < this.width_hair; n++) {
					if(imgData.data[(m * this.width_hair + n) * 4] == 255)
						this.hair_matrix[m][n] = 2; //wall: white
					else
						this.hair_matrix[m][n] = 0; //ground: blue
				}
			}	
		}
		
		p.skin = function() {
			var gCanvas = document.getElementById("output"),
				gContext = gCanvas.getContext("2d");
				
			var imgDataBuffer = new ArrayBuffer();
			var imgData = new Uint8Array(imgDataBuffer);
			
			//光照补偿
			FACEMATRIX.toMaze.lightCompensation(gCanvas, gContext);
				
			imgData = gContext.getImageData(this.x, this.y, this.width, this.height);
				
			var YCbCrBuffer = new ArrayBuffer(imgData.data.length);//创建类型数组
			var YCbCr = new Uint8Array(YCbCrBuffer); //创建指向YCbCrBuffer的视图
				
			//console.log(imgData.data.length);
			//console.log(imgData.height);
			//console.log(imgData.width);
			//console.log(gCanvas.height);
			
			//肤色检测
			var i, j, idx, r, g, b;
			for(i = 0; i < imgData.height; i++) {
				for(j = 0; j < imgData.width; j++) {
					idx = (i * imgData.width + j) * 4;
					r = imgData.data[idx + 0];
					g = imgData.data[idx + 1];
					b = imgData.data[idx + 2];
						
					FACEMATRIX.toMaze.rgb2YCbCr(r, g, b, YCbCr, idx);
						
				}				
			}
				
			FACEMATRIX.toMaze.judgeSkin(YCbCr, imgData);
			
			//清除眼部非皮肤区域
			//FACEMATRIX.toMaze.clearSkin(imgData, this.x_eye-this.x, this.y_eye-this.y, this.width_eye, this.height_eye, this.width);
			
			//清除嘴部非皮肤区域
			//FACEMATRIX.toMaze.clearSkin(imgData, this.x_mouth-this.x, this.y_mouth-this.y, this.width_mouth, this.height_mouth, this.width);
			
			//四次膨胀——连接人脸区域中不连续的块
			var q;
			for(q = 0; q < 0; q++) 
				FACEMATRIX.toMaze.dilate(imgData);
		
			//四次腐蚀——使人脸区域恢复到膨胀前的大小
			for(q = 0; q < 0; q++)
				FACEMATRIX.toMaze.erode(imgData);
				
			//连通区域标记算法，去除非皮肤区域
			FACEMATRIX.toMaze.connectedRegion(imgData, 255);
			
			//连通区域标记，去除人脸上的黑色斑点
			FACEMATRIX.toMaze.connectedRegion(imgData, 0);
				
			gContext.putImageData(imgData, this.x, this.y);
		}
		
		p.canny = function() {
			  	
			var gCanvasData = FACEMATRIX.toMaze.CANNY(this.x, this.y, this.width, this.height, "output");	
			
			for(var i = 0; i < this.height; i++) {
				for(var j = 0; j < this.width; j++) {
					if(gCanvasData.data[(i * this.width + j) * 4] == 255)
						this.mapMatrix[i][j] = 1; //wall: white
					else
						this.mapMatrix[i][j] = 0; //ground: blue
				}
			}	
			
		}
		
		p.showMaze = function() {
			var gCanvas = document.getElementById("output"),
				gContext = gCanvas.getContext("2d");
			var w = gCanvas.width,
				h = gCanvas.height;
			
			var gCanvasDataBuffer = new ArrayBuffer(w * h),
				gCanvasData = new Int8Array(gCanvasDataBuffer);
			
			gCanvasData = gContext.getImageData(0, 0, w, h);
			
			//上背景色（天蓝）
			var i, j;
			for(i = 0; i < h; i++) {
				for(j = 0; j < w; j++) {
					gCanvasData.data[(i*w+j)*4 + 0] = 0;
					gCanvasData.data[(i*w+j)*4 + 1] = 191;
					gCanvasData.data[(i*w+j)*4 + 2] = 255;
				}
			}
			
			//人脸矩阵和头发矩阵相或
			FACEMATRIX.toMaze.OR(this.mapMatrix, this.hair_matrix, this.x, this.x_hair, this.y, this.y_hair, this.width_hair, this.height_hair, 2);
			
			//人脸矩阵和眼睛模板迷宫空矩阵相与
			FACEMATRIX.toMaze.AND(this.mapMatrix, this.eye_empty_matrix, this.x, this.x_eye, this.y, this.y_eye, this.width_eye, this.height_eye);
			
			//人脸矩阵和眼睛模板迷宫矩阵相或
			FACEMATRIX.toMaze.OR(this.mapMatrix, this.eye_matrix, this.x, this.x_eye, this.y, this.y_eye, this.width_eye, this.height_eye, 3);
			
			//人脸矩阵和嘴巴（含鼻子）模板迷宫空矩阵相与
			FACEMATRIX.toMaze.AND(this.mapMatrix, this.mouth_empty_matrix, this.x, this.x_mouth, this.y, this.y_mouth, this.width_mouth, this.height_mouth);
			
			//人脸矩阵和嘴巴模板迷宫矩阵相或
			FACEMATRIX.toMaze.OR(this.mapMatrix, this.mouth_matrix, this.x, this.x_mouth, this.y, this.y_mouth, this.width_mouth, this.height_mouth, 4);
			
			//画迷宫
			for(i = 0; i < this.height; i++) {
				for(j = 0; j < this.width; j++) {
					if(this.mapMatrix[i][j] == 1) { //人脸轮廓（白色）
						gCanvasData.data[((i+this.y)*w+(j+this.x))*4 + 0] = 255;
						gCanvasData.data[((i+this.y)*w+(j+this.x))*4 + 1] = 255;
						gCanvasData.data[((i+this.y)*w+(j+this.x))*4 + 2] = 255;
					} else if(this.mapMatrix[i][j] == 2) { //头发轮廓（黄色）
						gCanvasData.data[((i+this.y)*w+(j+this.x))*4 + 0] = 255;
						gCanvasData.data[((i+this.y)*w+(j+this.x))*4 + 1] = 255;
						gCanvasData.data[((i+this.y)*w+(j+this.x))*4 + 2] = 0;
					} else if(this.mapMatrix[i][j] == 3) { //眼睛模板（蓝色）
						gCanvasData.data[((i+this.y)*w+(j+this.x))*4 + 0] = 0;
						gCanvasData.data[((i+this.y)*w+(j+this.x))*4 + 1] = 0;
						gCanvasData.data[((i+this.y)*w+(j+this.x))*4 + 2] = 255;
					} else if(this.mapMatrix[i][j] == 4) { //嘴巴模板（红色）
						gCanvasData.data[((i+this.y)*w+(j+this.x))*4 + 0] = 255;
						gCanvasData.data[((i+this.y)*w+(j+this.x))*4 + 1] = 0;
						gCanvasData.data[((i+this.y)*w+(j+this.x))*4 + 2] = 0;
					}
				}
			}
					
			gContext.putImageData(gCanvasData, 0, 0);
		}
		
	}
	
}) (); 