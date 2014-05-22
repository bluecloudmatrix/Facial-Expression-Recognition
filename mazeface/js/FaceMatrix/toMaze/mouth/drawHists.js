/**
 * 将目标直方图序列显示在canvas上
 * 2013/8/26
 **/
(function() {

	var namespace = FACEMATRIX.namespace('FACEMATRIX.toMaze.mouth');
	
	if(namespace.drawHists === undefined) {
	
		namespace.drawHists = function(AimHistsSeq) {
		
			var canvas = document.getElementById("oval");
			var context = canvas.getContext("2d");
			context.globalAlpha = (Math.sin(0) + 0.8) / 1; 
			context.fillStyle = "#FFD306";
			context.lineWidth = 1;
			var width = canvas.width;
			var height = canvas.height;
			
			var i, j, num, horiz = 0, vert = 0;
			for(i = 0; i < AimHistsSeq.length; i++) {
			
				num = AimHistsSeq[i].num;
				for(j = 0; j < num; j++) {
					
					vert = AimHistsSeq[i].bins[j] * 0.5;
					if(horiz == 225 || horiz == 240 || horiz == 271|| horiz == 286) {
						context.fillStyle = "#FF0000";
						context.fillRect(horiz, height-1, 1, -vert);
						context.fillStyle = "#FFD306";
					} else if(horiz == 255) {   
						context.fillStyle = "#0000C6";
						context.fillRect(horiz, height-1, 1, -vert);
						context.fillStyle = "#FFD306";
					} else
						context.fillRect(horiz, height-1, 1, -vert);
											
					horiz++;
				
				}
				
			}
			
			var compare = {
				blue: AimHistsSeq[0].bins[255] * 0.5,   
				red0: AimHistsSeq[0].bins[225] * 0.5,
				red1: AimHistsSeq[0].bins[240] * 0.5,
				red2: AimHistsSeq[1].bins[15] * 0.5,
				red3: AimHistsSeq[1].bins[30] * 0.5
			};
		
			return compare;
		}
	
	}

}) ();