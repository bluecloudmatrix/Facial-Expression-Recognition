/**
 * woker线程用于拍摄，这是和3D场景中的requestAnimationFrame避开矛盾，否则会运行不流畅
 * 2013/8/28
 **/
function workerHandle(App) {

	//worker thread
	var worker_second = 0;
	var worker = new Worker('../js/tools/shoot.js');
	worker.postMessage(12);
	worker.onmessage = function(event) {
								
		var canvas = document.getElementById("boundary");
		var context = canvas.getContext("2d");
		context.font="60px Verdana";
		context.fillStyle = "#9D9D9D";
		context.globalAlpha = (Math.sin(0) + 0.8) / 1; 
		context.strokeStyle = "#0066CC";
		context.lineWidth = 5;
								
		worker_second++;
									
		App.drawToCanvas();
									
		//延迟5s拍摄
		if(worker_second <= 50) {
			if(worker_second/10 == Math.floor(worker_second/10)) {
				context.clearRect(0, 0, canvas.width, canvas.height);
				context.fillText(""+(worker_second/10), canvas.width/6, canvas.height/8);
				context.strokeRect(canvas.width/4, canvas.height/16, canvas.width/2, canvas.height*(7/8));
			}
			worker.postMessage(12);
		}
										
	}
	//end

}