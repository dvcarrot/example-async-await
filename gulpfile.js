const gulp = require('gulp');
const $ = require('gulp-load-plugins')();

gulp.task('scripts', function () {
    return gulp.src('src/*.js')
        .pipe($.browserify({transform: ['babelify']}))
        .pipe($.uglify())
        .pipe(gulp.dest('dist'))
});

gulp.task('views', function () {
    return gulp.src('src/*.html')
        .pipe(gulp.dest('dist'));
});

gulp.task('build', gulp.parallel('scripts', 'views'));
