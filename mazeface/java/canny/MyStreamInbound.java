import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.io.OutputStreamWriter;
import java.io.Reader;
import java.nio.CharBuffer;
import java.util.Scanner;

import org.apache.catalina.websocket.StreamInbound;
import org.apache.catalina.websocket.WsOutbound;




public class MyStreamInbound extends StreamInbound{

	//public static String filename = "/home/liuqiushan/test.txt"; 
	//public static String facematrix = "/home/liuqiushan/facemaze";
	public static int canvasWidth = 640;
	public static int canvasHeight = 480;
	public static int gCanvasData[] = new int[canvasWidth * canvasHeight * 4];
	public static float magnitude[][];
	public static float orientation[][];

	/**
	*  binary data arrived
	**/
	@Override
	protected void onBinaryData(InputStream arg0) throws IOException {
		// TODO Auto-generated method stub
		//System.out.println("receive blob!");
		//System.out.println(arg0);
		
		//FileOutputStream out = new FileOutputStream(new File(filename));
		int idx = 0;
		int data = arg0.read();
		while(data!=-1){
			//out.write(data);
			gCanvasData[idx++] = data;
			data = arg0.read();
			if(idx == canvasWidth * canvasHeight * 4) break;
		}
		idx--;
		
		//out.close();

		
		mazeCreate();
		
		for(StreamInbound inbound : InitServlet.getSocketList()){
			//FileInputStream in = new FileInputStream(new File(filename));
			
			WsOutbound outbound = inbound.getWsOutbound(); //getWsOutbound可以返回当前的WsOutbound，通过他向客户端回传数据
			//do{
			//	data = in.read();
			//	outbound.writeBinaryData(data);
			//}while(data!=-1);
			for(int i = 0; i < idx; i++)
				outbound.writeBinaryData(gCanvasData[i]);
			
			outbound.flush();
		}
	}

	/**
	*  text data arrived 
	**/
	@Override
	protected void onTextData(Reader arg0) throws IOException {
		// TODO Auto-generated method stub
		System.out.println("receive text!");
		for(StreamInbound inbound : InitServlet.getSocketList()){
			Scanner in = new Scanner(arg0);
			String str = in.nextLine();
			System.out.println(str);
			WsOutbound outbound = inbound.getWsOutbound();
			
			CharBuffer buffer = CharBuffer.wrap(str);
			outbound.writeTextMessage(buffer);
			outbound.flush();
		}
	}
	
	@Override
	protected void onClose(int status){
		InitServlet.getSocketList().remove(this);  
		super.onClose(status);
	}
	
	@Override
	protected void onOpen(WsOutbound outbound){
		super.onOpen(outbound);
		InitServlet.getSocketList().add(this);
		
	}
	
	public static void mazeCreate() throws IOException {
		Grayscale gray = new Grayscale(gCanvasData);
		gray.processGray();
		gCanvasData = gray.getGrayData();
		
		Gaussian gaussian = new Gaussian(gCanvasData, canvasWidth, canvasHeight);
		gaussian.processGaussian();
		gCanvasData = gaussian.getGaussianData();
		
		FindGradients find = new FindGradients(gCanvasData, canvasWidth, canvasHeight);
		find.processGradient();
		magnitude = find.getMagnitude();
		orientation = find.getOrientation();

		NonMaximumSuppression nonmax = new NonMaximumSuppression(gCanvasData, canvasWidth, canvasHeight, orientation);
		nonmax.processNonMax();
		gCanvasData = nonmax.getNonMaxSupData();
		
		/*DoubleThresholding thresh = new DoubleThresholding(gCanvasData, canvasWidth, canvasHeight, magnitude);
		thresh.processDoubleThresh();
		gCanvasData = thresh.getDoubleThresh();*/
		 
	}

}