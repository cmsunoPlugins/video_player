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
		<style>
			.videoPlayer ul{margin:0 0 10px 20px;}
			.videoPlayer>ul{border:1px solid #ccc;padding:10px;float:left;margin-right:20px;}
			.videoPlayer li{margin-left:10px;list-style:disc;}
			.videoPlayer ul h3{text-align:center;margin:0 0 5px;}
		</style>
		<div class="blocForm videoPlayer">
			<h2><?php echo T_("Video Player");?></h2>
			<p>
			<?php echo T_("This plugin allows you to insert one or more video into the page content.");?>
			<?php echo T_("It is used with the button") .'<img src="uno/plugins/video_player/videoPlayer/icons/videoPlayer.png" style="border:1px solid #aaa;padding:3px;margin:0 6px -5px;border-radius:2px;" />' . T_("added to the text editor when the plugin is enabled.");?>
			<?php echo T_("The video should be accessible from the File manager and should be mp4.");?>
			</p>
			<ul>
				<h3><?php echo T_("MP4 recommandations"); ?></h3>
				<li><?php echo T_("MOOV atom at the front of the file (Fast Start)."); ?></li>
				<li><?php echo T_("Video codec H264.").' '.T_("Recommandations :"); ?>
					<ul>
						<li><?php echo T_("Proressive scan (no interlacing)."); ?></li>
						<li><?php echo T_("Frame rates : 24, 25, 30."); ?></li>
						<li><?php echo T_("Bitrate : Between 1 and 5 Mbps."); ?></li>
						<li><?php echo T_("Variable bitrate."); ?></li>
					</ul>
				</li>
				<li><?php echo T_("Audio codec AAC.").' '.T_("Recommandations :"); ?>
					<ul>
						<li><?php echo T_("Sample rate 96 khz or 48 khz."); ?></li>
						<li><?php echo T_("Bitrate : 128 kbps."); ?></li>
					</ul>
				</li>
			</ul>
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
