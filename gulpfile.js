var gulp = require("gulp"),
    sass = require('gulp-sass'),
    gutil = require('gulp-util'),
    watch = require('gulp-watch'),
    batch = require('gulp-batch'),
    cssnano = require('gulp-cssnano'),
    browserify = require('browserify'),
    watchify = require('watchify'),
    source = require('vinyl-source-stream'),
    sourcemaps = require('gulp-sourcemaps'),
    handlebars = require('gulp-handlebars'),
    autoprefixer = require('gulp-autoprefixer'),
    hbsfy = require('hbsfy'),
    connect = require('gulp-connect'),
    gopen = require('gulp-open');

var config ={
    port: 8888,
    base:'http://localhost',
    browser: 'Google Chrome'
};

gulp.task('connect', function() {
    connect.server({
        root: 'dist',
        port: config.port,
        base: config.base,
        livereload: true,
        fallback: './dist/index.html'
    });
});

gulp.task('open', ['connect'], function(){
    return gulp.src('./dist/index.html')
        .pipe(gopen({
            uri: config.base + ':' + config.port,
            app: config.browser
        }));
});

gulp.task('sass', function () {
    return gulp.src('src/style/style.scss')
        .pipe(sourcemaps.init())
        .pipe(sass()
            .on('error', function(err){
                gutil.log(err);
                this.emit('end');
            }))
        .pipe(autoprefixer({
            browsers: ['last 3 versions', 'ie >= 11'],
            cascade: false
        }))
        .pipe(cssnano({
            autoprefixer: false
        }))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('dist/style/'))
        .pipe(connect.reload());
});

gulp.task('copyIndex', function () {
    return gulp.src('src/index.html')
        .pipe(gulp.dest('dist/'));
});

function bundle (bundler) {
    return bundler
        .bundle()
        .pipe(source('app.js'))
        .pipe(gulp.dest('./dist/js'));
}

gulp.task('js', function () {
    return bundle(browserify('./src/js/main.js'));
});

gulp.task('watch', function () {
    var watcher = watchify(browserify('./src/js/main.js', watchify.args));

    bundle(watcher);

    watcher.on('update', function () {
        bundle(watcher);
    });

    watcher.on('log', gutil.log);

    watch('src/style/**', batch(function (events, done) {
        gulp.start('sass', done);
    }));
});

gulp.task('default', ['copyIndex', 'sass', 'js', 'open', 'watch']);