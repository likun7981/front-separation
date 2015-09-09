function watchBuildReload(gulp, plugins, config, isRelease) {
    var browserSync = plugins.browserSync;
    var util = plugins.util;
    gulp.task('watch-build-reload', function() {
        browserSync({
            port: config.serve.port,
            proxy: 'localhost'
        })
        plugins.watch(config.style.src, function() {
            return gulp.src(config.style.src)
                .pipe(plugins.plumber())
                .pipe(plugins.less({
                    compress: isRelease
                }).on('error', function(err) {
                    util.log(plugins.util.colors.red('less compile error!\n') + err.message);
                }))
                .pipe(browserSync.reload({
                    stream: true
                }))
                .pipe(gulp.dest(config.script.dest))
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
                return gulp.src(jsConfig.src)
                    .pipe(plugins.plumber())
                    .pipe(plugins.webpack().on('error', function(err) {
                        util.log(plugins.util.colors.red('js compile error!\n') + err.message);
                    }))
                    .pipe(gulp.dest(config.script.dest))
            }
        });
        plugins.watch(config.script.src,browserSync.reload)
        plugins.watch(config.view.path, browserSync.reload)
    })
}
module.exports = watchBuildReload;
