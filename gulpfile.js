var gulp = require('gulp-help')(require('gulp'));
var sass = require("gulp-ruby-sass");
var inject = require('gulp-inject');
var wiredep = require('wiredep').stream;
var webserver = require('gulp-webserver');
var runSequence = require('run-sequence');

gulp.task('sass', function() {
    return sass('scss/app.scss')
        .on('error', function(err) {
            console.log('SCSS ERROR: ', err);
        })
        .pipe(gulp.dest('./css'));
});

gulp.task('inject', function() {
    return gulp.src('./index.html')
        .pipe(
            inject(
                gulp.src(['./css/**/*.css', './app/**/*.js'], {
                    read: false
                }), {
                    relative: true
                }))
        .pipe(gulp.dest('./'));
});

gulp.task('wiredep', function() {
    return gulp.src('./index.html')
        .pipe(wiredep({
            src: ['./index.html']
        }))
        .pipe(gulp.dest('./'));
});

gulp.task('deploy-live', false, function () {
    return gulp.src('.')
        .pipe(webserver({
            livereload: false,
            open: false,
            host: '0.0.0.0',
            port: 9000
        }));
});


gulp.task('deploy-dev', false, function () {
    return gulp.src('.')
        .pipe(webserver({
            livereload: true,
            open: false,
            host: '0.0.0.0',
            port: 9000
        }));
});

gulp.task('wire', 'wire dependencies', function(callback){
    runSequence('wiredep', 'inject', callback);
});