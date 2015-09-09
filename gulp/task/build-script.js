function buildScript(gulp, plugins, config,isRelease) {
    var jsConfig = config.script;
    var util = plugins.util;
    /**
    *isRelease:是否是发布版本，是的话就对js进行压缩
    */
    if (isRelease) {
        gulp.task('build-script', function() {
            return gulp.src(jsConfig.src)
                .pipe(plugins.plumber())
                .pipe(plugins.webpack().on('error', function(err) {
                    util.log(plugins.util.colors.red('js compile error!\n') + err.message);
                }))
                .pipe(gulp.dest(jsConfig.dest))
                .pipe(plugins.uglify().on('error', function(err) {
                    util.log(plugins.util.colors.red('js compress error!\n') + err.message);
                }))
                .pipe(gulp.dest(jsConfig.dest))
        })
    } else {
        gulp.task('build-script', function() {
            return gulp.src(jsConfig.src)
                .pipe(plugins.plumber())
                .pipe(plugins.webpack().on('error', function(err) {
                    util.log(plugins.util.colors.red('js compile error!\n') + err.message);
                }))
                .pipe(gulp.dest(lessConfig.dest))
        })
    }
}
module.exports = buildScript;
