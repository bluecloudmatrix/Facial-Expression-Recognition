import java.util.ArrayList;
import java.util.List;

import javax.servlet.ServletConfig;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;

import org.apache.catalina.websocket.StreamInbound;


public class InitServlet extends HttpServlet{  

	/**
	 * 
	 */
	private static final long serialVersionUID = 7738036165392946446L;
	
	private static List<StreamInbound> socketList;    
	
	public void init(ServletConfig config) throws ServletException{
		socketList = new ArrayList<StreamInbound>();
		super.init(config);
		System.out.println("Server start============");
	}
	public static List<StreamInbound > getSocketList(){
		return InitServlet.socketList;
	}
}