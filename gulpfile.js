var pkg = require('./package.json'),
    gulp = require('gulp'),
    browserSync = require('browser-sync'), //浏览器同步
    plugins = require('gulp-load-plugins')(),
    plumber = plugins.plumber,
    watch = plugins.watch,
    util = plugins.util,
    less = plugins.less,
    header = plugins.header,
    webpack = plugins.webpack,
    reload = browserSync.reload;
//头部版权
var banner = '/**\n* name : <%= name %> \n* version     : <%= version %> \n* author      : <%= author %> \n* last change : <%= dateTime %> \n*/ \n';

var localServPath = './';

