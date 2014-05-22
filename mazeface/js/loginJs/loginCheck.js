function doLogin(){
	beepSound();
	var username=trim($("#username").val());
   	var userpass=trim($("#userpass").val());
	if(username.length==0)
    {
     	$("#username").focus();
        $("#lr").html("用户名不能为空！");
        return false;
    }
    if(userpass.length==0)
    {
	    $("#userpass").focus();
        $("#lr").html("密码不能为空！");
        return false;
    }
	var inCode = trim($("#checkcode").val().toUpperCase());
    console.log(inCode);
	if(inCode.length ==0) {
        $("#checkcode").focus();
        $("#lr").html("验证码不能为空！");
	    return false;
	}

    //
    var url = "login?name=" + encodeURI(encodeURI(username))+"&pass="+userpass+"&check="+inCode;
    url = convertURL(url);
    
    $.get(url,null,function(data){   	
    	//data = eval(data);
    	var label = data[0];
    	//alert(label);
    	
        if(label==1){
            $("#username").val("");
            $("#userpass").val("");
            $("#username").focus();
            $("#lr").html("用户不存在，请重新登录！");
            return;
        }
        if(label==2){
            $("#lr").html("登录成功！");
            
            //setCookie("username1",username);
            //setSession("username", username);
            //console.log();
            //鐧诲綍鎴愬姛鍚庤烦杞�
            window.location.href="preGameView.jsp";
            return;
        }
        if(label==3){
            $("#userpass").val("");
            $("#userpass").focus();
            $("#lr").html("密码错误，重新输入！");
            return;
        }
        if(label==4){
            $("#checkcode").val("");
            $("#checkcode").focus();
            $("#lr").html("验证码错误！");
            return;
        }else{
        	//window.location.href="index.html";
            $("#lr").html("未找到页面，网络错误");
        }
    });

}
