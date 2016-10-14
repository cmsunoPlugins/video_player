<?php
session_start(); 
if(!isset($_SERVER['HTTP_X_REQUESTED_WITH']) || strtolower($_SERVER['HTTP_X_REQUESTED_WITH'])!='xmlhttprequest') {sleep(2);exit;} // ajax request
if(!isset($_POST['unox']) || $_POST['unox']!=$_SESSION['unox']) {sleep(2);exit;} // appel depuis uno.php
?>
<?php
include('../../config.php');
include('lang/lang.php');
// ********************* actions *************************************************************************
if (isset($_POST['action']))
	{
	switch ($_POST['action'])
		{
		// ********************************************************************************************
		case 'plugin': ?>
		<div class="blocForm">
			<h2><?php echo T_("Video Player");?></h2>
			<p><?php echo T_("This plugin allows you to insert one or more video into the page content. The video should be accessible from the File manager.");?></p>
			<p><?php echo T_("It is used with the button") .'<img src="uno/plugins/video_player/video/images/icon.png" style="border:1px solid #aaa;padding:3px;margin:0 6px -5px;border-radius:2px;" />' . T_("added to the text editor when the plugin is enabled.");?></p>
			<p><?php echo T_("To work in all media, the video should be available in mp4 and webm.");?></p>
			<p><?php echo T_("The mp4 must be encoded in H.264 for video and AAC for audio.");?></p>
			<br />
			<p><?php echo T_("The Oembed button") .'<img src="uno/plugins/video_player/oembed/icons/oembed.png" style="border:1px solid #aaa;padding:3px;margin:0 6px -5px;border-radius:2px;" />' . T_("is also added to the toolbar to insert external video (youtube, dailymotion...), audio (spotify, soundcloud...), photo (flickr, instagram...) and rich (scribd, wikipedia...).");?></p>
			<div class="clear"></div>
		</div>
		<?php break;
		// ********************************************************************************************
		}
	clearstatcache();
	exit;
	}
?>
