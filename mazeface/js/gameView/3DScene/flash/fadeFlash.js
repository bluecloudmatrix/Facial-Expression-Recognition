/*
 *setopacity function for all the functions below
 */
function SetOpacity(ev, v) {
	ev.filters ? ev.style.filter = 'alpha(opacity=' + v + ')'
			: ev.style.opacity = v / 100;
}

/*
 *props
 */
function fadeInPropOne(speed, opacity) {
	var elem = document.getElementById('propOne');
	
	speed = speed || 20;
	opacity = opacity || 100;
	elem.style.display = 'block';
	SetOpacity(elem, 0);
	var val = 0;
	(function() {
		SetOpacity(elem, val);
		val += 5;
		if (val <= opacity) {
			setTimeout(arguments.callee, speed)
		}
	})();
}
function fadeOutPropOne(speed, opacity) {
	var elem = document.getElementById('propOne');
	
	speed = speed || 20;
	opacity = opacity || 0;
	var val = 100;
	(function() {
		SetOpacity(elem, val);
		val -= 5;
		if (val >= opacity) {
			setTimeout(arguments.callee, speed);
		} else if (val < 0) {
			elem.style.display = 'none';
		}
	})();
}

function fadeInPropTwo(speed, opacity) {
	var elem = document.getElementById('propTwo');
	
	speed = speed || 20;
	opacity = opacity || 100;
	elem.style.display = 'block';
	SetOpacity(elem, 0);
	var val = 0;
	(function() {
		SetOpacity(elem, val);
		val += 5;
		if (val <= opacity) {
			setTimeout(arguments.callee, speed)
		}
	})();
}
function fadeOutPropTwo(speed, opacity) {
	var elem = document.getElementById('propTwo');
	
	speed = speed || 20;
	opacity = opacity || 0;
	var val = 100;
	(function() {
		SetOpacity(elem, val);
		val -= 5;
		if (val >= opacity) {
			setTimeout(arguments.callee, speed);
		} else if (val < 0) {
			elem.style.display = 'none';
		}
	})();
}

function fadeInPropThree(speed, opacity) {
	var elem = document.getElementById('propThree');
	
	speed = speed || 20;
	opacity = opacity || 100;
	elem.style.display = 'block';
	SetOpacity(elem, 0);
	var val = 0;
	(function() {
		SetOpacity(elem, val);
		val += 5;
		if (val <= opacity) {
			setTimeout(arguments.callee, speed)
		}
	})();
}
function fadeOutPropThree(speed, opacity) {
	var elem = document.getElementById('propThree');
	
	speed = speed || 20;
	opacity = opacity || 0;
	var val = 100;
	(function() {
		SetOpacity(elem, val);
		val -= 5;
		if (val >= opacity) {
			setTimeout(arguments.callee, speed);
		} else if (val < 0) {
			elem.style.display = 'none';
		}
	})();
}

function PropOneFlash(){
	fadeInPropOne(100);
	setTimeout("fadeOutPropOne()", 1500);
}
function PropTwoFlash(){
	fadeInPropTwo(100);
	setTimeout("fadeOutPropTwo()", 1500);
}
function PropThreeFlash(){
	fadeInPropThree(100);
	setTimeout("fadeOutPropThree()", 1500);
}