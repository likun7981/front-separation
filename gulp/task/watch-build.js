function watchBuild(gulp, plugins, config, isRelease) {
    var util = plugins.util;
    gulp.task('watch-build', function() {
        plugins.watch(config.style.src, function() {
            return gulp.src(config.style.src)
                .pipe(plugins.plumber())
                .pipe(plugins.less({
                    compress: isRelease
                }).on('error', function(err) {
                    util.log(plugins.util.colors.red('less compile error!\n') + err.message);
                }))
                .pipe(gulp.dest(config.style.dest))
        });
        plugins.watch(config.script.src, function() {
            if (isRelease) {
                return gulp.src(config.script.src)
                    .pipe(plugins.plumber())
                    .pipe(plugins.webpack().on('error', function(err) {
                        util.log(plugins.util.colors.red('js compile error!\n') + err.message);
                    }))
                    .pipe(gulp.dest(jsConfig.dest))
                    .pipe(plugins.uglify().on('error', function(err) {
                        util.log(plugins.util.colors.red('js compress error!\n') + err.message);
                    }))
                    .pipe(gulp.dest(config.script.dest))
            } else {
                return gulp.src(config.script.src)
                    .pipe(plugins.plumber())
                    .pipe(plugins.webpack().on('error', function(err) {
                        util.log(plugins.util.colors.red('js compile error!\n') + err.message);
                    }))
                    .pipe(gulp.dest(config.script.dest))
            }
        });
    })
}
module.exports = watchBuild;
