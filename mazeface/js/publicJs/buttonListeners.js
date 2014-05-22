function doPlay(){
	beepSound();
	setTimeout("window.location.href='loginView.html?backurl='+window.location.href", 800);
}

function doSet(){
	beepSound();
	setTimeout("Slides.next()", 800);
}

function doHelp(){
	beepSound();
	setTimeout("Slides.prev()", 800);
}

function doLogin(){
	beepSound();
	window.location.href="preGameView.html?backurl="+window.location.href;
}

function doSingleStart(){
	beepSound();
	window.location.href="gameView.html?backurl="+window.location.href;
}

function doleft(){
	
	yAngle -= 180;
	document.getElementById('cube').style[prop] = "rotateX("+xAngle+"deg) rotateY("+yAngle+"deg)";
}

function doright(){
	
	yAngle += 180;
	document.getElementById('cube').style[prop] = "rotateX("+xAngle+"deg) rotateY("+yAngle+"deg)";
}