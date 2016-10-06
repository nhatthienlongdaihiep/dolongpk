
var jsConfig = new function () {
    this.UrlRoot = "http://localhost:61426/";
    this.LoginUrl = "http://sandbox.vtcgame.vn/accounts/accounts/sso/login/?sid=100000&ur=http%3A%2F%2Flocalhost%3A61426%2F&m=1&continue=http://localhost:61426/Account/Login";
    this.urlEncode = encodeURIComponent(this.UrlRoot);
    //'https://vtcgame.vn/accounts/sso/logout/?ur='+ urlEncode + 'Account%2FLogout'
    this.LogOutUrl = 'http://sandbox.vtcgame.vn/accounts/sso/logout/?ur=' + this.urlEncode + 'Account%2FLogout';
}();

$(document).ready(function(){
	$('.li_tab_sel').click(function(){
		var tab = $(this).children('a').data('tab');
		$('.li_tab_sel').removeClass('cg_current_login');
		$(this).addClass('cg_current_login');
		$('.cg_tab_content_login').hide();
		$(tab).show();
	})
})