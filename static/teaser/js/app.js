$(function(){
	
	$('.contain-table table td a').click(function(){
		$(this).parent().addClass('diemdanh');
		return false;
	});


   $(".yt-tab a").click(function(event) {
            event.preventDefault();
            $(this).parent().addClass("active");
            $(this).parent().siblings().removeClass("active");
            var tab = $(this).attr("href");
            $(".youtube-embed").not(tab).css("display", "none");
            $(tab).fadeIn();
        });
   $(".info-tab-nv a").click(function(event) {
            event.preventDefault();
            $(this).parent().addClass("active");
            $(this).parent().siblings().removeClass("active");
            var tab = $(this).attr("href");
            $(".info-nvv").not(tab).css("display", "none");
            $(tab).fadeIn();
        });
   $(".info-tab-nv1 a").click(function(event) {
            event.preventDefault();
            $(this).parent().addClass("active");
            $(this).parent().siblings().removeClass("active");
            var tab = $(this).attr("href");
            $(".info-nvv2").not(tab).css("display", "none");
            $(tab).fadeIn();
        });
   $(".info-tab-nv2 a").click(function(event) {
            event.preventDefault();
            $(this).parent().addClass("active");
            $(this).parent().siblings().removeClass("active");
            var tab = $(this).attr("href");
            $(".info-nvv3").not(tab).css("display", "none");
            $(tab).fadeIn();
        });


    $('a[href*=#s]:not([href=#])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
	
});




$(function() {
    var $galitem = $('.neoslideshow').children();
    // Đếm cA�c ảnh trong gallery
    var $galsize = $('.neoslideshow .item-info-nv').size();
    // ThA�m nA�t Prev vA  Next vA o gallery
    $('.neoslideshow').append('<div id="galprev">Prev</div><div id="galnext">Next</div>');
    // Ẩn tất cả cA�c ảnh vA  hiện ảnh đầu tiA�n
    $('.neoslideshow .item-info-nv:gt(0)').hide();
    $currentimg = 0;
    // ThA�m id để phA�n biệt riA�ng từng ảnh
    $galitem.attr("id", function (arr) {
        return "galleryitem" + arr;
    });
    
    // ThA�m sự kiện click vA o nA�t Prev
    $('#galprev').click(function () { 
        if ($currentimg > 0) {
            previmg($currentimg);
            $currentimg = $currentimg - 1;
        }
    });
    // ThA�m sự kiện click vA o nA�t Next
    $('#galnext').click(function () { 
        if ($currentimg < $galsize - 1) {
            nextimg($currentimg, $galsize);
            $currentimg = $currentimg + 1;
        }
    });
})

// HA m xử lA� khi nA�t Next được ấn
function nextimg($img, $size) {
    $n_img = $img + 1;
    if ($n_img < $size) {
        $('#galleryitem' + $img).fadeOut();
        $('#galleryitem' + $n_img).fadeIn();
    }
}
// HA m xử lA� khi nA�t Previous được ấn
function previmg($img) {
    $p_img = $img - 1;
    if ($p_img >= 0) {
        $('#galleryitem' + $img).fadeOut();
        $('#galleryitem' + $p_img).fadeIn();
    }
}

function windowHeight() {
    return $(window).height();
}
function windowWidth() {
    return $(window).width();
}

function documentHeight() {
    return $(document).height();
}

function documentWidth() {
    return $(document).width();
}