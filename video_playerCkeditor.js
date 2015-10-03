//
// CMSUno
// Plugin Video Player
//
UconfigNum++;

CKEDITOR.plugins.addExternal('video',UconfigFile[UconfigNum-1]+'/../video/');
CKEDITOR.plugins.addExternal('youtube',UconfigFile[UconfigNum-1]+'/../youtube/');
CKEDITOR.editorConfig=function(config){
	config.extraPlugins+=',video';
	config.toolbarGroups.push('video');
	config.extraAllowedContent+='; video(*)[*]{*}; source(*)[*]{*}';
	config.extraPlugins+=',youtube';
	config.toolbarGroups.push('Youtube');
	if(UconfigFile.length>UconfigNum)config.customConfig=UconfigFile[UconfigNum];
};
