<div class="main-content--inner"> 
    <div class="titile">
       <div class="where"><a href="<?=PATH_URL?>trang-chu" title="Trang chủ" >Trang chủ</a> &gt;<span class="cur"><a href="<?=PATH_URL.$parent->slug?>" > <?=$parent->name?></a></div>
       <h3 class="inT"> <?=$parent->name?> </h3>
    </div>
    <div class="inside">
           <div class="inbox">
              <div class="new_top mt10">
                   <h2><?=CutText($result->title,80)?></h2>
                   <div class="new_top_txt">
                      <p class="ny_xsk21">Đăng ngày： <?=date('d/m/Y',strtotime( $result->created ) )?></p>
                   </div>
              </div>
             
              <div class="news_txt">
                  <?=$result->content?>
              </div>

              <div class="fb-comments" data-href="<?=PATH_URL.$parent->slug.'/'.$result->slug ?>" data-width="500px" data-numposts="5" data-colorscheme="dark"></div>

              <div class="hot_art">
                 <div class="hot_t">Cùng chuyên mục</div>
                 <div class="hot_art_list clear">
                    <ul>
                      <?php if(!empty($other)){ foreach ($other as $k => $vl) {?>                            
                      <li><span class="fr"><?=date('d-m-Y',strtotime($vl->created))?></span><a href="<?=PATH_URL.$parent->slug.'/'.$vl->slug?>" title="<?=CutText($vl->title,80)?>"><?=CutText($vl->title,60)?></a></li>
                      <?php } }?>
                 </div>
              </div>
           </div>
    </div> 
</div>