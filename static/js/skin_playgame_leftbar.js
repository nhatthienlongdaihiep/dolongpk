 $(document).ready(function() {
    $(".wap_suutam").height(0);
    //--- Alert when close browser


    $('.popup_link').click(function(){
        $.fancybox({
            href: root+'gioithieu/popup_link',
            type:'iframe',
            padding : 0,
            width : 640,
            height : 236,
            autoSize : false,
            beforeShow: function(){
                // $(".fancybox-skin").css({"background":"none","webkit-box-shadow":"none","box-shadow":"none"});
            },
            afterShow : function(){
                // $(".fancybox-close").css({"top":"-13px","right":"88px"});
                // $(".fancybox-iframe").css({"height":"300px", "width": "620px"});
            },
        });
        return false;
    });

    $('.btn_vongquay').click(function(){
        $.fancybox({
            href: root+'vongquay',
            type:'iframe',
            height: 300,
            scrolling: false,
            autoScale: false,
            beforeShow: function(){
                $('body').addClass("background_fancybox");
                $(".fancybox-skin").css({"background":"none","webkit-box-shadow":"none","box-shadow":"none"});
            },
            afterShow : function(){
                $(".fancybox-close").css({"top":"-13px","right":"88px"});
                $(".fancybox-iframe").css({"min-height":"400px", "max-width": "700px"});
            },
        });
        return false;
    });
    
    $('#click_module').click(function(){
        $.fancybox({
           type:'iframe',
             href: root+'tichluy',
            beforeShow : function(){
                $(".fancybox-skin").css({"background":"none","webkit-box-shadow":"none","box-shadow":"none"});
            },
            afterShow : function(){
                $(".fancybox-close").css({"top": "0","right": "0"});
            }
        });
    });

    $('.popupmess').fancybox();

    $(".close-lb").click(function(){
        if( $(".close-lb").hasClass("in") ) {
            
            $(".side-bar").css("left", "-205px");
            //$(".side-bar").show();
            $(".close-lb").css("left", "10px");
            $(".close-lb").removeClass("in");
            $(".close-lb").addClass("out");
            reloadIframeGame(0);
        }
        else{
            $(".side-bar").css("left", "0px");
            //$(".side-bar").hide();
            
            $(".close-lb").css("left", "210px");
            $(".close-lb").addClass("in");
            $(".close-lb").removeClass("out");
            reloadIframeGame(205);
        }
    });

    reloadIframeGame(205);
    //setInterval(function() {reloadIframeGame(205)}, 5000);
     $('.menu-method ul li a').live('click', function(e) {
         var action = $(this).attr('class');
         $('.menu-method ul li').removeClass('active');
         $(this).parent().addClass('active');
         if (action == 'change-coin') {
             $('.wap_naothe').height(320);
             $('.general').hide();
             $('#chuyencoin').show();
         }
         if (action == 'nap-card') {
             $('.general').hide();
             $('#napthe').show();
             $('.wap_naothe').height(500);
         }
         if (action == 'game-event') {
             $('.general').hide();
             $('#show-event').show();
         }

     });
 })
 setConfirmUnload(true);
function setConfirmUnload(on) {
    window.onbeforeunload = (on) ? unloadMessage : null;
}

function unloadMessage() {
   return "Cấp 6  [Mở đồng hành, tung hoành thiên hạ] \r"+
        "Câp 15 [Tọa kỵ tuyệt đẹp, Sướng Du Tam Quốc] \r"+
        "Cấp 17 [Bình EXP, tăng cấp nhanh] \r"+
        "Cấp 25 [Mở bang phái, huynh đệ đồng lòng]";
}
 function showHeight() {
     $('.overlay').toggle(1);
 }

