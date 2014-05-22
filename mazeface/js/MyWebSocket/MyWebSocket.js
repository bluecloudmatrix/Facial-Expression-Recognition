/**
 * an Object WebSocket
 * using a closure
 **/
(function(obj) {
	//define a package
	var MyWebSocket = {};
	
	MyWebSocket.ws = null;
	
	MyWebSocket.startWebSocket = function() {
	
		if ('WebSocket' in window)
			this.ws = new WebSocket("ws://localhost:8080/lqs/takephoto2.0/mywebsocket.do");
		else if ('MozWebSocket' in window)
			this.ws = new MozWebSocket("ws://localhost:8080/lqs/takephoto2.0/mywebsocket.do");
		else
			alert("your explorer not support websocket");
		this.ws.binaryType = 'arraybuffer';

		//onmessage() receives the data from the server
		this.ws.onmessage = function(msg) {
			//make sure ".data"
			var bytearray =new Uint8Array(msg.data); 
			var tempcanvas = document.createElement('canvas');
    			tempcanvas.height= 640;
    			tempcanvas.width= 480;
			var tempcontext = tempcanvas.getContext('2d');
 
			var imgdata = tempcontext.getImageData(0, 0, 640, 480);
 
			var imgdatalen = imgdata.data.length;
 
			for(var i = 8; i < imgdatalen; i++)
			{
    				imgdata.data[i]= bytearray[i];			
			}

			tempcontext.putImageData(imgdata, 0, 0);
			document.body.appendChild(tempcanvas);      		
		};

		this.ws.onclose = function(evt) {
			alert("lose connect！");
		};
		
		this.ws.onopen = function(evt) {
			alert("websocket connect successfully！");
		};
	}

	//public method for encoding an Uint8Array to base64
	MyWebSocket.encode = function(input) {
	    var keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
	    var output = "";
	    var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
	    var i = 0;

	    while (i < input.length) {
		chr1 = input[i++];
		chr2 = i < input.length ? input[i++] : Number.NaN; // Not sure if the index 
		chr3 = i < input.length ? input[i++] : Number.NaN; // checks are needed here

		enc1 = chr1 >> 2;
		enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
		enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
		enc4 = chr3 & 63;

		if (isNaN(chr2)) {
		    enc3 = enc4 = 64;
		} else if (isNaN(chr3)) {
		    enc4 = 64;
		}
		output += keyStr.charAt(enc1) + keyStr.charAt(enc2) +
		          keyStr.charAt(enc3) + keyStr.charAt(enc4);
	    }
	    return output;
	}
	
	//put WebSocket under obj(window)
	obj.MyWebSocket = MyWebSocket;
})(window);