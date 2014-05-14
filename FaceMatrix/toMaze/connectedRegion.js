/**
 * 连通区域标记算法（段标记法和区域生长法相结合）
 * 2013/8/16
 **/
(function() {
	
	var namespace = FACEMATRIX.namespace('FACEMATRIX.toMaze');
	
	if(namespace.connectedRegion === undefined) {
		
		namespace.connectedRegion = function(imgData, aim) {
			var change;
		
			if(aim == 255)
				change = 0;
			else if(aim == 0)
				change = 255;
			
			
			var width = imgData.width,
				height = imgData.height;
				
			//标记数组
			var flagBuffer = new ArrayBuffer(width * height);
			var flag = new Uint8Array(flagBuffer); // 0-未被标记 1-已标记
			
			//目标段链表
			var segList;
			
			var i, j, idx, id, end, objSeg, segNode, a, b, id_2, idx_2, next = 0, sum = 0, m;
			
			for(i = 0; i < width * height; i++) {
				flag[i] = 0; //0表示该像素点未被标记
			}
			
			for(i = 0; i < height; i++) {
				for(j = 0; j < width; j++) {
					id = i * width + j; //目标段开始的像素点位置
					idx = id * 4;
					if(imgData.data[idx] == aim && flag[id] == 0) {
						flag[id] = 1;
						end = id + 1;
						while(imgData.data[end*4] == aim && end < (i+1)*width) {//按行搜寻目标段
							 flag[end] = 1;
							 end++;
						}
						end--; //目标段结束的像素点位置
						
						segList = new LinkedList();
						objSeg = new ObjSeg(id, end, 1, width);
						segList.addLast(objSeg);
						segNode = segList.getFirst();
						while(segNode) {
							if(segNode.scan == 1) { //只对该段下邻域进行扫描
								if(segNode.row < height) { //不能是最后一行
									for(a = 0; a < width; a++) {
										id_2 = segNode.row * width + a;
										idx_2 = id_2 * 4;
										if(imgData.data[idx_2] == aim && flag[id_2] == 0) {
											end = id_2 + 1;
											while(imgData.data[end*4] == aim && end < (segNode.row+1)*width)
												end++;
											end--;
											
											//判断该段是否在八邻域内
											if((segNode.col_s-2) <= (end%width) && (segNode.col_e) >= (id_2%width)) {
												//进行标记
												for(b = id_2; b <= end; b++)
													flag[b] = 1;
												
												//判断覆盖
												if(id_2%width >= segNode.col_s - 1 && end%width <= segNode.col_e - 1) //segNode段向下覆盖新段
													objSeg = new ObjSeg(id_2, end, 1, width);
												else
													objSeg = new ObjSeg(id_2, end, 0, width);
												
												//新段加入链表
												segList.addLast(objSeg);
											}
												
											a = a + (end - id_2); //跳过已扫段
											
										}
									}
								}
							} else if(segNode.scan == 2) { //只对该段上邻域进行扫描
								if(segNode.row > 1) {
									//扫描上邻域
									for(a = 0; a < width; a++) {
										id_2 = (segNode.row - 2) * width + a;
										idx_2 = id_2 * 4;
										if(imgData.data[idx_2] == aim && flag[id_2] == 0) {
											end = id_2 + 1;
											while(imgData.data[end*4] == aim && end < (segNode.row-1)*width)
												end++;
											end--;
											
											if((segNode.col_s-2) <= (end%width) && (segNode.col_e) >= (id_2%width)) {

												for(b = id_2; b <= end; b++)
													flag[b] = 1;
												
												//判断覆盖
												if(id_2%width >= segNode.col_s - 1 && end%width <= segNode.col_e - 1) //segNode段向上覆盖新段
													objSeg = new ObjSeg(id_2, end, 2, width);
												else
													objSeg = new ObjSeg(id_2, end, 0, width);
															
												segList.addLast(objSeg);
											}
												
											a = a + (end - id_2);
										}
									}
								}
							} else if(segNode.scan == 0) { //上下邻域都扫描
								if(segNode.row > 1 && segNode.row < height) { //不能是第一行和最后一行
									//扫描上邻域
									for(a = 0; a < width; a++) {
										id_2 = (segNode.row - 2) * width + a;
										idx_2 = id_2 * 4;
										if(imgData.data[idx_2] == aim && flag[id_2] == 0) {
											end = id_2 + 1;
											while(imgData.data[end*4] == aim && end < (segNode.row-1)*width)
												end++;
											end--;
											
											if((segNode.col_s-2) <= (end%width) && (segNode.col_e) >= (id_2%width)) {

												for(b = id_2; b <= end; b++)
													flag[b] = 1;
												
												//判断覆盖
												if(id_2%width >= segNode.col_s - 1 && end%width <= segNode.col_e - 1) //segNode段向上覆盖新段
													objSeg = new ObjSeg(id_2, end, 2, width);
												else
													objSeg = new ObjSeg(id_2, end, 0, width);
															
												segList.addLast(objSeg);
											}
												
											a = a + (end - id_2);
										}
									}
									
									//扫描下邻域
									for(a = 0; a < width; a++) {
										id_2 = segNode.row * width + a;
										idx_2 = id_2 * 4;
										if(imgData.data[idx_2] == aim && flag[id_2] == 0) {
											end = id_2 + 1;
											while(imgData.data[end*4] == aim && end < (segNode.row+1)*width)
												end++;
											end--;
											
											if((segNode.col_s-2) <= (end%width) && (segNode.col_e) >= (id_2%width)) {
											
												for(b = id_2; b <= end; b++)
													flag[b] = 1;
												
												//判断覆盖
												if(id_2%width >= segNode.col_s - 1 && end%width <= segNode.col_e - 1) //segNode段向下覆盖新段
													objSeg = new ObjSeg(id_2, end, 1, width);
												else
													objSeg = new ObjSeg(id_2, end, 0, width);
												
												segList.addLast(objSeg);
											}
												
											a = a + (end - id_2);
											
										}
									}
								}
							}
							
							//换节点
							if(next < segList.size() - 1)
								segNode = segList.get(++next);
							else {
								segNode = 0;
								next = 0;
							}
								
						}
						
						//判断由该像素点引发的连通区域是否是人脸皮肤区域
						segNode = segList.getFirst();
						while(segNode) {
							sum += segNode.pix_num;
							//换节点
							if(next < segList.size() - 1)
								segNode = segList.get(++next);
							else {
								segNode = 0;
								next = 0;
							}
						}
						
						if(sum < 700) { //非人脸皮肤区域
							//进行填充
							segNode = segList.getFirst();
							while(segNode) {
								for(m = segNode.start; m <= segNode.end; m++) {
									imgData.data[m * 4 + 0] = change;
									imgData.data[m * 4 + 1] = change;
									imgData.data[m * 4 + 2] = change;
								}
								
								//换节点
								if(next < segList.size() - 1)
									segNode = segList.get(++next);
								else {
									segNode = 0;
									next = 0;
								}
							}
						}
						
						sum = 0;
						segList.clear();
						segList = null;
					}
				}
			}
			
		}
		
	}
	
}) ();