var gulp = require('gulp');
var changed = require('gulp-changed');
var plumber = require('gulp-plumber');
var notify = require('gulp-notify');
//var typescript = require('gulp-tsb');
var typescript = require('gulp-typescript');
var sourcemaps = require('gulp-sourcemaps');

var runSequence = require('run-sequence');
var paths = require('../paths');
var exec = require('child_process').exec;


var tscompiler =  tscompiler || null;

// transpiles changed es6 files to SystemJS format
// the plumber() call prevents 'pipe breaking' caused by errors from other gulp plugins
// https://www.npmjs.com/package/gulp-plumber
gulp.task('build-system',function(){
	if(!tscompiler){
		tscompiler = typescript.createProject('tsconfig.json',{ "typescript": require('typescript')});
	}

	return gulp.src(paths.ts_source.concat(paths.ts))
		.pipe(plumber({errorHandler: notify.onError('Error: <%= error.message %>')}))
		.pipe(changed(paths.output, {extension: '.ts'}))
		.pipe(sourcemaps.init({loadMaps: true}))
		//.pipe(typescript(tscompiler))
        .pipe(tscompiler())
		.pipe(sourcemaps.write({includeContent:false, sourceRoot: paths.root}))
		.pipe(gulp.dest(paths.output));
});

// copies changed html files to the output directory
gulp.task('build-html',function(){
	return gulp.src(paths.html)
		.pipe(changed(paths.output, {extension: '.html'}))
		.pipe(gulp.dest(paths.output));
});

// copies changed html files to the output directory
gulp.task('copy-js',function(){
	return gulp.src(paths.js)
		.pipe(changed(paths.output, {extension: '.js'}))
		.pipe(gulp.dest(paths.output));
});

// copies changed css files to the output directory
// gulp.task('build-css', function() {
//   return gulp.src(paths.css)
//     .pipe(changed(paths.output, {extension: '.css'}))
//     .pipe(gulp.dest(paths.output));
// });

// runs jspm install from within Gulp
gulp.task('build-jspm',function(){
	exec('jspm install', function(err, stout, stderr){
	});
});


// this task calls the clean task (located in ./clean.js), 
// then runs the build-system and build-html tasks in parallel
// https://www.npmjs.com/package/gulp-run-sequence
gulp.task('build',function(callback){
	return runSequence(
		'clean',
		['build-system','build-html', 'copy-js'],
		callback
	);
});