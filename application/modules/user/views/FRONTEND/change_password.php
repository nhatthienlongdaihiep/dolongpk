<div class="main-content--inner"> 
   <div class="titile">
      <div class="where"><a href="<?=PATH_URL?>trang-chu" title="Trang chủ" >Trang chủ</a> &gt;<span class="cur"><a href="#" > Đổi mật khẩu </a></div>
      <h3 class="inT"> Đổi mật khẩu </h3>
   </div>
   <div class="inside">
      <div class="inbox block_news_is">
         <div class="newList">
            <div class="infomation">
              <form action="" id="change-password">
                <p class="info-change" style="padding-left: 200px; color: red; font-size: 13px;"></p>
                <p><label for="Mật khẩu cũ">Email đăng ký:</label><input type="text" name="email"></p>
                <p><label for="Mật khẩu cũ">Mật khẩu cũ:</label><input type="password" name="password_old"></p>
                <p><label for="Mật khẩu cũ">Mật khẩu mới:</label><input type="password" name="password_new"></p>
                <p><label for="Mật khẩu cũ">Nhập lại mật khẩu:</label><input type="password" name="re_password"></p>
                <p><label for="Mật khẩu cũ">&nbsp;</label><input type="submit" id="change-pass" value="Đổi"></p>
              </form>
            </div>
         </div>                                        
      </div>
   </div>
        <!--BLOCK DETAIL NEWS--> 
</div>

<style type="text/css">
.title h3{text-align: center; color: #fff; font-size: 14px}
    .infomation{width: 100%;   margin: 0 auto;   float: left;}
    .detail_page .title h3{line-height: 56px;}
    .infomation p{height: 30px; line-height: 30px; margin: 0; color: #000; width: 83%; margin-bottom: 10px; padding-left: 100px;}
    .infomation p label{display: block; width: 160px; float: left; height: 30px; line-height: 30px; font-size: 14px}
    .infomation p input{float: left; width: 200px; padding: 2px 4px; height: 20px;}
    #change-pass{width: 80px; background: #428bca; border: 1px solid #357ebd; color: #fff; font-weight: bold; height: 30px;}
</style>
<script type="text/javascript">
  $(document).ready(function() {
    $('#change-pass').click(function(e) {
        e.preventDefault();
        changPasswordUser();
    });
  });
  function changPasswordUser(){
    $.ajax({
        type:"POST",
        dataType: "json",
        url:root+"user/changPasswordUser",
        data: $("#change-password").serialize(),
        success:function(result){
            if(result.status){
                $('.info-change').html("<span style='color: blue;'>"+result.msg+"</span>");
                setTimeout(function(){location.reload()}, 3000);
            }else{
                $('.info-change').html(result.msg);
            }
        }
    });
}
</script>