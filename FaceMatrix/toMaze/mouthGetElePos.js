/** 
 * 嘴迷宫——获得入口、传送门和通行证的位置，并归白
 * 2013/9/5
 * authot@liuqiushan
 **/
(function() {
	
	var namespace = FACEMATRIX.namespace('FACEMATRIX.toMaze');
	
	if(namespace.mouthGetElePos === undefined) {
	
		namespace.mouthGetElePos = function(mContext, width, height) {

			var mDataBuffer = new ArrayBuffer();
			var mData = new Uint8Array(mDataBuffer);
			var mData = mContext.getImageData(0, 0, width, height);
				
			var i, j, idx;
			var redFlag = 0;
			var yellowFlag = 0;
			var greenFlag = 0;
			for(i = 0; i < height; i++) {
				for(j = 0; j < width; j++){
					idx = (i * width + j) * 4;

					if(mData.data[idx] == 255 && mData.data[idx+1] == 0 && mData.data[idx+2] == 0 && redFlag == 0) { //寻找红色——入口
						GLOBALTOM.MOUTH.entrance.x = j;
						GLOBALTOM.MOUTH.entrance.y = i;
						mData.data[idx] = 255;
						mData.data[idx+1] = 255;
						mData.data[idx+2] = 255;
					}
					
					if(mData.data[idx] == 255 && mData.data[idx+1] == 255 && mData.data[idx+2] == 0 && yellowFlag == 0) { //寻找黄色——传送门
						GLOBALTOM.MOUTH.portal.x = j;
						GLOBALTOM.MOUTH.portal.y = i;
						mData.data[idx] = 255;
						mData.data[idx+1] = 255;
						mData.data[idx+2] = 255;
					}

					if(mData.data[idx] == 0 && mData.data[idx+1] == 255 && mData.data[idx+2] == 0 && greenFlag == 0) { //寻找绿色——通行证
						GLOBALTOM.MOUTH.gatePass.x = j;
						GLOBALTOM.MOUTH.gatePass.y = i;
						mData.data[idx] = 255;
						mData.data[idx+1] = 255;
						mData.data[idx+2] = 255;
					}					
				}
			}
			
			mContext.putImageData(mData, 0, 0);
			
		}
	
	}
	
}
) ();