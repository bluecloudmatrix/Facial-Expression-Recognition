
public class Grayscale {
	
	private int grayData[];
	
	public Grayscale(int gCanvas[]) {
		grayData = gCanvas;
	}
	
	public void processGray() {
		//Y = 0.299R + 0.587G + 0.114B
		for(int i = 0; i < grayData.length; i += 4) {
			int gray = (int) (0.299 * grayData[i + 1] + 0.587 * grayData[i + 2] + 0.114 * grayData[i + 3]);
			grayData[i + 0] = 255;
			grayData[i + 1] = gray;
			grayData[i + 2] = gray;
			grayData[i + 3] = gray;
		}	
	}
	
	public int[] getGrayData() {
		return grayData;
	}
	
}