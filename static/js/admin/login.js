function EnterLogin(a){
	if(a.keyCode==13){login()}}
function login(){
	name=$("#loginUser").val();
	pass=$("#loginPass").val();
	if(name==""&&pass==""){
		$(".erorr_username").show();
		$(".erorr_password").show();
		$("#divError").html("");return false}
	else{
		if(pass==""&&name!=""){
			$(".erorr_username").hide();
			$(".erorr_password").show();
			$("#divError").html("");return false}
		else{
			if(pass!=""&&name==""){
				$(".erorr_password").hide();
				$(".erorr_username").show();
				$("#divError").html("");return false}
			else{
				if(name!=""&&pass!=""){
					$("#divError").html('<span style="color: #00b3f1; font-weight: bold;">Processing data...</span>');
					var a=root+"admincp/login/";
					$(".erorr_username").hide();
					$(".erorr_password").hide();
					$.post(a,{user:name,pass:pass},function(b){if(b==1){location.href=root+"admincp"}
				else{$("#divError").html("Username or Password is incorrect.")}})}}}
		}
}function reset(){$("#loginUser").val("");$("#loginPass").val("")}$(document).ready(function(){$("#loginUser").focus()});