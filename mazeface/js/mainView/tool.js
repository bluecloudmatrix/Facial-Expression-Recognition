function SetOpacity(ev, v) {
	ev.filters ? ev.style.filter = 'alpha(opacity=' + v + ')'
			: ev.style.opacity = v / 100;
}

/*
 *shop
 */
function fadeInintro(speed, opacity) {
	var elem = document.getElementById('HTMLintro');
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
function fadeInidea(speed, opacity) {
	var elem = document.getElementById('idea');
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
function fadeIngameone(speed, opacity) {
	var elem = document.getElementById('gameone');
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
function fadeInlogin(speed, opacity) {
	var elem = document.getElementById('login');
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
function fadeInreg(speed, opacity) {
	var elem = document.getElementById('reg');
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
function fadeInthumb(speed, opacity) {
	var elem = document.getElementById('thumb');
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
function fadeInfinger(speed, opacity) {
	var elem = document.getElementById('finger');
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
function fadeIngametwo(speed, opacity) {
	var elem = document.getElementById('gametwo');
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
function fadeInscene(speed, opacity) {
	var elem = document.getElementById('scene');
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
function fadeIntt(speed, opacity) {
	var elem = document.getElementById('tt');
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
function fadeInmain(speed, opacity) {
	var elem = document.getElementById('main');
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
function fadeInGameView(){
	fadeIngameone();
	setTimeout("fadeIngametwo()", 3000);
}

function fadeInhuanyou(speed, opacity) {
	var elem = document.getElementById('huanyou');
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
/*function fadeOutshop(speed, opacity) {
	var elem = document.getElementById('boardB');
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
*/