<?php if(!empty($servers)){ ?>
<ul>
	<?php foreach ($servers as $k => $vl) {?>
	<li><a target='_blank' href="<?=PATH_URL.'choi-game/'.$vl->slug?>" ><i></i><span><?=CutText($vl->name,20)?></span><p></p></a></li> 
	<?php if($k == 5) break; } ?>
</ul>
<?php }?>

