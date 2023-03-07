<?php
if(!isset($_SESSION['cmsuno'])) exit();
?>
<?php
if(strpos($Ucontent, 'class="videoPlayer"')!==false) {
	$Ufoot .= '<script type="text/javascript" src="uno/plugins/video_player/videojs/video.min.js"></script>'."\r\n";
	$Ufoot .= '<script type="text/javascript">videojs.options.flash.swf="uno/plugins/video_player/videojs/video-js.swf";</script>'."\r\n";
	$Uhead .= '<link href="uno/plugins/video_player/videojs/video-js.css" rel="stylesheet">'."\r\n";
	$Ustyle .= '.video-js .vjs-control-bar{display:flex;}';
}
$Ustyle .= 'div.embeddedContent iframe{max-width:100%;}'."\r\n";
?>