function resize_iframegame(selector, fix_width){
    $(selector).css({
        height: $( window ).height(),
        width: $( window ).width()-fix_width
    });
}
 function reloadIframeGame(fix_width) {

     var width_if = $(window).width() - fix_width;
     $('.server-playgame').width(width_if);
 }

 setInterval(function() {
     var width_if = $(window).width() - $('.side-bar').width();
     if ($('.side-bar').height() <= 205) {
        $('.server-playgame').width(width_if);
     }

 }, 1300)

 function ShowNapThe() {
     if ($('.wap_naothe').height() > 0) {
         return false;
     }
     hideTop();
     showHeight();
     var hei = 0;
     if ($('.wap_naothe').height() == 0) {
         hei = 480;
     } else {
         return false;
     }
     $(".wap_naothe").animate({
         height: hei
     }, 600);
 }


 function showWebshop() {
     if ($('.wap_webshop').height() > 0) {
         return false;
     }
     $(".overlay").show(1);
     hideTop();
     showHeight();
     var hei = 0;
     if ($('.wap_webshop').height() == 0) {
         hei = 500;
     }
     $(".wap_webshop").animate({
         height: hei
     }, 600);
 }
 function show_suutam() {
     if ($('.wap_suutam').height() > 0) {
         return false;
     }
     $(".overlay").show(1);
     hideTop();
     showHeight();
     $(".wap_suutam").show();
     var hei = 0;
     if ($('.wap_suutam').height() == 0) {
         hei = 575;
     }
     $(".wap_suutam").animate({
         height: hei
     }, 600);
 }

 function show_daptrung(server_id){
    $.fancybox({
            href: root + 'daptrung/index?server_id='+server_id,
            type: 'iframe',
            beforeShow: function(){
                $(".fancybox-skin").css("background","none");
                $(".fancybox-skin").css("webkit-box-shadow","none");
                $(".fancybox-skin").css("box-shadow","none");
                this.width  = 753;
                this.height = 732;
            },
            afterShow: function(){
                $(".fancybox-close").css({"top": "26px","right": "15px","background":"none"});
            },
        });
}

