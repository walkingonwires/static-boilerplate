// Gulp
var gulp = require("gulp"),
    gulpif = require('gulp-if'),
    Bust = require('gulp-bust'),
    gutil = require('gulp-util'),
    clean = require('gulp-clean'),
    watch = require('gulp-watch'),
    uglify = require('gulp-uglify'),
    jshint = require('gulp-jshint'),
    inject = require('gulp-inject'),
    buffer = require('vinyl-buffer'),
    source = require('vinyl-source-stream'),
    sourcemaps = require('gulp-sourcemaps');

// Style
var sass = require('gulp-sass'),
    cssnano = require('gulp-cssnano'),
    autoprefixer = require('gulp-autoprefixer');

// Browserify
var watchify = require('watchify'),
    browserify = require('browserify');

// Images
var imagemin = require('gulp-imagemin'),
    pngquant = require('imagemin-pngquant');

// Server
var gopen = require('gulp-open'),
    connect = require('gulp-connect');



var bust = new Bust(),
    config = {
        port: 8888,
        base: 'http://localhost',
        browser: 'Google Chrome'
    },
    flags = {
        production: false
    };


gulp.task('connect', ['createDist'], function () {
    connect.server({
        root: 'dist',
        port: config.port,
        base: config.base,
        livereload: true,
        fallback: 'dist/index.html'
    });
});

gulp.task('open', ['connect'], function () {
    return gulp.src('dist/index.html')
        .pipe(gopen({
            uri: config.base + ':' + config.port,
            app: config.browser
        }));
});

gulp.task('sass', ['cleanCss'], function () {
    return gulp.src('src/style/style.scss')
        .pipe(gulpif(!flags.production, sourcemaps.init()))
        .pipe(sass()
            .on('error', function (err) {
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
        .pipe(gulpif(!flags.production, sourcemaps.write('./')))
        .pipe(gulpif(flags.production, bust.resources()))
        .pipe(gulp.dest('dist/style/'))
        .pipe(connect.reload());
});

function bundle(bundler) {
    cleanDirs('dist/js');
    return bundler
        .bundle()
        .on('error', gutil.log)
        .pipe(source('app.js'))
        .pipe(buffer())
        .pipe(gulpif(!flags.production, sourcemaps.init({loadMaps: true})))
        .pipe(gulpif(!flags.production, sourcemaps.write('./')))
        .pipe(gulpif(flags.production, bust.resources()))
        .pipe(gulpif(flags.production, uglify()))
        .pipe(gulp.dest('dist/js'))
        .pipe(connect.reload());
}

gulp.task('js', ['cleanJs'], function () {
    return bundle(browserify('src/js/main.js'));
});

gulp.task('lint', function () {
    return gulp.src(['./gulpfile.js', './src/js/**/*.js'])
        .pipe(jshint())
        .pipe(jshint.reporter('default'))
        .pipe(jshint.reporter('fail'));
});

gulp.task('watch', function () {
    var watcher = watchify(browserify('src/js/main.js', watchify.args));

    bundle(watcher);

    watcher.on('update', function () {
        bundle(watcher);
    });

    watcher.on('log', gutil.log);

    gulp.watch('src/style/**/*.scss', ['sass']);

});

gulp.task('cleanCss', function () {
    return cleanDirs('dist/style');
});

gulp.task('cleanJs', function () {
    return cleanDirs('dist/js');
});

gulp.task('cleanIndex', function () {
    return cleanDirs('dist/*.html');
});

function cleanDirs(dir) {
    return gulp.src(dir, {read: false})
        .pipe(clean());
}

gulp.task('createDist', ['sass', 'js', 'cleanIndex', 'copyImages'], function () {
    var target = gulp.src('./src/index.html');
    var sources = gulp.src(['dist/js/*.js', 'dist/style/*.css'], {read: false});

    return target.pipe(inject(sources, {ignorePath: '/dist/'}))
        .pipe(gulp.dest('dist'));
});


gulp.task('copyImages', function () {
    return gulp.src('src/images/**/*')
        .pipe(gulpif(flags.production, imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        })))
        .pipe(gulp.dest('dist/images/'))
        .pipe(connect.reload());
});

gulp.task('prod', function () {
    flags.production = true;
});

gulp.task('default', ['open', 'watch']);
gulp.task('build', ['createDist']);
