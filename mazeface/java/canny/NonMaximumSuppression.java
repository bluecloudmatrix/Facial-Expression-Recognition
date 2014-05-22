
public class NonMaximumSuppression {
	
	private int NonMaxSupData[];
	private int NonMax[][];
	private int copyNonMax[][]; //back
	private float orient[][];
	private int canvasWidth;
	private int canvasHeight;
	
	public NonMaximumSuppression(int gradientData[], int width, int height, float orientation[][]) {
		
		canvasWidth = width;
		canvasHeight = height;
		orient = orientation;
		
		NonMaxSupData = new int[canvasWidth * canvasHeight * 4];
		NonMax = new int[width][height];
		copyNonMax = new int[width][height];
		for(int i = 0; i < width; i++) {
			for(int j = 0; j < height; j++) {
				NonMax[i][j] = gradientData[(j * width + i) * 4 + 1];
				copyNonMax[i][j] = gradientData[(j * width + i) * 4 + 1];
			}
		}
	}
	
	public void processNonMax() {
		for(int i = 0; i < canvasWidth - 1; i++) {
			for(int j = 0; j < canvasHeight - 1; j++) {
				if(orient[i][j] >= 3/8*Math.PI)
					orient[i][j] = 2;
				else if(orient[i][j] >= 1/8*Math.PI)
					orient[i][j] = 1;
				else if(orient[i][j] >= (-1)/8*Math.PI)
					orient[i][j] = 0;
				else if(orient[i][j] >= (-3)/8*Math.PI)
					orient[i][j] = 3;
				else
					orient[i][j] = 2;
			}
		}
		
		for(int m = 1; m < canvasWidth - 1; m++) {
			for(int n = 1; n < canvasHeight - 1; n++) {
				if(orient[m][n] == 0)
					if((NonMax[m][n] > NonMax[m][n - 1]) && (NonMax[m][n] > NonMax[m][n + 1]));
					else copyNonMax[m][n] = 0;
				if(orient[m][n] == 1)
					if((NonMax[m][n] > NonMax[m + 1][n - 1]) && (NonMax[m][n] > NonMax[m - 1][n + 1]));
					else copyNonMax[m][n] = 0;
				if(orient[m][n] == 2)
					if((NonMax[m][n] > NonMax[m - 1][n]) && (NonMax[m][n] > NonMax[m + 1][n]));
					else copyNonMax[m][n] = 0;
				if(orient[m][n] == 3)
					if((NonMax[m][n] > NonMax[m - 1][n - 1]) && (NonMax[m][n] > NonMax[m + 1][n + 1]));
					else copyNonMax[m][n] = 0;
			}
		}
		
		for(int i = 0; i < canvasWidth; i++) {
			for(int j = 0; j < canvasHeight; j++) {
				int idx = (j * canvasWidth + i) * 4;
				NonMaxSupData[idx + 1] = copyNonMax[i][j];
				NonMaxSupData[idx + 2] = copyNonMax[i][j];
				NonMaxSupData[idx + 3] = copyNonMax[i][j];
				NonMaxSupData[idx + 0] = 255;
			}
		}
	}
	
	public int[] getNonMaxSupData() {
		return NonMaxSupData;
	}
}