const gulp = require('gulp')
const concat = require('gulp-concat')
const cssmin = require('gulp-cssmin')
const uncss = require('gulp-uncss')
const browserSync = require('browser-sync').create()

gulp.task('js', () => {

    gulp.src([
            './node_modules/bootstrap/dist/js/bootstrap.min.js',
            './node_modules/jquery/dist/jquery.min.js',
            './node_modules/jquery-validation/dist/jquery.validate.min.js',
            './node_modules/jquery-validation-unobtrusive/jquery.validate.unobtrusive.js',
            './Js/site.js'
        ])
        .pipe(gulp.dest('wwwroot/js/'))
        .pipe(browserSync.stream())
})

gulp.task('css', () => {

    gulp.src([
            './style/site.css',
            './node_modules/bootstrap/dist/css/bootstrap.css'
        ])
        .pipe(concat('site.min.css'))
        .pipe(cssmin())
        .pipe(uncss({ html: ['Views/**/*.cshtml'] }))
        .pipe(gulp.dest('wwwroot/css/'))
        .pipe(browserSync.stream())
})

gulp.task('watch-css', () => {

    browserSync.init({
        proxy: 'localhost:5000'
    })

    gulp.watch('./style/**/*.css', ['css'])
    gulp.watch('./Js/**/*.js', ['js'])
})

gulp.task('front', ['js', 'css', 'watch-css'])