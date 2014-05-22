//the sound when get the first prop -- kill all the enemies
function propOneSound(){
	var audio = document.createElement("audio");
	if(audio != null && audio.canPlayType && audio.canPlayType("audio/ogg")){
		audio.src = "music/bang.OGG";
		audio.play();
	}
}

//the sound when get the second prop -- carry a shield
function propTwoSound(){
	var audio = document.createElement("audio");
	if(audio != null && audio.canPlayType && audio.canPlayType("audio/ogg")){
		audio.src = "music/shield.OGG";
		audio.play();
	}
}

//the sound when get the third prop -- speed up
function propThreeSound(){
	var audio = document.createElement("audio");
	if(audio != null && audio.canPlayType && audio.canPlayType("audio/ogg")){
		audio.src = "music/electricity.OGG";
		audio.play();
	}
}

//the sound when press the button
function beepSound(){
	var audio = document.createElement("audio");	
	if(audio != null && audio.canPlayType && audio.canPlayType("audio/wav")){
		audio.src = "music/beep.wav";	
		audio.play();
	}
}

//the sound when adjust on the option view
function lockSound(){
	var audio = document.createElement("audio");	
	if(audio != null && audio.canPlayType && audio.canPlayType("audio/wav")){
		audio.src = "music/lock.wav";	
		audio.play();
	}
}