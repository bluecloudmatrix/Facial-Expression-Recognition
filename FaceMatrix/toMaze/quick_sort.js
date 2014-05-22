/**
 * 快速排序nlogn
 * 2013/8/15
 * authot@liuqiushan
 **/
(function() {
	
	var namespace = FACEMATRIX.namespace('FACEMATRIX.toMaze');
	
	if(namespace.quick_sort === undefined) {
		
		namespace.quick_sort = function(pix, l, h) {
			
			if(l >= h)
				return;
			
			var s = new Array(h-l+1);
			var p = 0;
			s[p++] = l;
			s[p++] = h;
			
			var low, high, q;
			
			while(p > 0) {
				high = s[--p];
				low = s[--p];
				if(low >= high)
					break;
				
				q = FACEMATRIX.toMaze.partition(pix, low, high);
				
				if((q - low) > (high - q) ) {
					s[p++] = low;
					s[p++] = q - 1;
					if(high > q) {
						s[p++] = q + 1;
						s[p++] = high;
					}
				} else {
					s[p++] = q + 1;
					s[p++] = high;
					if(q > low) {
						s[p++] = low;
						s[p++] = q - 1;
					}
				}
				
			}
			
		}
		
	}
	
}) ();
 
/*(function() {
	
	var namespace = FACEMATRIX.namespace('FACEMATRIX.toMaze');
	
	if(namespace.quick_sort === undefined) {
		
		namespace.quick_sort = function(pix, l, r) {
			if(l < r) {
				var i = l,
					j = r,
					X = {};
				X.i = pix[l].i;
				X.j = pix[l].j;
				X.gray = pix[l].gray;
				
				while(i < j) {
				
					while(i < j && pix[j].gray >= X.gray)
						j--;// 从右向左找第一个小于X的数
						
					if(i < j) {
						pix[i].i = pix[j].i;
						pix[i].j = pix[j].j;
						pix[i].gray = pix[j].gray;
						i++;
					}
					
					while(i < j && pix[i].gray < X.gray)
						i++;// 从左向右找第一个大于等于X的数
						
					if(i < j) {
						pix[j].i = pix[i].i;
						pix[j].j = pix[i].j;
						pix[j].gray = pix[i].gray;
						j--;
					}
					
				}
				pix[i].i = X.i;
				pix[i].j = X.j;
				pix[i].gray = X.gray;
				FACEMATRIX.toMaze.quick_sort(pix, l, i - 1); // 递归调用
				FACEMATRIX.toMaze.quick_sort(pix, i + 1, r);
			}
		}
		
	}
	
}) ();*/