/**
 * 用于连通区域标记的目标段对象
 * 2013/8/15
 **/
function ObjSeg(start, end, scan, width) {
	this.start = start;
	this.end = end;
	this.scan = scan; // 0-上下邻域均需扫描 1-该段的上邻域不用扫描 2-下邻域不用扫描 3-上下邻域不用扫描
	this.row = parseInt(start / width) + 1;
	this.col_s = start % width + 1;
	this.col_e = end % width + 1;
	this.pix_num = end - start + 1;
}