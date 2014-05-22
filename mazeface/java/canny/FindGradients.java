

public class FindGradients {

	private int gradientData[];
	private int gradient[][];
	private float magnitude[][];
	private float orientation[][];
	private float P[][];
	private float Q[][];
	private int canvasWidth;
	private int canvasHeight;
	
	public FindGradients(int gaussianData[], int width, int height) {
		gradientData = gaussianData;
		canvasWidth = width;
		canvasHeight = height;
		gradient = new int[width][height];
		magnitude = new float[width][height];
		orientation = new float[width][height];
		P = new float[width][height];
		Q = new float[width][height];
		
		for(int i = 0; i < width; i++) {
			for(int j = 0; j < height; j++) {
				gradient[i][j] = gradientData[(j * width + i) * 4 + 1];
			}
		}
		
	}	
	
	public void processGradient() {
		for(int i = 0; i < canvasWidth - 1; i++) {
			for(int j = 0; j < canvasHeight - 1; j++) {
				P[i][j] = (gradient[i][j + 1] - gradient[i][j] + gradient[i + 1][j + 1] - gradient[i + 1][j]) / 2;
				Q[i][j] = (gradient[i][j] - gradient[i + 1][j] + gradient[i][j + 1] - gradient[i + 1][j + 1]) / 2;
				magnitude[i][j] = (float) Math.sqrt(Math.pow(P[i][j], 2) + Math.pow(Q[i][j], 2));
				orientation[i][j] = (float) Math.atan(Q[i][j]/(P[i][j] + 0.001));
			}
		}
	}
	
	public float[][] getMagnitude() {
		return magnitude;
	}
	
	public float[][] getOrientation() {
		return orientation;
	}
	
}