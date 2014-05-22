import javax.servlet.http.HttpServletRequest;

import org.apache.catalina.websocket.StreamInbound;
import org.apache.catalina.websocket.WebSocketServlet;


public class MyWebSocket extends WebSocketServlet{

	/**
	 * 
	 */
	private static final long serialVersionUID = 7837096980913784464L;

	@Override
	protected StreamInbound createWebSocketInbound(String arg0,
			HttpServletRequest arg1) {
		// TODO Auto-generated method stub
		System.out.println("receive");
		System.out.println(arg1.getLocalAddr());
		return new MyStreamInbound();
	}

}