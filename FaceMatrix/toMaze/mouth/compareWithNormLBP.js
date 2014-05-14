/**
 * 璁＄畻寰楀埌鐨勭洿鏂瑰浘涓庢爣鍑嗘瘮杈冿紝杩涜鐘舵�璇嗗埆
 * 2013/8/26
 **/
(function() {

	var namespace = FACEMATRIX.namespace('FACEMATRIX.toMaze.mouth');
	
	if(namespace.compareWithNormLBP === undefined) {
		
		namespace.compareWithNormLBP = function(compare) {
	
			var blue = compare.blue;
			var red0 = compare.red0;
			var red1 = compare.red1;
			var red2 = compare.red2;
			var red3 = compare.red3;
			
			var redmax, i;
			redmax = red0;
			if(redmax < red1)
				redmax = red1;
			if(redmax < red2)
				redmax = red2;
			if(redmax < red3)
				redmax = red3;
				
			//if(redmax/blue > 3/4) {
			if(redmax/blue >= 1) {
				//alert("big smile");
				document.laugh.style.display = "block";
				return 0;
			} else {
				//alert("nature");
				document.serious.style.display = "block";
				return 1;
			}

		}
	
	}
	
}) ();
 