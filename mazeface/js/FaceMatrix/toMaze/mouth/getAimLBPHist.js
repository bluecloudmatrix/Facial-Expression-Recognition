/**
 * 计算LBP直方图
 * 2013/8/26 14:42pm
 **/
(function() {

	var namespace = FACEMATRIX.namespace('FACEMATRIX.toMaze.mouth');
	
	if(namespace.getAimLBPHist === undefined) {
	
		namespace.getAimLBPHist = function(gCanvasData, x, y, width, height, W, H) {
		
			var AimHists; 

			//制定划分的行列数
			var rows = 2, cols = 1;
		
			var AimRect = new Rect(x, y, width, height);
			
			var CanvasWH = {
				gCanvasData: gCanvasData,
				W: W,
				H: H
			};
	
			var LBP = new FACEMATRIX.toMaze.mouth.LBPHist(AimRect, CanvasWH);
			
			LBP.zoning(rows, cols);
			
			LBP.calcHists();
			
			AimHists = LBP.getHists();
			
			return AimHists;
	
		};
	
	}
	

}) ();