function show_vipshop(server_id){
    $.fancybox({
            href: root + 'vipshop/index2?server_id='+server_id,
            type: 'iframe',
            beforeShow: function(){
                $(".fancybox-skin").css("background","none");
                $(".fancybox-skin").css("webkit-box-shadow","none");
                $(".fancybox-skin").css("box-shadow","none");
                this.width  = 632;
                this.height = 254;
            },
            afterShow: function(){
                $(".fancybox-close").css({"top": "-19px","right": "0px"});
            },
        });
}
function show_sharefb(){
    $.fancybox({
            href: root + 'sharefb_log/index',
            type: 'iframe',
            beforeShow: function(){
                $(".fancybox-skin").css("background","none");
                $(".fancybox-skin").css("webkit-box-shadow","none");
                $(".fancybox-skin").css("box-shadow","none");
                this.width  = 600;
                this.height = 300;
            },
            afterShow: function(){
                $(".fancybox-close").css({"top": "-18px","right": "-18px"});
            },
        });
}
function ajaxKnbDay(sid){
    $.ajax({
        type:"POST",
        dataType: "JSON",
        data: "server_id="+sid,
        url: root + "tichluy/sendKnbDay",
        success:function(result){
            console.log(result.status);
            alert(result.msg);
        }
    });
}
function show_daugia(server_id){
    $.fancybox({
            href: root + 'daugia/index/'+server_id,
            type: 'iframe',
            beforeShow: function(){
                $(".fancybox-skin").css("background","none");
                $(".fancybox-skin").css("webkit-box-shadow","none");
                $(".fancybox-skin").css("box-shadow","none");
                this.width  = 630;
                this.height = 502;
            },
            afterShow: function(){
                $(".fancybox-close").css({"top": "-18px","right": "-18px"});
            },
        });
}

 function hideTop() {
     $(".overlay").hide(1);
     $(".wap_naothe").height(0);
     $(".wap_webshop").height(0);
     $(".view_item_level").height(0);
     $(".wap_showTopGame").height(0);
     $(".wap_item_level_rank").height(0);
     $(".wap_suutam").height(0);

 }


 function show_gift_item_level() {
     if ($('.view_item_level').height() > 0) {
         return false;
     }
     $(".overlay").show(1);
     hideTop();
     showHeight();
     var hei = 0;
     if ($('.view_item_level').height() == 0) {
         hei = 300;
     }
     $(".view_item_level").animate({
         height: hei
     }, 600);

 }
 function show_hailoc(server_id){
    $.fancybox({
        href: root + 'hailoc/index?server_id='+server_id,
        type: 'iframe',
        beforeShow: function(){
            $(".fancybox-skin").css("background","none");
            $(".fancybox-skin").css("webkit-box-shadow","none");
            $(".fancybox-skin").css("box-shadow","none");
            this.width  = 960;
            this.height = 600;
        },
        afterShow: function(){
            $(".fancybox-close").css({"top": "26px","right": "15px"});
        },
    });
}
function show_tichluytet(){
    $.fancybox({
        href: root + 'tichluytet/tichluy_user',
        type: 'iframe',
        beforeShow: function(){
            $(".fancybox-skin").css("background","none");
            $(".fancybox-skin").css("webkit-box-shadow","none");
            $(".fancybox-skin").css("box-shadow","none");
            this.width  = 960;
            this.height = 600;
        },
        afterShow: function(){
            $(".fancybox-close").css({"top": "60px","right": "95px","background":"none"});
        },
    });
}

 function ajax_request_dautu(servers_id) {
     if (confirm('Bạn có chắc chắn  mua vật phẩm đầu tư giá 888 game coin này hay không?')) {
         $.get(root + "servers/buyItemDautu/" + servers_id, function(data) {
            alert(data);
             $(".detailmess").html(data);
             $('.popupmess').trigger("click");
         });
     }
 }





 $(document).ready(function() {
    
     server_id = $('#servers_id :selected').val();
     
     // $.ajax({
     //     type: 'POST',
     //     url: root + 'shop_item/gamecoin_user',
     //     data: 'serverid=' + server_id,
     //     success: function(data) {
     //         $('.gamecoin_user').html("GameCoin: " + data);
     //     }
     // });
     // $.ajax({
     //     type: 'POST',
     //     url: root + 'shop_item/view_itemsshop',
     //     data: 'serverid=' + server_id,
     //     success: function(data) {
     //         $('.items').html(data);
     //     }

     // });


     $("#servers_id").change(function() {
         server_id = $('#servers_id :selected').val();
         $.ajax({
             type: 'POST',
             url: root + 'shop_item/gamecoin_user',
             data: 'serverid=' + server_id,
             success: function(data) {
                 $('.gamecoin_user').html("GameCoin: " + data);
             }
         });
         $.ajax({
             type: 'POST',
             url: root + 'shop_item/view_itemsshop',
             data: 'serverid=' + server_id,
             success: function(data) {
                 $('.items').html(data);
             }

         });
     });
 })

 function buy_item(itemid) {
     if (confirm('Bạn có chắc chắn thực hiện mua vật phẩm này hay không?')) {
         sid = $('#servers_id :selected').val();
         $.ajax({
             type: 'POST',
             url: root + 'shop_item/buy_item',
             data: 'itemid=' + itemid + "&sid=" + sid,
             success: function(data) {
                alert(data);
                 $(".detailmess").html(data);
                 $('.popupmess').trigger("click");
                 loadgamecoin_user(sid);
                 $.ajax({
                     type: 'POST',
                     url: root + 'shop_item/view_itemsshop',
                     data: 'serverid=' + server_id,
                     success: function(data) {
                         $('.items').html(data);
                     }

                 });
             }

         });
     } else {
         // Do nothing!
     }
 }

 /*$(document).ready(function() {
     load_event_level_rank();
 })


 function load_event_level_rank() {

     $.ajax({
         type: 'GET',
         url: root + 'event_item_level/view_item_level_rank',
         data: 'server_id=' + servers_id_active,
         success: function(data) {
             $('.wap_item_level_rank').html(data);
         }

     });

 }*/






   

 function load_rank(type) {
    $.fancybox({
       type: 'ajax',
       href: root+'event_item_level/ajax_loaditem/'+type+'/'+servers_id_active,
       topRatio: 0, 
    })

    return false;  
 }

 function show_event_level_topbar() {
     if ($('.wap_item_level_rank').height() > 0) {
         return false;
     }
     $(".overlay").show(1);
     hideTop();
     showHeight();
     var hei = 0;
     if ($('.wap_item_level_rank').height() == 0) {
         hei = 500;
     }
     $(".wap_item_level_rank").animate({
         height: hei
     }, 600);

 }


 function ajax_send_item_event_level(id){
    $.ajax({
         type: 'POST',
         url: root + 'event_item_level/send_item',
         data: 'id=' + id,
         success: function(data) {
           
         }

     });
 }


 $(document).ready(function() {




    $(".menutop_center .mn_content_menu li a").live('hover',function(e){
        var link = $(this).data('link');
        $(".mn_tab_content").hide();
        $(".menutop_center .mn_content_menu li").removeClass('active');
        $(this).parent().addClass('active');
        $("#"+link).show();
    });
});

 function insert_sv_cur(sid){
    $.post(
        root + 'servers/set_ser_cur',
            {
                sid: sid
            }
    );
} 