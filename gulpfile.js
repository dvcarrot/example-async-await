const pkg = require('./package.json');
const dependencies = Object.keys(pkg.dependencies);
const gulp = require('gulp');
const $ = require('gulp-load-plugins')();

gulp.task('vendor', function () {
    const browserify = require('browserify');
    const vinylSourceStream = require('vinyl-source-stream');
    const vinylBuffer = require('vinyl-buffer');
    return browserify()
        .require(dependencies)
        .bundle()
        .pipe(vinylSourceStream('vendor.js'))
        .pipe(vinylBuffer())
        .pipe($.uglify())
        .pipe(gulp.dest('dist'));
});

gulp.task('scripts', function () {
    return gulp.src('src/*.js')
        .pipe($.browserify({basedir: '.', external: dependencies}))
        .pipe($.uglify())
        .pipe(gulp.dest('dist'))
});

gulp.task('views', function () {
    return gulp.src('src/*.html')
        .pipe(gulp.dest('dist'));
});

gulp.task('build', gulp.parallel('vendor', 'scripts', 'views'));
