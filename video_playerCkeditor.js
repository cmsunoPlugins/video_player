//
// CMSUno
// Plugin Video Player
//
UconfigNum++;

CKEDITOR.plugins.addExternal('videoPlayer',UconfigFile[UconfigNum-1]+'/../videoPlayer/');
CKEDITOR.plugins.addExternal('oembed',UconfigFile[UconfigNum-1]+'/../oembed/');
CKEDITOR.editorConfig=function(config){
	config.extraPlugins+=',videoPlayer';
	config.toolbarGroups.push('videoPlayer');
	config.extraAllowedContent+='; video(*)[*]{*}; source(*)[*]{*}';
	config.extraPlugins+=',oembed';
	config.toolbarGroups.push('oembed');
	if(UconfigFile.length>UconfigNum)config.customConfig=UconfigFile[UconfigNum];
};
