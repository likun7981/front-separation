function serve(gulp, plugins, config, isRelease) {
    var serveConfig = config.serve;
    var browserSync = plugins.browserSync;
    gulp.task('serve', function() {
        browserSync({
            port: serveConfig.port,
            proxy: 'localhost'
        });
    })
}
module.exports = serve;
