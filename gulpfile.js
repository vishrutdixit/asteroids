var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');

gulp.task('scripts', function() {
  browserify('src/index.js')
    .transform(babelify.configure({
      optional: ['es7.decorators']
    }))
    .bundle()
    .pipe(source('asteroids.js'))
    .pipe(gulp.dest('dist/'));
});

gulp.task('watch', function() {
  gulp.watch('src/**/*.*', ['scripts']);
});

gulp.task('default', ['scripts', 'watch']);