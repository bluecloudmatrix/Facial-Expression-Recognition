
function doRegister(){

	var newname=trim($("#newname").val());
   	var newpass=trim($("#newpass").val());
   	var againpass=trim($("#againpass").val());

	if(newname.length==0)
    {
        $("#newname").focus();
        $("#rr").html("用户名不能为空！");
        return false;
    }
    if(newpass.length==0)
    {
        $("#newpass").focus();
        $("#rr").html("密码不能为空！");
        return false;
    }
    if(againpass.length==0)
    {
        $("#againpass").focus();
        $("#rr").html("重复密码不能为空！");
        return false;
    }
    if(againpass!=newpass)
    {
        $("#againpass").val("");
        $("#againpass").focus();
        $("#rr").html("密码和重复密码不一致");
        return false;
    }

    var inCode = trim($("#r_checkcode").val().toUpperCase());
    console.log(inCode);
    if(inCode.length ==0) {
        $("#r_checkcode").focus();
        $("#rr").html("验证码不能为空！");
        return false;
    }
    var url = "register?name=" + encodeURI(encodeURI(newname))+"&pass="+newpass+"&check="+inCode;
    url = convertURL(url);

    $.get(url,null,function(data){
		//console.log(data);
		var label = data[0];
		alert(label);
        if(label==1){
            $("#newname").val("");
            $("#newname").focus();
            $("#rr").html("该用户已经存在，请重新注册或直接登录！");
            return;
        }
        if(label==2){
            $("#rr").html("注册成功！");
            //setCookie("username1",newname);
            window.location.href="index.jsp";
			return;
        }
        if(label==3){
            $("#rr").html("对不起，注册失败！");
            return;
        }
        if(label==4){
            $("#r_checkcode").val("");
            $("#r_checkcode").focus();
            $("#rr").html("验证码错误！");
            return;
        }else{
            $("#rr").html("未找到页面，网络错误！sisi！");
        }
    });


}