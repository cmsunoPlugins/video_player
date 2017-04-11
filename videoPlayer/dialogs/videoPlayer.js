/**
 * Plugin videoPlayer
 * Copyright (c) <2016> <Jacques Malgrange contacter@boiteasite.fr>
 * License MIT
 */
CKEDITOR.dialog.add('videoPlayerDialog',function(editor){
	var lang=editor.lang.videoPlayer;
	return{
		title:lang.title,
		minWidth:340,
		minHeight:200,
		contents:[{
			id:'vp0',
			label:'',
			title:'',
			expand:false,
			padding:0,
			elements:[
			{
				type:'text',
				id:'src0',
				label:lang.file,
				commit:function(widget){widget.setData('src',this.getValue());},
				setup:function(widget){this.setValue(widget.data.src);}
			},{
				type:'button',
				id:'bro',
				style:'display:inline-block;margin-top:10px;',
				filebrowser:
					{
					action:'Browse',
					target:'src0',
					url:editor.config.filebrowserAudioBrowseUrl||editor.config.filebrowserBrowseUrl,
					onSelect:function(fileUrl,data){
						this.getDialog().getContentElement('vp0','src0').setValue(fileUrl);
						return false;
						}
					},
				label:editor.lang.common.browseServer
			},{
                type:'hbox',
                id:'size',
				style:'margin-top:20px',
                children:[
                {
					type:'text',
					id:'wid',
					label:lang.wid+' (px)',
					'default':400,
					commit:function(widget){widget.setData('wid',this.getValue());},
					setup:function(widget){this.setValue(widget.data.wid);}
				},{
                    type:'radio',
                    style:'margin:5px 0 0 10px;text-align:center;',
                    id:'ali',
                    label:lang.ali,
                    items:[
                        [lang.aliLeft,'lef'],
                        [lang.aliCent,'cen'],
                        [lang.aliRight,'rig'],
                        [lang.aliNone,'non']
                    ],
                    'default':'cen',
                    commit:function(widget){widget.setData('ali',this.getValue());},
                    setup:function(widget){this.setValue(widget.data.ali);}
				}]
			}]
		}]
	};
});
