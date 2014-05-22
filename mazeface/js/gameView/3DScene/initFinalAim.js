/**
 * 初始化终点对象
 * 2013/8/31
 **/

var finalAimObj;
 
function InitFinalAim() {

	var j = GLOBALTOM.MOUTH.x-GLOBALTOM.MATRIX.x+GLOBALTOM.MOUTH.portal.x;
	var i = GLOBALTOM.MOUTH.y-GLOBALTOM.MATRIX.y+GLOBALTOM.MOUTH.portal.y;
	
	var width = 10,
		height = 10;
	
	finalAimObj = new FinalAim(j, i, width, height);
	
	finalAimObj.showSelf(); //在3D场景中画出自己

}