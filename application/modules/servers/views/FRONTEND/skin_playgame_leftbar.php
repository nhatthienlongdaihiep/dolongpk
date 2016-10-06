<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <meta property="og:title" content="<?php echo $title; ?>"/>
    <meta property="og:description" content="<?php echo META_DESC ?>"/>
    <meta property="og:image" content="<?php echo PATH_URL ?>static/images/front/logo.png"/>
    <meta property="og:video" content=""/>
    <meta name="keywords" content="<?php echo META_KEY ?>"/>
    <meta name="description" content="<?php echo META_DESC ?>"/>
    <link rel="shortcut icon" href="<?=PATH_URL?>static/favicon.ico" />
    <link rel="apple-touch-icon" href="<?php echo PATH_URL ?>static/images/front/logo.png"/>
    <script type="text/javascript" src="<?php echo PATH_URL . 'static/js/' ?>jquery-1.8.1.min.js"></script>
    <script type="text/javascript" src="<?php echo PATH_URL . 'static/js/' ?>swfobject.js"></script>
    <link rel="stylesheet" type="text/css" href="<?php echo PATH_URL ?>static/topbar/leftbar.css">

    <script type="text/javascript" src="<?php echo PATH_URL ?>static/fancybox/source/jquery.fancybox.js"></script>
    <link rel="stylesheet" type="text/css" href="<?php echo PATH_URL ?>static/fancybox/source/jquery.fancybox.css">
    <script type="text/javascript" src="<?php echo PATH_URL . 'static/js/' ?>skin_playgame_leftbar.js"></script>
    <title><?php echo $title; ?></title>
    <script type="text/javascript">
        var root = "<?php echo PATH_URL; ?>";
        var user_login = "<?php echo $this->session->userdata('username') ?>";
        var servers_id_active =<?php echo $server->id ?>;
    </script>
    <style type="text/css">
            .ajax_hit_news{
            position: absolute;
            top: 41px;
            background: #fff;
            /*height: 20px;*/
            float: left;
            z-index: 10;
            width: 100%;
            text-align: center;
            padding-top: 7px;
            font-weight: bold;
            font-size: 14px;
            display: none;
            }

    </style>
    <script type="text/javascript">
        $(document).ready(function(){

            $(".newbie").on('click', function() {
                $.fancybox({
                    href: root+'newbie/loadViewNewBie?servers='+servers_id_active,
                    type: "iframe",
                    width: "700px",
                    height: "500px"
                });
            });

            insert_sv_cur(servers_id_active);
            setInterval(function(){
               insert_sv_cur(servers_id_active);
            },200000);

            $('.popupmess').fancybox();
            var server_change = '<?php echo $this->uri->segment(2); ?>';
            $("#play-server").change(function( e ){
                e.preventDefault();
                var value = $("#play-server option:selected").val();
                window.location.assign("<?php echo PATH_URL ?>choi-game/" + value);
            });
            $('.button_show_hide').click(function(){
                var hei = $(window).height();
                var wid = $(window).width();
                $('.topbar').toggle();
                $(this).toggleClass('active');
                if( $('.topbar').is(":hidden") ){
                    $('.server-playgame').height(hei);
                    $('.server-playgame').css({'top' : '0px'})
                } else{
                    $('.server-playgame').height(hei - 36);
                    $('.server-playgame').css({'top' : '36px'})
                }
            })
            $(".icon-3").click(function(e){
                $(".ajax_hit_news").html("");
                onoffmess();

            })
            $(".ajax_hit_news").hide();
            get_notice();
             setInterval(function(){
                get_notice();
            },144000);

            setTimeout(function(){
                get_notice();
            },10000)

            setTimeout(function(){
                ajax_hit_news();
            },20000)




            ajax_hit_news();

        });

    function ajax_hit_news(){
      $(".ajax_hit_news").hide();
           $.ajax({
                type:"POST",
                dataType: "Text",
                data: "server_id="+<?php echo $server->id ?>,
                url:"<?php echo PATH_URL ?>hitnews/ajax_hit_news",
                success:function(html){
                    $(".ajax_hit_news").hide();
                     if(html == 0){
                            $(".ajax_hit_news").hide();
                            $('.box_hot_line .icon-3').removeClass('active');
                            notive_icon();
                        }else{
                            $(".ajax_hit_news").html(html);
                            // $(".ajax_hit_news").show();
                            notive_icon();
                        }
                }
            });
}

    function notive_icon(){
            setInterval(function(){
                $('.box_hot_line .icon-3').toggleClass('active');
            },1000);
        }
    function onoffmess(){
        if($(".ajax_hit_news").css("display") == "block"){
            $(".ajax_hit_news").hide();
        }else{
            $.ajax({
                type:"POST",
                dataType: "Text",
                data: "server_id="+<?php echo $server->id ?>,
                url:"<?php echo PATH_URL ?>hitnews/ajax_hit_news",
                success:function(html){
                    $(".ajax_hit_news").hide();
                     if(html == 0){
                            $(".ajax_hit_news").hide();
                            $('.box_hot_line .icon-3').removeClass('active');
                            notive_icon();
                        }else{
                            $(".ajax_hit_news").html(html);
                            $(".ajax_hit_news").show();
                            $('.box_hot_line .icon-3').addClass('no-active');
                        }
                }
            });
        }
    }
    function get_notice(){
        $.get(root + "notification/get_notice", function(data) {
            if(data){
                $( ".main_notice" ).html(data);
                $( ".main_notice" ).find('a').attr('target','_blank');
                $( ".box_notication" ).animate({
                    left: "0%"
                },400);
                setTimeout(function(){
                    $( ".box_notication" ).animate({
                    left: "-100%"
                    },1);
                },15000)
            }else{
                $( ".box_notication" ).animate({
                    left: "-100%"
                },400);
            }
        });
    }

    function hide_notice(){
        $( ".box_notication" ).animate({
            left: "-100%"
        },400);
    }
    function send_denbu(){
        $('.send_denbu').removeAttr('onclick');
        $.get(root + "home/updateknb?username=<?php echo $this->session->userdata('username'); ?>", function(data) {
            if(data){
              alert(data);
              $('.send_denbu').remove();
            }
        });

    }
    function load_rotation(){
        $.fancybox.open({
            href:root+'vongquay/index/'+servers_id_active,
            type:'ajax',
            beforeLoad: function(){
                $('body').addClass("background_fancybox");
            },
        });
    }

     function sends16(){

        $.ajax({
            type:"POST",
            dataType: "Text",
            data: "server_id="+<?=$server->id?>,
            url:"<?php echo PATH_URL?>servers/sends16",
            success:function(html){
                alert(html);
            }
        });
    }
     
    function sendback(){

        $.ajax({
            type:"POST",
            dataType: "Text",
            data: "server_id="+<?=$server->id?>,
            url:"<?php echo PATH_URL?>servers/sendback",
            success:function(html){
                alert(html);
            }
        });
    }
    function latbai_lixi(){
        $.fancybox.open({
            href: "#bglixi",
            // type:'ajax',
            beforeShow : function(){
                $('.fancybox-skin').css({'background':'none','box-shadow':'none'});
            },
           
        });
    }
        
    </script>
