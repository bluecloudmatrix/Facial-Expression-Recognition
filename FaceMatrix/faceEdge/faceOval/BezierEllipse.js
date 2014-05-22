/**
 *使用三次贝塞尔曲线模拟椭圆
 *此方法也会产生当lineWidth较宽，椭圆较扁时，长轴端较尖锐，不平滑的现象
 *authot@liuqiushan
 */
(function() {
	var namespace = FACEMATRIX.namespace('FACEMATRIX.faceEdge.faceOval');
	
	if(namespace.BezierEllipse === undefined) {
		namespace.BezierEllipse = function(ctx, x, y, a, b) {
			var k = .5522848,
			ox = a * k, // 水平控制点偏移量
			oy = b * k; // 垂直控制点偏移量

			ctx.strokeStyle = "#0080FF";		
			ctx.beginPath();
			//从椭圆的左端点开始顺时针绘制四条三次贝塞尔曲线
			ctx.moveTo(x - a, y);
			ctx.bezierCurveTo(x - a, y - oy, x - ox, y - b, x, y - b);
			ctx.bezierCurveTo(x + ox, y - b, x + a, y - oy, x + a, y);
			ctx.bezierCurveTo(x + a, y + oy, x + ox, y + b, x, y + b);
			ctx.bezierCurveTo(x - ox, y + b, x - a, y + oy, x - a, y);
			ctx.closePath();
			ctx.stroke();
		}
	}
	
}) ();