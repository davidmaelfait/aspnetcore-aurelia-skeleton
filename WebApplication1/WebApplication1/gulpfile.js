/// <binding AfterBuild='build, webpack' />
var gulp = require('gulp');

require('require-dir')('Aurelia/Build/Tasks');
var webpack = require('webpack-stream');
var webpack2 = require('webpack');

// Webpack task
gulp.task('webpack', function () {
    return gulp.src('Aurelia/Source/')
        .pipe(webpack(require('./webpack.config.js'), webpack2))
        .pipe(gulp.dest('wwwroot/Aurelia/'));
});
