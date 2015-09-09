var contextPath = './develop';
var src = contextPath+'/src';
var dest = contextPath+'/build';
var release = './release';
module.exports = {
	style : {
		src : [src + '/style/**/*.less','!'+ src + '/style/mixin/*.less'],
		dest : dest + '/style',
	},
	script : {
		src : [src + '/script/**/*.js','!'+ src + '/script/module/*.js'],
		dest : dest + '/script',
	},
	view:{
		path : './develop/view'
	},
	serve:{
		localServPath:'./',
		proxyUrl:'localhost',
		port:3000
	},
	release : {
		js : {},
		style : {}
	}
}