<body style="overflow:hidden;">
    <!-- <div id="bglixi" style="display:none; z-index: 1000; width: 100%; height: 100%;"> 
        <?php // echo modules::run('lixi') ?>
    </div> -->
<div class="ajax_hit_news" style="display:none"></div>

<div class="box_notication">
    <div onclick="hide_notice()" class="button_notice_hide"></div>
    <div class="main_notice">
    </div>
</div>


<!-- <div class="button_show_hide"></div> -->
<div onclick="hideTop()" style="display:none;" class="overlay">
    <div class="close_layout">Click ra ngoài để vào lại game</div>
</div>

<div class="close-lb in"></div>
<div class="side-bar" style="margin-left: 0px; padding-right: 0px;">
    <div class="logo">
        <a href="<?php echo PATH_URL; ?>"></a>
    </div>
    <div class="main-left">
        <p class="username"><?php echo CutText($this->session->userdata("username"), 13); ?></p>
        <a href="<?php echo PATH_URL ?>thoat" class="exit">[Thoát]</a>
        <p class="server-play">Máy chủ đang chơi</p>
        <p class="name-sv-play"><?php echo $server->name; ?></p>
        <form action="" method="post">
            <select name="select_server" onchange="location = this.options[this.selectedIndex].value;">
            <?php foreach ($servers as $key => $value) { ?>
                <option <?php echo ($server->id == $value->id) ? 'selected="true"':'' ?> value="<?php echo PATH_URL ?>choi-game/<?php echo $value->slug ?>"><?php echo $value->name; ?></option>
            <?php } ?>
            </select>
        </form>
        <ul class="btn-group">
            <li class="napthe"><a class='btn_napthe_topmenu_2016' target="_blank" href="<?php echo PATH_URL ?>nap-the"></a></li>
            <li><a target="_blank" href="<?php echo PATH_URL ?>gift-code">GIFTCODE</a></li>
            <li><a href="javascript:;" id="click_module" style="color:#62F998;font-weight:bold;font-size:24px;">TÍCH LŨY</a></li>
            <li><a href="javascript:;" class="newbie">NHẬN QUÀ LV</a></li>
            <li><a href="javascript:;" onclick="show_daptrung(<?=$this->session->userdata("server_id")?>)">ĐẬP TRỨNG</a></li>
            <?php if( is_local() ){?>
            <li><a href="javascript:;" onclick="show_vipshop(<?=$this->session->userdata("server_id")?>)">VIP SHOP</a></li>
            <?php }?>
            <?php if(0){ ?><li><a href="javascript:;">LẬT BÀI</a></li><?php } ?>
            <li><a target="_blank" href="https://www.facebook.com/Ho%C3%A0ng-%C4%90%E1%BB%93-Web-219187541761113/?fref=ts">FANPAGE</a></li>
        </ul>
    </div>
