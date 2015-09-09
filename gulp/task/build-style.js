function buildStyle(gulp, plugins,config,isRelease) {
    var lessConfig = config.style;
    var util = plugins.util;
    console.log(lessConfig);
    gulp.task('build-style', function() {
        return gulp.src(lessConfig.src)
            .pipe(plugins.plumber())
            .pipe(plugins.less({
                compress: isRelease
            }).on('error', function(err) {
                util.log(plugins.util.colors.red('less compile error!\n') + err.message);
            }))
            .pipe(gulp.dest(lessConfig.dest))
    })
}
module.exports = buildStyle;
