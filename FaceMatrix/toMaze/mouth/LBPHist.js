/**
 * class function LBPHist用于计算目标区域的LBP直方图
 * 2013/8/26 15:23pm
 **/
(function() {

	var namespace = FACEMATRIX.namespace('FACEMATRIX.toMaze.mouth');
	
	if(namespace.LBPHist === undefined) {
	
		namespace.LBPHist = function(AimRect, CanvasWH) {
			this.AimRect = AimRect;
			this.CanvasWH = CanvasWH;
			this.zonCount = 0;
			this.Zones = 0;
			this.Hists = 0;
		};
		
		var p = namespace.LBPHist.prototype;
		
		//划分区域
		p.zoning = function(rows, cols) {
			
			this.zonCount = rows * cols;
			this.Zones = new Array(this.zonCount);
			this.Hists = new Array(this.zonCount);
			
			var i, j, rect, x, y, width, height;
			var count = 0;
			for(i = 0; i < rows; i++)
				for(j = 0; j < cols; j++) {
					
					x = this.AimRect.x + Math.floor(this.AimRect.width * (j/cols));
					y = this.AimRect.y + Math.floor(this.AimRect.height * (i/rows));
					width = Math.floor(this.AimRect.width / cols);
					height = Math.floor(this.AimRect.height / rows);
					rect = new Rect(x, y, width, height);
					this.Zones[count++] = rect;
					
				}
		
		};
		
		p.getHists = function() {
			
			return this.Hists;
			
		}
		
		p.calcHists = function() {
		
			var i;
			for(i = 0; i < this.zonCount; i++) {
			
				this.Hists[i] = this.calcOneHist(this.Zones[i]);
				
			}
		
		}
		
		p.calcOneHist = function(rect) {
			
			var num = 256;
			var hist = new Histogram(num);
	
			var x = rect.x;
			var y = rect.y;
			var width = rect.width;
			var height = rect.height;
			
			var W = this.CanvasWH.W;
			var H = this.CanvasWH.H;
			var imgDataBuffer = new ArrayBuffer();
			var imgData = new Uint8Array(imgDataBuffer);
			
			imgData = this.CanvasWH.gCanvasData;
				
			var i, j, idx, idxup, idxdown, idxleft, idxright, idxlu, idxru, idxld, idxrd, lbp;
			for(i = y; i < y + height; i++)
				for(j = x; j < x + width; j++) {
					
					idx = (i * W + j) * 4;
					idxleft = (i * W + j-1) * 4;
					idxright = (i * W + j+1) * 4;
					idxup = ((i-1) * W + j) * 4;
					idxlu = ((i-1) * W + j-1) * 4;
					idxru = ((i-1) * W + j+1) * 4;
					idxdown = ((i+1) * W + j) * 4;
					idxld = ((i+1) * W + j-1) * 4;
					idxrd = ((i+1) * W + j+1) * 4;
					
					
					if(j-1 < 0 || i-1 < 0 || j+1 > W-1 || i+1 > H-1) //该点处的LBP越界
						hist.bins[imgData.data[idx]]++;
					else {
					
						//求该点处的LBP算子
						if(imgData.data[idxlu] - imgData.data[idx] >= 0)
							lbp = Math.pow(2, 7);
						else
							lbp = 0;
							
						if(imgData.data[idxup] - imgData.data[idx] >= 0)
							lbp += Math.pow(2, 6);
						else
							lbp += 0;
							
						if(imgData.data[idxru] - imgData.data[idx] >= 0)
							lbp += Math.pow(2, 5);
						else
							lbp += 0;
						
						if(imgData.data[idxright] - imgData.data[idx] >= 0)
							lbp += Math.pow(2, 4);
						else
							lbp += 0;
							
						if(imgData.data[idxrd] - imgData.data[idx] >= 0)
							lbp += Math.pow(2, 3);
						else
							lbp += 0;
							
						if(imgData.data[idxdown] - imgData.data[idx] >= 0)
							lbp += Math.pow(2, 2);
						else
							lbp += 0;
							
						if(imgData.data[idxld] - imgData.data[idx] >= 0)
							lbp += Math.pow(2, 1);
						else
							lbp += 0;
							
						if(imgData.data[idxleft] - imgData.data[idx] >= 0)
							lbp += Math.pow(2, 0);
						else
							lbp += 0;
						
						hist.bins[lbp]++;
					
					}
				}
			
			return hist;
		}
	
	} 

}) ();

//存储直方图的数据结构
function Histogram(num) {
	this.num = num;
	this.bins = new Array(num);
	var i;
	for(i = 0; i < num; i++)
		this.bins[i] = 0;
}