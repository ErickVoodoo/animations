var gulp = require('gulp'),
    gulpsync = require('gulp-sync')(gulp),
    path = require('path'),
    webpackStream = require('webpack-stream'),
    rimraf = require('rimraf');

gulp.task('delete', function(cb) {
  rimraf('./build', cb);
  return;
});

gulp.task('project', function() {
  var deployConfig = Object.create(require('./webpack.dev.js'));

  return gulp.src('./src/index.js')
    .pipe(webpackStream(deployConfig))
    .pipe(gulp.dest('./build/'));
});

gulp.task('copy', function() {
  return gulp.src('./src/index.html')
    .pipe(gulp.dest('./build/'));
});

gulp.task('build', gulpsync.sync(['delete', ['project', ['copy']]]));