</div>

<div class="server-playgame" style="height: 100%; ">
    <!-- PLAY GAME -->
    <?php
        if (!is_local()) {
            if ($server->server_status != 0) {?>
            <!-- PLAY GAME -->
            <iframe id="mainFrame" name="mainFrame" wmode="transparent" height="100%" width="100%" marginwidth="0"
                    marginheight="0" frameborder="0" scrolling="no" src="<?php echo $url; ?>"></iframe>
    <?php
        } else { 
    ?>
            <div
                style="width: 100%;height: 100%;background-color: #E5DCDC;padding: 5px;text-align: center;font-weight: bold;">
                Server đang tạm bảo trì, các bạn vui lòng quay lại sau
            </div>
    <?php
        }
    } else {
    ?>
        <!-- PLAY GAME -->
        <iframe id="mainFrame" name="mainFrame" wmode="transparent" height="100%" width="100%" marginwidth="0"
                marginheight="0" frameborder="0" scrolling="no" src="<?php echo $url; ?>"></iframe>
    <?php
    }
    ?>
</div>
<div class="tracking" style="position:absolute;bottom:0px">
    <?php $this->load->view('FRONTEND/modules/tracking.php'); ?>
</div>

 <!-- Google Code for &#272;&#259;ng K&yacute; Li&ecirc;n Minh &Aacute;m H&#7855;c Conversion Page -->
<script type="text/javascript">
/* <![CDATA[ */
var google_conversion_id = 967352150;
var google_conversion_language = "en";
var google_conversion_format = "3";
var google_conversion_color = "ffffff";
var google_conversion_label = "nYtNCJjPn1sQ1r6izQM";
var google_remarketing_only = false;
/* ]]> */
</script>
<script type="text/javascript" src="//www.googleadservices.com/pagead/conversion.js">
</script>
<noscript>
<div style="display:inline;">
<img height="1" width="1" style="border-style:none;" alt="" src="//www.googleadservices.com/pagead/conversion/967352150/?label=nYtNCJjPn1sQ1r6izQM&amp;guid=ON&amp;script=0"/>
</div>
</noscript>
</body>
</html>
