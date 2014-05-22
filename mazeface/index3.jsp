<%@ page language="java"  import="java.util.*,user.User,user.UserManager,user.DBManager,Room.Room" pageEncoding="UTF-8"%>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://"
			+ request.getServerName() + ":" + request.getServerPort()
			+ path + "/";
%>	

<!DOCTYPE HTML>
<html>
	<head>
		<meta charset="utf-8">
		
		<script type="text/javascript" src="js/FaceMatrix/FaceMatrix.js"></script>
		<script type="text/javascript" src="js/webRTCServer/webRTCServer.js"></script>	
		
		<script type="text/javascript" src="js/FaceMatrix/toMaze/MazeMatrix.js"></script>
		<script type="text/javascript" src="js/FaceMatrix/toMaze/toMaze.js"></script>
		<script type="text/javascript" src="js/FaceMatrix/toMaze/rgb2YCbCr.js"></script>
		<script type="text/javascript" src="js/FaceMatrix/toMaze/judgeSkin.js"></script>
		<script type="text/javascript" src="js/FaceMatrix/toMaze/dilate.js"></script>
		<script type="text/javascript" src="js/FaceMatrix/toMaze/erode.js"></script>
		<script type="text/javascript" src="js/FaceMatrix/toMaze/connectedRegion.js"></script>
		
		<script type="text/javascript" src="js/FaceMatrix/toMaze/CANNY.js"></script>
		<script type="text/javascript" src="js/FaceMatrix/toMaze/clearSkin.js"></script>
		
		<script type="text/javascript" src="js/FaceMatrix/toMaze/OR.js"></script>
		<script type="text/javascript" src="js/FaceMatrix/toMaze/AND.js"></script>
		
		<script type="text/javascript" src="js/FaceMatrix/toMaze/matchTemp.js"></script>
		<script type="text/javascript" src="js/FaceMatrix/toMaze/tempMapping.js"></script>
		<script type="text/javascript" src="js/FaceMatrix/toMaze/eyeGetElePos.js"></script>
		<script type="text/javascript" src="js/FaceMatrix/toMaze/mouthGetElePos.js"></script>
		
		<script type="text/javascript" src="js/FaceMatrix/toMaze/lightCompensation.js"></script>
		<script type="text/javascript" src="js/FaceMatrix/toMaze/quick_sort.js"></script>
		<script type="text/javascript" src="js/FaceMatrix/toMaze/adjustRGB.js"></script>
		<script type="text/javascript" src="js/FaceMatrix/toMaze/partition.js"></script>
		
		<script type="text/javascript" src="js/FaceMatrix/toMaze/mouth/mouthDetect.js"></script>
		<script type="text/javascript" src="js/FaceMatrix/toMaze/mouth/getAimLBPHist.js"></script>
		<script type="text/javascript" src="js/FaceMatrix/toMaze/mouth/LBPHist.js"></script>
		<script type="text/javascript" src="js/FaceMatrix/toMaze/mouth/drawHists.js"></script>
		<script type="text/javascript" src="js/FaceMatrix/toMaze/mouth/compareWithNormLBP.js"></script>
		
		<script type="text/javascript" src="js/FaceMatrix/eyedetect/eye_cascade.js"></script>
		<script type="text/javascript" src="js/FaceMatrix/eyedetect/haarDetect.js"></script>
		<script type="text/javascript" src="js/FaceMatrix/eyedetect/eyedetect.js"></script>	
		
		<script type="text/javascript" src="js/FaceMatrix/facedetect/face.js"></script>
		<script type="text/javascript" src="js/FaceMatrix/facedetect/ccv.js"></script>	
		
		<script type="text/javascript" src="js/FaceMatrix/faceEdge/getFaceEdge.js"></script>
		<script type="text/javascript" src="js/FaceMatrix/faceEdge/locateEyeMouthForDetect.js"></script>
		<script type="text/javascript" src="js/FaceMatrix/faceEdge/faceOval/BezierEllipse.js"></script>
		
		<script type="text/javascript" src="js/FaceMatrix/func/requestAnimationFrame.js"></script>
		<script type="text/javascript" src="js/FaceMatrix/func/binary.js"></script>
		<script type="text/javascript" src="js/FaceMatrix/func/gray.js"></script>
			
		<script type="text/javascript" src="js/libs/jsfeat-min.js"></script>
		<script type="text/javascript" src="js/libs/jquery.min.js"></script>
		<script type="text/javascript" src="js/libs/three49.js"></script>
		
		<script type="text/javascript" src="js/tools/Stats.js"></script>
		<script type="text/javascript" src="js/tools/THREEx.FullScreen.js"></script>
		<script type="text/javascript" src="js/tools/THREEx.WindowResize.js"></script>
		<script type="text/javascript" src="js/tools/ObjSeg.js"></script>
		<script type="text/javascript" src="js/tools/LinkedList.js"></script>

		<!-- 3D Scene Building -->
		<script type="text/javascript" src="js/gameView/3DScene/ammo.js"></script>
		<script type="text/javascript" src="js/gameView/3DScene/physijs_worker.js"></script>
		<script type="text/javascript" src="js/gameView/3DScene/physi.js"></script>
		<script type="text/javascript" src="js/gameView/3DScene/finalAim.js"></script>
		<script type="text/javascript" src="js/gameView/3DScene/initFinalAim.js"></script>
		<script type="text/javascript" src="js/gameView/3DScene/GatePass.js"></script>
		<script type="text/javascript" src="js/gameView/3DScene/initGatePass.js"></script>
		<script type="text/javascript" src="js/gameView/3DScene/Portal.js"></script>
		<script type="text/javascript" src="js/gameView/3DScene/initPortal.js"></script>
		<script type="text/javascript" src="js/gameView/3DScene/scene.js"></script>	
		<script type="text/javascript" src="js/gameView/3DScene/collision.js"></script>			
		<script type="text/javascript" src="js/gameView/3DScene/player.js"></script>		
		<script type="text/javascript" src="js/gameView/3DScene/enemy.js"></script>
		<script type="text/javascript" src="js/gameView/3DScene/changeSkin.js"></script>
		<script type="text/javascript" src="js/gameView/3DScene/props2.js"></script>
		<script type="text/javascript" src="js/gameView/3DScene/particles.js"></script>
		<script type="text/javascript" src="js/gameView/3DScene/to3D3.js"></script>
		
		<script type="text/javascript" src="js/gameView/3DScene/flash/cameraFlash.js"></script>
		<script type="text/javascript" src="js/gameView/3DScene/flash/fadeFlash.js"></script>	
		
		<script type="text/javascript" src="js/gameView/gameView.js"></script>
		<!--<script type="text/javascript" src="../js/gameView/faceControl/App.js"></script>
		<script type="text/javascript" src="../js/gameView/faceControl/faceTriggerClosure.js"></script>-->
		<script type="text/javascript" src="js/gameView/faceControl/faceTriggerSecond.js"></script>
		<script type="text/javascript" src="js/gameView/faceControl/faceTriggerThird.js"></script>
		
		<script type="text/javascript" src="js/gameView/headtrackr/main.js"></script>
		<script type="text/javascript" src="js/gameView/headtrackr/ccv.js"></script>
		<script type="text/javascript" src="js/gameView/headtrackr/cascade.js"></script>
		<script type="text/javascript" src="js/gameView/headtrackr/whitebalance.js"></script>
		<script type="text/javascript" src="js/gameView/headtrackr/facetrackr.js"></script>
		<script type="text/javascript" src="js/gameView/headtrackr/headposition.js"></script>
		<script type="text/javascript" src="js/gameView/headtrackr/ui.js"></script>
		<script type="text/javascript" src="js/gameView/headtrackr/smoother.js"></script>
		<script type="text/javascript" src="js/gameView/headtrackr/camshift.js"></script>
		
		<script type="text/javascript" src="js/gameView/sceneChange/eyeMazeRemove.js"></script>
		<script type="text/javascript" src="js/gameView/sceneChange/mouthMazeAdd.js"></script>

		<script type="text/javascript" src="js/publicJs/playSound.js"></script>		
		<style>
			body {
				background-color: #326696;
				margin: 0px;
				overflow: hidden;
				font-family:Monospace;
				font-size:13px;
				text-align:center;
				font-weight: bold;
				text-align:center;
			}
				
			#vcanvas {
				width: auto;
				height: 100%;
				background: black;
				-webkit-transform: scale(-1, 1);
			}
			
			#control {
				width: 320;
				height: 240;
				position: absolute;
				left: 50%;
				margin-left: -160px;
				top:50%;
				margin-top: -120px;	
				-webkit-transform: scale(-1, 1);
			} 

			
		</style>		
	</head>
	
	<body>
		<%
			String userName = (String)session.getAttribute("userName");
		
			if(userName == null){
				response.setStatus(HttpServletResponse.SC_MOVED_PERMANENTLY);
				String newLocn = "/mazeface/Views/mainView.html";
				response.setHeader("Location",newLocn);		
			}
		%>
	
		<audio id="bgSound" loop="loop">
			<!--<source src="../music/gameBackGround.OGG">
			<source src="../music/gameBackGround.mp3">-->
			<source src="music/anny.mp3">
		</audio>
	
		<div id="scen3">
			<img name="to3d" src="images/gameView/play.png" style="position:absolute; left:650px; top:590px;" onmouseover="mouseOverTo3d();" onmouseout="mouseOutTo3d();"  onClick="to3D3()" />
		</div>
		
		<!-- 用于人脸控制小球在3D场景中移动 -->
		<!-- 添加3D场景 -->
		<div id="ThreeJS" style="position: absolute; left:0px; top:0px; "></div>
		
		<!-- 人出现在场景中 -->	
		<div id="scen4">
			<canvas id="compare" width="320" height="240" style="display:none"></canvas>
			<canvas id="control" width="320" height="240" style="opacity:0.5"></canvas>
			<!--<canvas id="debug" width="320" height="240" style="opacity:0.5"></canvas>-->
		</div>
		
		<!-- 显示最终轨迹 -->
		<div id="scen5" style="display:none;">
			<img src="images/gameView/frame.png" style="position:absolute; left:272px; top:-1px;" />
			<img name="joke" src="images/gameView/joke.png" style="position:absolute; left:650px; top:590px;" onmouseover="mouseOverJoke();" onmouseout="mouseOutJoke();"  onClick="$('#scen5').hide();$('#scen6').fadeIn();" />
			<canvas id="trackShow" width="640" height="480" style="position:absolute;left:360px;top:100px;width:640px;height:480px"></canvas>
		</div>
		<div id="scen6" style="display:none;">
			<img src="images/gameView/eg.png" style="position:absolute; top:100px; left:430px;" />
		</div>
		
		<!-- 星座特效 -->
		<div id="propOne" style="z-index:9999; display:none;">
			<img src="images/gameView/props/tianxietest.png" style="width:1366px; height:768px;" />
		</div>
		<div id="propTwo" style="z-index:9999; display:none;">
			<img src="images/gameView/props/jinniutest.png" style="width:1366px; height:768px;" />
		</div>
		<div id="propThree" style="z-index:9999; display:none;">
			<img src="images/gameView/props/mojietest.png" style="width:1366px; height:768px;" />
		</div>
		<!-- the entrance of the game -->
		<script type="text/javascript">
			/**
			 * program initialization
			 * including startWebSocket() & take a photo
			 *
			**/
			
			
			/*global 1*/
			var GLOBALTOM = {}; 
			/*存有人眼的大致区域（人眼状态识别 ）*/
			GLOBALTOM.AppEyeArea = {
				x: 0,
				y: 0,
				width: 0,
				height: 0
			};
			/*人脸椭圆外接矩形*/
			GLOBALTOM.MATRIX = {
				x: 0,
				y: 0,
				width: 0,
				height: 0,
				mapMatrix: 0
			}
			/*头发轮廓的大致区域*/
			GLOBALTOM.HAIREDGE = {
				x: 0,
				y: 0,
				width: 0,
				height: 0,
				hairMatrix: 0
			}
			
			/*嘴巴的大致区域*/
			GLOBALTOM.MOUTH = {
				x: 0,
				y: 0,
				width: 120,
				height: 120,
				mapMatrix: 0,
				mouthEmptyMatrix: 0,
				entrance: {x: 0, y: 0},
				portal: {x: 0, y: 0},
				gatePass: {x: 0, y: 0}
			}
			/*眼睛非皮肤区域（用于迷宫模板定位）*/
			GLOBALTOM.EYE = {
				x: 0,
				y: 0,
				width: 240,
				height: 90,
				mapMatrix: 0,
				eyeEmptyMatrix: 0,
				entrance: {x: 0, y: 0},
				portal: {x: 0, y: 0},
				gatePass: {x: 0, y: 0}
			}
			
			window.onload = function() {
				
				$('#scen4').hide();
				$('#ThreeJS').hide();
				
			}
			
			//alert("hello!");
			var matrixString = '';

			<%
				ArrayList<Room> roomList = (ArrayList<Room>)session.getAttribute("roomList");
				for(Room tmp:roomList){
			%>
					GLOBALTOM.MATRIX.width=<%=tmp.getWidth()%>;
					GLOBALTOM.MATRIX.height=<%=tmp.getHeight()%>;
					GLOBALTOM.MATRIX.x=<%=tmp.getMatrix_x()%>;
					GLOBALTOM.MATRIX.y=<%=tmp.getMatrix_y()%>;
					
					GLOBALTOM.EYE.x =<%=tmp.getEye_x()%>;
					GLOBALTOM.EYE.y =<%=tmp.getEye_y()%>;
					GLOBALTOM.EYE.entrance.x =<%=tmp.getEyeEntrance_x()%>;
					GLOBALTOM.EYE.entrance.y =<%=tmp.getEyeEntrance_y()%>;
					GLOBALTOM.EYE.portal.x =<%=tmp.getEyePortal_x()%>;
					GLOBALTOM.EYE.portal.y =<%=tmp.getEyePortal_y()%>; 
					GLOBALTOM.EYE.gatePass.x =<%=tmp.getEyePass_x()%>; 
					GLOBALTOM.EYE.gatePass.y =<%=tmp.getEyePass_y()%>;
					
					GLOBALTOM.MOUTH.x =<%=tmp.getMouth_x()%>;
					GLOBALTOM.MOUTH.y =<%=tmp.getMouth_y()%>;
					GLOBALTOM.MOUTH.entrance.x =<%=tmp.getMouthEntrance_x()%>;
					GLOBALTOM.MOUTH.entrance.y =<%=tmp.getMouthEntrance_y()%>;
					GLOBALTOM.MOUTH.portal.x =<%=tmp.getMouthPortal_x()%>;
					GLOBALTOM.MOUTH.portal.y =<%=tmp.getMouthPortal_y()%>; 
					GLOBALTOM.MOUTH.gatePass.x =<%=tmp.getMouthPass_x()%>; 
					GLOBALTOM.MOUTH.gatePass.y =<%=tmp.getMouthPass_y()%>;
			<%
					char [] str = new char[tmp.getHeight()*tmp.getWidth()];
					for(int i = 0; i < str.length; i++){
						str[i] = tmp.getMatrixString().charAt(i);		
			%>
						matrixString += <%=str[i]%>;		
			<%
					}			
			%>
					GLOBALTOM.MATRIX.mapMatrix = new Array();
						for ( var i = 0; i < GLOBALTOM.MATRIX.height; i++) {
							GLOBALTOM.MATRIX.mapMatrix[i] = new Array();
							for ( var j = 0; j < GLOBALTOM.MATRIX.width; j++) {
									GLOBALTOM.MATRIX.mapMatrix[i][j] = matrixString[i*GLOBALTOM.MATRIX.width+j];						
							}
						}	
			<%
				}
			%>
			//console.log(matrixString);			
		</script>
	</body>		
</html>
