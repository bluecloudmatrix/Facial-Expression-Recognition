<%@ page language="java"  import="java.util.*,user.User,user.UserManager,user.DBManager,Room.Room" pageEncoding="UTF-8"%>	
<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://"
			+ request.getServerName() + ":" + request.getServerPort()
			+ path + "/";
%>

<html>
    <head>
        <title>pre game</title>
        <link rel="stylesheet" href="css/preGameView/style.css" type="text/css" media="screen"/>
		<link type='text/css' href='css/preGameView/basic.css' rel='stylesheet' media='screen' />		
		<script type="text/javascript" src="js/libs/jquery.js"></script>	
		<script type="text/javascript" src="js/publicJs/buttonListeners.js"></script>	
		<script type="text/javascript" src="js/publicJs/playSound.js"></script>	
		
		<script type="text/javascript">
			//alert("welcome to userInfo!");
			function createRoom(){
				//alert("createRoom!");
				window.location.href="gameView2.html";
			}
			
			function join(){
				//alert("123");
				window.location.href="index3.jsp";
			}
			function singleStart(){
				//alert("single start !");
				window.location.href="gameView.html";
			}
			
		</script>
    </head>
    <style>                
        #content{
			position:absolute;
			left:5%;
			top:5%;
            background-color:rgba(0,0,0,0.1);			
            width:350px;
            padding-left:40px;
            padding-right:40px;
            padding-bottom:40px;
            margin:0 auto;
			-moz-border-radius: 10px;  
			-webkit-border-radius: 10px;
            border-left:30px solid #1D81B6;
            border-right:1px solid #ddd;
            -moz-box-shadow:0px 0px 16px #aaa;
        }                
        #content h2{
            font-family:"Trebuchet MS",sans-serif;
            font-size:34px;
            font-style:normal;
            background-color:#f0f0f0;
            margin:40px 0px 30px -40px;
            padding:0px 40px;
            clear:both;
            float:left;
            width:100%;
            color:#000;
            text-shadow:1px 1px 1px #fff;
        }
    </style>
	<style type="text/css">
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
			a{
				color:#0078ff;
			}
		</style>
		<style type="text/css">
			* { margin:0;
				padding:0;
			}
			.navbox {
				position: relative;
				float: left;
			}

			ul.nav {
				list-style: none;
				display: block;
				width: 430px;
				position: absolute;
				top: 54%;
				left: 5%;
				padding: 60px 0 60px 0;
				-webkit-background-size: 50% 100%;
			}

			li {
				margin: 15px 0 0 0;
				font-family:隶书;
				}

			ul.nav li a {
				-webkit-transition: all 0.3s ease-out;
				background: rgba(0,0,0,0.1);
				font-family:隶书;
				font-size:20px;
				font-weight:bold;
				color:black;
				padding: 20px 15px 20px 15px;
				-webkit-border-top-right-radius: 10px;
				-webkit-border-top-left-radius: 10px;
				-webkit-border-bottom-right-radius: 10px;
				-webkit-border-bottom-left-radius: 10px;
				width: 430px;
				display: block;
				text-decoration: none;
				-webkit-box-shadow: 4px 4px 8px #888;
			}

			ul.nav li a:hover {
				background: #ebebeb;
				color: black;
				padding: 25px 30px 25px 30px;
			}
		</style>
    <body>
		<%
			String userName = (String)session.getAttribute("userName");
			if(userName == null){
				response.setStatus(HttpServletResponse.SC_MOVED_PERMANENTLY);
				String newLocn = "/mazeface/loginView.html";
				response.setHeader("Location",newLocn);		
			}
			User user = UserManager.getUserByName(userName);			

			ArrayList<User> arraylist = (ArrayList<User>)session.getAttribute("playerList");
			
			ArrayList<Room> roomList = (ArrayList<Room>)session.getAttribute("roomList");
							
			String room = null;
			
		%>
        <div id="content">            
            <h2>用户信息</h2>
            <table class="table2">
                <thead>
                    <tr>
                        <th></th>
                        <th scope="col">用 户 名</th>
                        <th scope="col">金币(k)</th>
                        <th scope="col">经验(EXP)</th>                        
                    </tr>
                </thead>
                
                <tbody>
                    <tr>
                        <th scope="row">user</th>
                        <td> <% user.getUserName(); %> </td>
                        <td> <% user.getGold(); %> </td>
                        <td> <% user.getExperience(); %> </td>                      
                    </tr>                    
                </tbody>
            </table>
			<table class="table2">
                <thead>
                    <tr>
                        <th></th>                        
                        <th scope="col">天蝎(个)</th>
                        <th scope="col">金牛(个)</th>
                        <th scope="col">摩羯(个)</th>
                    </tr>
                </thead>
                <tfoot>
                    <tr>
                        <th scope="row"></th>                     
                        <td></td>
                        <td></td>
                        <td></td>
                        
                    </tr>
                </tfoot>
                <tbody>
                    <tr>
                        <th scope="row">道具</th>
                        <td> <% user.getWeapon(); %> </td>
                        <td> <% user.getOther(); %> </td>
                        <td> <% user.getAccelerator(); %> </td>
                    </tr>                    
                </tbody>
            </table>
        </div>
		<ul class="nav">
			<li><a href="#" onclick="doSingleStart();">单 人 开 始</a></li>
			<li><a href="#" onclick="createRoom();">创 建 房 间</a></li>
			<li onclick="CC();"><a href="#">加 入 房 间</a></li>	
		</ul>
		<script type="text/javascript" src="js/loginView/three.min.js"></script>
		<script type="text/javascript" src="js/loginView/Detector.js"></script>
		<script id="vs" type="x-shader/x-vertex">
			varying vec2 vUv;
			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}
		</script>
		<script id="fs" type="x-shader/x-fragment">
			uniform sampler2D map;
			uniform vec3 fogColor;
			uniform float fogNear;
			uniform float fogFar;
			varying vec2 vUv;
			void main() {
				float depth = gl_FragCoord.z / gl_FragCoord.w;
				float fogFactor = smoothstep( fogNear, fogFar, depth );
				gl_FragColor = texture2D( map, vUv );
				gl_FragColor.w *= pow( gl_FragCoord.z, 20.0 );
				gl_FragColor = mix( gl_FragColor, vec4( fogColor, gl_FragColor.w ), fogFactor );
			}
		</script>
		<script type="text/javascript">
			if (!Detector.webgl) 
				Detector.addGetWebGLMessage();
			var container;
			var camera, scene, renderer;
			var mesh, geometry, material;
			var mouseX = 0, mouseY = 0;
			var start_time = Date.now();

			var windowHalfX = window.innerWidth / 2;
			var windowHalfY = window.innerHeight / 2;

			init();

			function init() {

				container = document.createElement( 'div' );
				document.body.appendChild( container );

				// Bg gradient

				var canvas = document.createElement( 'canvas' );
				//canvas.width = 32;
				//canvas.height = window.innerHeight;
				canvas.width = 432;
				canvas.height = 768;
				canvas.style.width = 432+"px";
				canvas.style.height = 768+"px";

				var context = canvas.getContext( '2d' );

				var gradient = context.createLinearGradient( 0, 0, 0, canvas.height );
				gradient.addColorStop(0, "#1e4877");
				gradient.addColorStop(0.5, "#4584b4");

				context.fillStyle = gradient;
				context.fillRect(0, 0, canvas.width, canvas.height);

				container.style.background = 'url(' + canvas.toDataURL('image/png') + ')';
				container.style.backgroundSize = '32px 100%';

				camera = new THREE.PerspectiveCamera( 30, window.innerWidth / window.innerHeight, 1, 3000 );
				camera.position.z = 6000;

				scene = new THREE.Scene();

				geometry = new THREE.Geometry();

				var texture = THREE.ImageUtils.loadTexture( 'images/loginView/cloud10.png', null, animate );
				texture.magFilter = THREE.LinearMipMapLinearFilter;
				texture.minFilter = THREE.LinearMipMapLinearFilter;

				var fog = new THREE.Fog( 0x4584b4, - 100, 3000 );

				material = new THREE.ShaderMaterial( {

					uniforms: {

						"map": { type: "t", value: texture },
						"fogColor" : { type: "c", value: fog.color },
						"fogNear" : { type: "f", value: fog.near },
						"fogFar" : { type: "f", value: fog.far },

					},
					vertexShader: document.getElementById( 'vs' ).textContent,
					fragmentShader: document.getElementById( 'fs' ).textContent,
					depthWrite: false,
					depthTest: false,
					transparent: true

				} );

				var plane = new THREE.Mesh( new THREE.PlaneGeometry( 64, 64 ) );

				for ( var i = 0; i < 8000; i++ ) {

					plane.position.x = Math.random() * 1000 - 500;
					plane.position.y = - Math.random() * Math.random() * 200 - 15;
					plane.position.z = i;
					plane.rotation.z = Math.random() * Math.PI;
					plane.scale.x = plane.scale.y = Math.random() * Math.random() * 1.5 + 0.5;

					THREE.GeometryUtils.merge( geometry, plane );

				}

				mesh = new THREE.Mesh( geometry, material );
				scene.add( mesh );

				mesh = new THREE.Mesh( geometry, material );
				mesh.position.z = - 8000;
				scene.add( mesh );

				renderer = new THREE.WebGLRenderer( { antialias: false } );
				renderer.setSize( window.innerWidth, window.innerHeight );
				container.appendChild( renderer.domElement );

				document.addEventListener( 'mousemove', onDocumentMouseMove, false );
				window.addEventListener( 'resize', onWindowResize, false );

			}

			function onDocumentMouseMove( event ) {

				mouseX = ( event.clientX - windowHalfX ) * 0.25;
				mouseY = ( event.clientY - windowHalfY ) * 0.15;

			}

			function onWindowResize( event ) {

				camera.aspect = window.innerWidth / window.innerHeight;
				camera.updateProjectionMatrix();

				renderer.setSize( window.innerWidth, window.innerHeight );

			}

			function animate() {

				requestAnimationFrame( animate );

				position = ( ( Date.now() - start_time ) * 0.03 ) % 8000;

				camera.position.x += ( mouseX - camera.position.x ) * 0.01;
				camera.position.y += ( - mouseY - camera.position.y ) * 0.01;
				camera.position.z = - position + 8000;

				renderer.render( scene, camera );

			}

		</script>
		
		<div id="basic-modal-content">
			<h2 align=center>
				加入房间
			</h2>
			<br>
			<ul>
				<% 
					for(Room tmp:roomList){
				%>
				<li style="border-bottom:2px dashed #fff">
				<%
					tmp.getRoomID();
				%>
				<%					
					room = tmp.getRoomID();
				%>
				<input type="button" onclick="join()" value="join it" /></li>
				<% 
				}
				%>				
			</ul>
		</div>
		<script type='text/javascript' src='js/preGameView/jquery.simplemodal.js'></script>
		<script type='text/javascript' src='js/preGameView/basic.js'></script>
    </body>
</html>