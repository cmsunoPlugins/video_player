/**
 * Plugin videoPlayer
 * Copyright (c) <2017> <Jacques Malgrange contacter@boiteasite.fr>
 * License MIT
 */
CKEDITOR.plugins.add('videoPlayer',{
	requires:'widget',
	icons:'videoPlayer',
	lang:'en,es,fr',
	init:function(editor){
		var lang=editor.lang.videoPlayer;
		CKEDITOR.dialog.add('videoPlayerDialog',this.path+'dialogs/videoPlayer.js');
		editor.addContentsCss(this.path+'videoPlayer.css');
		editor.widgets.add('videoPlayer',{
			template:'<div class="videoPlayer"></div>',
			requiredContent:'div(videoPlayer)',
			allowedContent:'div[class](*);video(*)[*]{*};source(*)[*]{*}',
			dialog:'videoPlayerDialog',
			upcast:function(e){return e.name=='div'&&e.hasClass('videoPlayer');},
			init:function(){
				var a;
				if(this.element.findOne('video')!=null){
					a=this.element.findOne('video').getAttribute('width');
					if(a)this.setData('wid',a);
				}
				if(this.element.findOne('source')!=null){
					a=this.element.findOne('source').getAttribute('src');
					if(a)this.setData('src',a);
				}
				if(this.element.findOne('div')!=null){
					a=this.element.findOne('div').getAttribute('style');
					if(a){
						if(a.search('float:left')!=-1)this.setData('ali','lef');
						else if(a.search('margin:0 auto')!=-1)this.setData('ali','cen');
						else if(a.search('float:right')!=-1)this.setData('ali','rig');
						else this.setData('ali','non');
					}
				}
			},
			data:function(){
			//	if(this.data.src.length<5&&this.data.src.search(/mp4/i)==-1)return'???';
				var now=new Date(),i='videoPlayer'+now.getFullYear()+now.getMonth()+now.getDate()+now.getHours()+now.getMinutes()+now.getSeconds(),a=this.data.ali,b='';
				if(a=='lef')b='float:left;';
				if(a=='rig')b='float:right;';
				if(a=='cen')b='margin:0 auto;';
				out='<div style="max-width:'+this.data.wid+'px;'+b+'">';
				out+='<video class="video-js vjs-fluid vjs-big-play-centered" controls="controls" ';
				out+='data-setup="{\'fluid\':true,\'preload\':\'metadata\',\'language\':\''+editor.config.language+'\'}" ';
				out+='height="300" id="'+i+'" width="'+this.data.wid+'">';
				out+='<source src="'+this.data.src+'" type="video/mp4" /></video></div>';
				this.element.setHtml(out);
			}
		});
		editor.ui.addButton('videoPlayer',{
			label:lang.description,
			toolbar:'cmsuno',
			command:'videoPlayer'
        });
	}
});
