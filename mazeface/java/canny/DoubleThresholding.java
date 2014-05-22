

public class DoubleThresholding {
	
	private int doubleThresh[];
	private int k3[][];
	private int k4[][];
	private int canvasWidth;
	private int canvasHeight;
	private int lowthresh = 5;
	private int highthresh = 10;
	private float kfu[][];
	private int flag[][];
	
	public DoubleThresholding(int NonMaxSupData[], int width, int height, float magnitude[][]) {
		canvasWidth = width;
		canvasHeight = height;
		doubleThresh = new int[canvasWidth * canvasHeight * 4];
		k3 = new int[width][height];
		k4 = new int[width][height];
		
		for(int i = 0; i < width; i++) {
			for(int j = 0; j < height; j++) {
				k3[i][j] = NonMaxSupData[(j * width + i) * 4 + 1];
				k4[i][j] = NonMaxSupData[(j * width + i) * 4 + 1];
			}
		}
		
		kfu = magnitude;
		
		flag = new int[width][height];
	}
	
	public void processDoubleThresh() {
		for(int i = 0; i < canvasWidth - 1; i++) {
			for(int j = 0; j < canvasHeight - 1; j++) {
				System.out.println(kfu[i][j]);
				if(kfu[i][j] < lowthresh)
					k3[i][j] = 0;
				if(kfu[i][j] < highthresh)
					k4[i][j] = 0;
			}
		}

		for(int m = 1; m < canvasWidth - 1; m++) {
			for(int n = 1; n < canvasHeight - 1; n++) {
				if((k4[m][n] != 0) && (flag[m][n] == 0))
					findline(k3, k4, flag, m , n);
			}
		}
		

		for(int a = 0; a < canvasWidth; a++) {
			for(int b = 0; b < canvasHeight; b++) {
				int idx = (b * canvasWidth + a) * 4;
				doubleThresh[idx + 1] = k4[a][b];
				doubleThresh[idx + 2] = k4[a][b];
				doubleThresh[idx + 3] = k4[a][b];
				doubleThresh[idx + 0] = 255;
			}
		}
	}
	
	public void findline(int k3[][], int k4[][], int flag[][], int m ,int n) {
		int m1 = m + 1;
		int n1 = n + 1;
		int flagg;
		while((m != m1)||(n != n1) ) {
			flagg = 0;
			for(int i = 1; i <= 3; i++) {
				if(flagg == 1) break;
				for(int j = 1; j <= 3; j++) {
					if(k3[m - 2 + i][n - 2 + j] != 0) {
						k4[m - 2 + i][n -2 + j] = 255;
						m1 = m - 2 + i;
						n1 = n -2 + j;
						flag[m][n] = 1;
						flagg = 1;
						break;
					}
				}
			}
			m = m1;
			n = n1;
		}
	}
	
	public int[] getDoubleThresh() {
		return doubleThresh;
	}
}