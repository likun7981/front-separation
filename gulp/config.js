var src = './src';
var dest = './build';
var release = './release';
module.exports = {
	style : {
		src : [src + '/style/**/*.less','!'+ src + '/style/mixin/*.less'],
		dest : dest + '/style',
		setting : {
			isCompress : false
		}
	},
	script : {
		src : [src + '/script/**','!'+ src + '/script/module/.js'],
		dest : dest + '/script'
	},
	release : {
		js : {},
		style : {}
	}
}