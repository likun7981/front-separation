var pkg = require('./package.json'),
	config = require('./gulp/config'),
    gulp = require('gulp'),
    plugins = require('gulp-load-plugins')({
    	scope: ['dependencies', 'devDependencies', 'peerDependencies']
    });
    plugins.browserSync = require('browser-sync');
    // browserSync = require('browser-sync'),
    // plumber = plugins.plumber,
    // watch = plugins.watch,
    // less = plugins.less,
    // header = plugins.header,
    // webpack = plugins.webpack,
    // reload = browserSync.reload;
//头部版权
var banner = ['/**',
    '* name : <%= name %> ',
    '* version     : <%= version %> ',
    '* author      : <%= author %> ',
    '* last change : <%= dateTime %> ',
    '**/'
].join('\n');
var gulpTaskList = require('fs').readdirSync('./gulp/task/')
gulpTaskList.forEach(function(taskfile) {
    require('./gulp/task/' + taskfile)(gulp, plugins,config,false);
});
// var buildStyle = require('./gulp/task/build-style');
// var buildScript = require('./gulp/task/build-script');
// var serve = require('./gulp/task/serve');
// var watchBuild = require('./gulp/task/watch-build');
// var watchBuildReload = require('./gulp/task/watch-build-reload');



