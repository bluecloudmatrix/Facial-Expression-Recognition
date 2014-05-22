/**
 * 初始化传送门对象
 * 2013/9/6
 **/

var portalObj;

function InitPortal(flag) {

	if(flag == 0) {
		var j = GLOBALTOM.EYE.x-GLOBALTOM.MATRIX.x+GLOBALTOM.EYE.portal.x;
		var i = GLOBALTOM.EYE.y-GLOBALTOM.MATRIX.y+GLOBALTOM.EYE.portal.y;
		
		var width = 10,
			height = 10;
		
		portalObj = new Portal(scene, j, i, width, height);
		
		portalObj.showSelf();
	}
	
}