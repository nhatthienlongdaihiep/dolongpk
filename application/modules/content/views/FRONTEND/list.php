<div class="main-content--inner"> 
   <div class="titile">
      <div class="where"><a href="<?=PATH_URL?>trang-chu" title="Trang chủ" >Trang chủ</a> &gt;<span class="cur"><a href="#" > <?=$parent->name?></a></div>
      <h3 class="inT"><?=$parent->name?></h3>
   </div>
   <div class="inside">
      <div class="inbox block_news_is">
         <div class="newList">
            <?php if($result){ foreach ($result as $key => $value) {
                  if($value->image) $img = getCacheImage($value->image,197, 104); else $img = getCacheImageByUrl(paser_image($value->content), 197, 104);?>

            <div class="sukienconlist">
               <div class="date"><p><?=date('d',strtotime($value->created))?><br /><?=date('m',strtotime($value->created))?></p></div>
               <div class="imgs">
                  <a href="<?php echo PATH_URL.$parent->slug.'/'.$value->slug;?>">
                     <img src="<?=$img?>">
                  </a>
               </div>
               <div class="tintxt">
                  <div class="title_new">
                     <h3>
                        <a href="<?php echo PATH_URL.$parent->slug.'/'.$value->slug;?>" class="ico_news"><?=$value->title?></a>
                     </h3>
                  </div>
                  <p><?=CutText(strip_tags($value->content),300)?></p>
               </div>
            </div>
            <?php } }?>
            
            <?php if($pageLink){ echo $pageLink;}?>
         </div>                                        
      </div>
   </div>
        <!--BLOCK DETAIL NEWS--> 
</div>