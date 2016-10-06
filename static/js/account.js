$(document).ready(function() {
    
    $('.pp_keydown_dn').keydown(function (e) {
        if (e.keyCode == 13){
            loginUser('#form-login','.kq_login');
        }
    });
    $('.pp_keydown_dk').keydown(function (e) {
        if (e.keyCode == 13){
            registerUser('#form-register','.kq_reg');
        }
    });
    $('.keydown_h').keydown(function (e) {
        if (e.keyCode == 13){
            loginUser('#login-home','.kq_login_h');
        }
    });
});

function loginUser(idUname, idPass, idRemember, idThongBao, returnUrl){
    var username = $(idUname).val();
    var password = $(idPass).val();
    var isRemember = false;

    if ($(idRemember).is(':checked')) {
        isRemember = true;
    }

    if (username == '' || password == '') {
        thongbao(idThongBao, "Nhập đầy đủ các trường thông tin !");
        return;
    }

    if (!CommonValid.ValidateUserName(username)) {
        thongbao(idThongBao, "Tên đăng nhập không hợp lệ !");
        return;
    }

    if (!CommonValid.ValidateLetterPassword(password)) {
        thongbao(idThongBao, "Mật khẩu không hợp lệ !");
        flag = false;
        return;
    }

    $.ajax({
        type:"POST",
        dataType: "json",
        url:root+"user/ajaxLogin",
        data: {
            username: username,
            password: password,
            isRemember: isRemember,
            returnURL: returnUrl,
        },
        success:function(result){
            if(result.status == 1){
                // setConfirmUnload(false);

                thongbao(idThongBao, "<span style='color: blue;'>"+result.msg+"</span>");

                setTimeout(function(){
                    location.href = root
                },2000);

            }else{
                thongbao(idThongBao, result.msg);
            }
        }
    });
}
function registerUser(idUname, idEmail, idPass, idCaptchaInput, checkbox_dongy, idThongBao, returnUrl){
    var username = $(idUname).val();
    var email = $(idEmail).val();
    var password = $(idPass).val();
    var captcha = $(idCaptchaInput).val();
    var dongy = false;
    if ($(checkbox_dongy).is(':checked')) {
        dongy = true;
    }
    else {
        thongbao(idThongBao, "Bạn chưa đồng ý với thỏa thuận sử dụng.");
        return;
    }
    if (username == '' || email == '' || password == '' || captcha == '') {
        thongbao(idThongBao, "Hãy nhập đầy đủ các trường thông tin");
        return;
    }
    if (!CommonValid.ValidateUserName(username)) {
        thongbao(idThongBao, "Tên không hợp lệ");
    }
    if (!CommonValid.ValidateLetterPassword(password)) {
        thongbao(idThongBao, "Mật khẩu không hợp lệ");
        return;
    }
    if (!ValidatePassRegister(idPass, idThongBao)) { //m?t kh?u ph?i có d? dài t? 6-18 g?m ch? hoa,thu?ng và s?.
        return;
    }

    $.ajax({
        type:"POST",
        dataType: "json",
        url:root+"user/ajaxRegister",
        data: {
            username: username,
            email: email,
            password: password,
            capt: captcha,
            dongy: dongy,
            returnURL: returnUrl,
        },
        success:function(result){
            if(result.status){
                // check_register_convertion();
                // setConfirmUnload(false);
                thongbao(idThongBao, "<span style='color: blue;'>"+result.msg+"</span>");
                setTimeout(function(){location.href = root }, 2000);
            }else{
                thongbao(idThongBao, result.msg);
            }
        }
    });
}

function ValidatePassRegister(idPass, idThongBao) {
    var pass = $(idPass).val();
    if (pass.length < 4 || pass.length > 18) { $(idThongBao).html("Mật khẩu có độ dài 4-18 ký tự."); return false; }
    //var fliter = /^(?=.*\d)(?=.*[a-zA-Z]).{4,18}$/;
    //if (!fliter.test(pass)) { $('#' + idThongBao).html("M?t kh?u có d? dài 4-18 ký t?."); return false; }
    //for (var index = 0; index < pass.length; index++) {
    //    if (!CommonValid.ValidateLetterPassword(pass.charAt(index))) {
    //        $('#' + idThongBao).html("M?t kh?u có d? dài 4-18 ký t?."); return false;
    //    }
    //}
    //if (!CommonValid.ValidateLetterPassword(pass)) { $('#' + idThongBao).html("M?t kh?u có d? dài 4-18 ký t?."); return false; }
    //else {
    //    $('#' + idThongBao).html("");
    //    return true;
    //}
    $(idThongBao).html("");
    return true;
}

function thongbao(idThongBao, content) {
    $(idThongBao).html(content);
    setTimeout(function(){
        $(idThongBao).html("");
    },3000);
}
