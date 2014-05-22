

public class Gaussian {
	
	private int gaussianData[];
	private int canvasWidth;
	private int canvasHeight;
	
	public Gaussian(int grayData[], int width, int height) {
		gaussianData = grayData;
		canvasWidth = width;
		canvasHeight = height;
	}
	
	public void processGaussian() {
		for(int i = 1; i < canvasWidth - 1; i++) {
			for(int j = 1; j < canvasHeight - 1; j++) {
				//g(x,y)={f(x-1,y-1)+f(x-1,y+1)+f(x+1,y-1)+f(x+1,y+1)+[f(x-1,y)+f(x,y-1)+f(x+1,y)+f(x,y+1)]*2+f(x,y)*4}/16;
				
				int mid = (j * canvasWidth + i) * 4; 
				int lu = ((j - 1) * canvasWidth + (i - 1)) * 4 + 1;
				int ld = ((j + 1) * canvasWidth + (i - 1)) * 4 + 1;
				int ru = ((j - 1) * canvasWidth + (i + 1)) * 4 + 1;
				int rd = ((j + 1) * canvasWidth + (i + 1)) * 4 +1;
				int left = (j * canvasWidth + (i - 1)) * 4 + 1;
				int up = ((j - 1) * canvasWidth + i) * 4 + 1;
				int right = (j * canvasWidth + (i + 1)) * 4 + 1;
				int down = ((j + 1) * canvasWidth + i) * 4 + 1;
				
				gaussianData[mid + 1] = (gaussianData[lu] + gaussianData[ld] + gaussianData[ru] + 
						gaussianData[rd] + (gaussianData[left] + gaussianData[up] + gaussianData[right]
								+ gaussianData[down]) * 2 + gaussianData[mid] * 4) / 16;
				gaussianData[mid + 2] = (gaussianData[lu] + gaussianData[ld] + gaussianData[ru] + 
						gaussianData[rd] + (gaussianData[left] + gaussianData[up] + gaussianData[right]
								+ gaussianData[down]) * 2 + gaussianData[mid] * 4) / 16;
				gaussianData[mid + 3] = (gaussianData[lu] + gaussianData[ld] + gaussianData[ru] + 
						gaussianData[rd] + (gaussianData[left] + gaussianData[up] + gaussianData[right]
								+ gaussianData[down]) * 2 + gaussianData[mid] * 4) / 16;
				gaussianData[mid + 0] = 255;
			}
		}
	}
	
	public int[] getGaussianData() {
		return gaussianData;
	}
}