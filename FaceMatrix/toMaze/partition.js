/**
 * 用于快速排序的非递归式
 * 2013/8/15
 **/
(function() {

	var namespace = FACEMATRIX.namespace('FACEMATRIX.toMaze');
	
	if(namespace.partition === undefined) {
	
		namespace.partition = function(pix, l, h) {
			
			var X = {
				i: pix[l].i,
				j: pix[l].j,
				gray: pix[l].gray
			};
			
			var i = l,
				j = h + 1;
			var temp = {
				i: 0,
				j: 0,
				gray: 0
			};
			
			while(i < j) {
				while(pix[++i].gray < X.gray && i < h);
				while(pix[--j].gray > X.gray);
				if(i < j) {
					temp.i = pix[i].i;
					temp.j = pix[i].j;
					temp.gray = pix[i].gray;
					
					pix[i].i = pix[j].i;
					pix[i].j = pix[j].j;
					pix[i].gray = pix[j].gray;
					
					pix[j].i = temp.i;
					pix[j].j = temp.j;
					pix[j].gray = temp.gray;
				}
			}
			pix[l].i = pix[j].i;
			pix[l].j = pix[j].j;
			pix[l].gray = pix[j].gray;
			
			pix[j].i = X.i;
			pix[j].j = X.j;
			pix[j].gray = X.gray;
			
			return j;
		}
		
	}

}) ();