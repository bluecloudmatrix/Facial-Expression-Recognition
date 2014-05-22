/**
 * 初始化创建通行证对象
 * 2013/9/6
 **/

var gatePassObj;
 
function InitGatePass(flag) {
	
	if(flag == 0) {
		var j = GLOBALTOM.EYE.x-GLOBALTOM.MATRIX.x+GLOBALTOM.EYE.gatePass.x;
		var i = GLOBALTOM.EYE.y-GLOBALTOM.MATRIX.y+GLOBALTOM.EYE.gatePass.y;
		
		var width = 10,
			height = 10;
		
		gatePassObj = new GatePass(scene, j, i, width, height);
		
		gatePassObj.showSelf();
	} else if(flag == 1) {
		j = GLOBALTOM.MOUTH.x-GLOBALTOM.MATRIX.x+GLOBALTOM.MOUTH.gatePass.x;
		i = GLOBALTOM.MOUTH.y-GLOBALTOM.MATRIX.y+GLOBALTOM.MOUTH.gatePass.y;
		
		width = 10,
		height = 10;
		
		gatePassObj = new GatePass(scene, j, i, width, height);
		
		gatePassObj.showSelf();
	}
	
	
}