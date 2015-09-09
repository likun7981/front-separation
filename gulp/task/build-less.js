function buildLess(gulp, plugins,config) {
    var lessConfig = config.less;
    gulp.task('build-less', function() {
        return gulp.src(lessConfig.src)
            .pipe(plugins.plumber())
            .pipe(plugins.less({
                compress: lessConfig.setting.isCompress
            }).on('error', function(err) {
                util.log(plugins.util.colors.red('less compile error!\n') + err.message);
            }))
            .pipe(gulp.dest(lessConfig.dest))
    })
}
module.exports = buildLess;
