// include gulp
var gulp = require('gulp'); 

// include plug-ins
var jshint = require('gulp-jshint');
var mocha = require('gulp-mocha');
var gutil = require('gulp-util');

// JS hint task
gulp.task('jshint', function() {
  return gulp.src('./src/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

gulp.task('mocha_test', function() {
    return gulp.src(['./test/*.js'], { read: false })
        .pipe(mocha({ reporter: 'list' }))
        .on('error', gutil.log);
});

gulp.task('default', ['jshint', 'mocha_test'], function(){
	gulp.watch('./src/*.js', function(){
		gulp.run('jshint');
	});
	gulp.watch('./test/*.js', function(){
		gulp.run('mocha_test');
	});
});

gulp.task('travis', ['jshint', 'mocha_test'], function(){
	process.exit(0);
});