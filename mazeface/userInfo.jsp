<%@ page language="java"  import="java.util.*,user.User,user.UserManager,user.DBManager,Room.Room" pageEncoding="UTF-8"%>	
<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://"
			+ request.getServerName() + ":" + request.getServerPort()
			+ path + "/";
%>	
<!DOCTYPE HTML>
<html>
	<head>
		<base href="<%=basePath%>">
		<meta charset="utf-8">	
		<script type="text/javascript">
			alert("welcome to userInfo!");
			function createRoom(){
				alert("createRoom!");
				window.location.href="Views/gameView2.html";
			}
			
			function join(){
				alert("123");
				window.location.href="Views/index3.jsp";
			}
			function singleStart(){
				alert("single start !");
				window.location.href="Views/gameView.html";
			}
			
		</script>
		
	</head>
	
	<body>
		Hello!!!
		<%
			String userName = (String)session.getAttribute("userName");
			if(userName == null){
				response.setStatus(HttpServletResponse.SC_MOVED_PERMANENTLY);
				String newLocn = "/mazeface/loginView.html";
				response.setHeader("Location",newLocn);		
			}
			User user = UserManager.getUserByName(userName);
			out.println(user.getUserName());
			out.println(user.getGold());
			out.println(user.getExperience());
			out.println(user.getAccelerator());
			out.println(user.getWeapon());
			out.println(user.getOther());

			ArrayList<User> arraylist = (ArrayList<User>)session.getAttribute("playerList");
			
			ArrayList<Room> roomList = (ArrayList<Room>)session.getAttribute("roomList");
				
			
			for(User tmp:arraylist){
				out.println(tmp.getUserName() + "<br>");
			}
			String room = null;
			for(Room tmp:roomList){
				out.println(tmp.getRoomID() + "<br>");
				out.println(tmp.getMatrixString());
				room = tmp.getRoomID();
				%>
					<input type="button" onclick="join()" value="join it">
				<% 
				
			}
		%>
		
		<input type="button" value="CreateRoom" onclick="createRoom()"></input>
		<input type="button" value="singleStart" onclick="singleStart()"></input>
		
	</body>		
</html>
