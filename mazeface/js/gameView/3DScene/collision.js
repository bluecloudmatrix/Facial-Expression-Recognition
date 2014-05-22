function collision(obj, halfWidth, halfHeight, speed, direction){
	/*
	 * 0 --> right
	 * 1 --> left
	 * 2 --> up
	 * 3 --> down
	 */ 
	if(obj.position.z > camera.position.z){
	
		if(direction == 0){//right
		
			obj_x = obj.position.x - speed;
			obj_z = obj.position.z;
			
			if((arr[parseInt((obj_x+halfWidth)/10)][parseInt((obj_z+halfHeight+9)/10)] == 0 
				|| arr[parseInt((obj_x+halfWidth)/10)][parseInt((obj_z+halfHeight+9)/10)] == 2)
				&& (arr[parseInt((obj_x+halfWidth)/10)][parseInt((obj_z+halfHeight)/10)] == 0 
				|| arr[parseInt((obj_x+halfWidth)/10)][parseInt((obj_z+halfHeight)/10)] == 2)
				){

				obj.position.x = obj_x;
				
				//记录轨迹
				arr[parseInt((obj.position.x+halfWidth)/10)][parseInt((obj.position.z+halfHeight+9)/10)] = 2; //2代表小球轨迹
				arr[parseInt((obj.position.x+halfWidth)/10)][parseInt((obj.position.z+halfHeight)/10)] = 2;
				
				//碰到终点
				if(parseInt((obj.position.x+halfWidth)/10) == finalAimObj.getArrJ() 
					&& (parseInt((obj.position.z+halfHeight+9)/10) == finalAimObj.getArrI()
					|| parseInt((obj.position.z+halfHeight)/10) == finalAimObj.getArrI())
					){
					
					finalAimObj.showTrack();
					
				}
				
				//碰到通行证
				if(parseInt((obj.position.x+halfWidth)/10) == gatePassObj.getArrJ() 
					&& (parseInt((obj.position.z+halfHeight+9)/10) == gatePassObj.getArrI()
					|| parseInt((obj.position.z+halfHeight)/10) == gatePassObj.getArrI())
					){

					gatePassObj.getKey();
					
				}
				
				//碰到传送门
				if(parseInt((obj.position.x+halfWidth)/10) == portalObj.getArrJ() 
					&& (parseInt((obj.position.z+halfHeight+9)/10) == portalObj.getArrI()
					|| parseInt((obj.position.z+halfHeight)/10) == portalObj.getArrI())
					){

					portalObj.transfer();
					
				}
				
				
			}else{
			
				if(speed > 1){
					collision(obj, halfWidth, halfHeight, speed-1, 0);
				} 
				
			}
			
		}else if(direction == 1){//left
		
			obj_x = obj.position.x + speed;
			obj_z = obj.position.z;
			
			//if(arr[parseInt((obj_x+halfWidth)/10)][parseInt((obj_z+halfHeight)/10)] == 0 
			//	&& arr[Math.ceil((obj_x+halfWidth)/10)][parseInt((obj_z+halfHeight)/10)] == 0
			//	&& arr[parseInt((obj_x+halfWidth)/10)][parseInt((obj_z+halfHeight+9)/10)] == 0 
			//	&& arr[Math.ceil((obj_x+halfWidth)/10)][parseInt((obj_z+halfHeight+9)/10)] == 0
			//	)
			if((arr[Math.ceil((obj_x+halfWidth)/10)][parseInt((obj_z+halfHeight)/10)] == 0
				|| arr[Math.ceil((obj_x+halfWidth)/10)][parseInt((obj_z+halfHeight)/10)] == 2)
				&& (arr[Math.ceil((obj_x+halfWidth)/10)][parseInt((obj_z+halfHeight+9)/10)] == 0
				|| arr[Math.ceil((obj_x+halfWidth)/10)][parseInt((obj_z+halfHeight+9)/10)] == 2)
				){
				
				obj.position.x = obj_x;
				
				//记录轨迹
				arr[Math.ceil((obj.position.x+halfWidth)/10)][parseInt((obj.position.z+halfHeight)/10)] = 2;
				arr[Math.ceil((obj.position.x+halfWidth)/10)][parseInt((obj.position.z+halfHeight+9)/10)] = 2;
				
				//碰到终点
				if(Math.ceil((obj.position.x+halfWidth)/10) == finalAimObj.getArrJ() 
					&& (parseInt((obj.position.z+halfHeight)/10) == finalAimObj.getArrI()
					|| parseInt((obj.position.z+halfHeight+9)/10) == finalAimObj.getArrI())
					){
					
					finalAimObj.showTrack();
					
				}
				
				//碰到通行证
				if(Math.ceil((obj.position.x+halfWidth)/10) == gatePassObj.getArrJ() 
					&& (parseInt((obj.position.z+halfHeight)/10) == gatePassObj.getArrI()
					|| parseInt((obj.position.z+halfHeight+9)/10) == gatePassObj.getArrI())
					){
					
					gatePassObj.getKey();
					
				}
				
				//碰到传送门
				if(Math.ceil((obj.position.x+halfWidth)/10) == portalObj.getArrJ() 
					&& (parseInt((obj.position.z+halfHeight)/10) == portalObj.getArrI()
					|| parseInt((obj.position.z+halfHeight+9)/10) == portalObj.getArrI())
					){
					
					portalObj.transfer();
					
				}
				
			}else{
				if(speed > 1){
					collision(obj, halfWidth, halfHeight, speed-1, 1);
				}
			}
		}else if(direction == 2){//up
		
			obj_x = obj.position.x;
			obj_z = obj.position.z + speed;
			
			if((arr[parseInt((obj_x+halfWidth)/10)][parseInt((obj_z+halfHeight+9)/10)] == 0 
				|| arr[parseInt((obj_x+halfWidth)/10)][parseInt((obj_z+halfHeight+9)/10)] == 2) 
				&& (arr[Math.ceil((obj_x+halfWidth)/10)][parseInt((obj_z+halfHeight+9)/10)] == 0
				|| arr[Math.ceil((obj_x+halfWidth)/10)][parseInt((obj_z+halfHeight+9)/10)] == 2)
				){
				
				obj.position.z = obj_z;
				
				//记录轨迹
				arr[parseInt((obj.position.x+halfWidth)/10)][parseInt((obj.position.z+halfHeight+9)/10)] = 2;
				arr[Math.ceil((obj.position.x+halfWidth)/10)][parseInt((obj.position.z+halfHeight+9)/10)] = 2;
				
				//碰到终点
				if(parseInt((obj.position.z+halfHeight+9)/10) == finalAimObj.getArrI() 
					&& (parseInt((obj.position.x+halfWidth)/10) == finalAimObj.getArrJ()
					|| Math.ceil((obj.position.x+halfWidth)/10) == finalAimObj.getArrJ())
					){
					
					finalAimObj.showTrack();
					
				}
				
				//碰到通行证
				if(parseInt((obj.position.z+halfHeight+9)/10) == gatePassObj.getArrI() 
					&& (parseInt((obj.position.x+halfWidth)/10) == gatePassObj.getArrJ()
					|| Math.ceil((obj.position.x+halfWidth)/10) == gatePassObj.getArrJ())
					){
					
					gatePassObj.getKey();
					
				}
				
				//碰到传送门
				if(parseInt((obj.position.z+halfHeight+9)/10) == portalObj.getArrI() 
					&& (parseInt((obj.position.x+halfWidth)/10) == portalObj.getArrJ()
					|| Math.ceil((obj.position.x+halfWidth)/10) == portalObj.getArrJ())
					){
					
					portalObj.transfer();
					
				}
				
			}else{
			
				if(speed > 1){
					collision(obj, halfWidth, halfHeight, speed-1, 2);
				}
				
			}
			
		}else if(direction == 3){//down
		
			obj_x = obj.position.x;
			obj_z = obj.position.z - speed;
			
			if((arr[parseInt((obj_x+halfWidth)/10)][parseInt((obj_z+halfHeight)/10)] == 0 
				|| arr[parseInt((obj_x+halfWidth)/10)][parseInt((obj_z+halfHeight)/10)] == 2)
				&& (arr[Math.ceil((obj_x+halfWidth)/10)][parseInt((obj_z+halfHeight)/10)] == 0
				|| arr[Math.ceil((obj_x+halfWidth)/10)][parseInt((obj_z+halfHeight)/10)] == 2)
				){
				
				obj.position.z = obj_z;
				
				//记录轨迹
				arr[parseInt((obj.position.x+halfWidth)/10)][parseInt((obj.position.z+halfHeight)/10)] = 2;
				arr[Math.ceil((obj.position.x+halfWidth)/10)][parseInt((obj.position.z+halfHeight)/10)] = 2;
				
				//碰到终点
				if(parseInt((obj.position.z+halfHeight)/10) == finalAimObj.getArrI() 
					&& (parseInt((obj.position.x+halfWidth)/10) == finalAimObj.getArrJ()
					|| Math.ceil((obj.position.x+halfWidth)/10) == finalAimObj.getArrJ())
					){
					
					finalAimObj.showTrack();
					
				}
				
				//碰到通行证
				if(parseInt((obj.position.z+halfHeight)/10) == gatePassObj.getArrI() 
					&& (parseInt((obj.position.x+halfWidth)/10) == gatePassObj.getArrJ()
					|| Math.ceil((obj.position.x+halfWidth)/10) == gatePassObj.getArrJ())
					){
					
					gatePassObj.getKey();
					
				}
				
				//碰到传送门
				if(parseInt((obj.position.z+halfHeight)/10) == portalObj.getArrI() 
					&& (parseInt((obj.position.x+halfWidth)/10) == portalObj.getArrJ()
					|| Math.ceil((obj.position.x+halfWidth)/10) == portalObj.getArrJ())
					){
					
					portalObj.transfer();
					
				}
				
			}else{
			
				if(speed > 1){
					collision(obj, halfWidth, halfHeight, speed-1, 3);
				}
				
			}
			
		}
		
	}else{
		if(direction == 0){//right
			obj_x = obj.position.x + speed;
			obj_z = obj.position.z;
			if(arr[parseInt((obj_x+halfWidth)/10)][parseInt((obj_z+halfHeight)/10)] == 0){
				obj.position.x = obj_x;
			}else{
				if(speed > 1){
					collision(obj, halfWidth, halfHeight, speed-1, 0);
				}
			}
		}else if(direction == 1){//left
			obj_x = obj.position.x - speed;
			obj_z = obj.position.z;
			if(arr[parseInt((obj_x+halfWidth)/10)][parseInt((obj_z+halfHeight)/10)] == 0){
				obj.position.x = obj_x;
			}else{
				if(speed > 1){
					collision(obj, halfWidth, halfHeight, speed-1, 1);
				}
			}
		}else if(direction == 2){//up
			obj_x = obj.position.x;
			obj_z = obj.position.z - speed;
			if(arr[parseInt((obj_x+halfWidth)/10)][parseInt((obj_z+halfHeight)/10)] == 0){
				obj.position.z = obj_z;
			}else{
				if(speed > 1){
					collision(obj, halfWidth, halfHeight, speed-1, 2);
				}
			}
		}else if(direction == 3){//down
			obj_x = obj.position.x;
			obj_z = obj.position.z + speed;
			if(arr[parseInt((obj_x+halfWidth)/10)][parseInt((obj_z+halfHeight)/10)] == 0){
				obj.position.z = obj_z;
			}else{
				if(speed > 1){
					collision(obj, halfWidth, halfHeight, speed-1, 3);
				}
			}
		}
	}
}