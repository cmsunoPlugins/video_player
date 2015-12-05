//
// CMSUno
// Plugin Video Player
//
UconfigNum++;

CKEDITOR.plugins.addExternal('video',UconfigFile[UconfigNum-1]+'/../video/');
CKEDITOR.plugins.addExternal('oembed',UconfigFile[UconfigNum-1]+'/../oembed/');
CKEDITOR.editorConfig=function(config){
	config.extraPlugins+=',video';
	config.toolbarGroups.push('video');
	config.extraAllowedContent+='; video(*)[*]{*}; source(*)[*]{*}';
	config.extraPlugins+=',oembed';
	config.toolbarGroups.push('oembed');
	if(UconfigFile.length>UconfigNum)config.customConfig=UconfigFile[UconfigNum];
};
