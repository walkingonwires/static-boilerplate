var gulp = require("gulp"),
    sass = require('gulp-sass'),
    gutil = require('gulp-util'),
    watch = require('gulp-watch'),
    batch = require('gulp-batch'),
    uglify = require('gulp-uglify'),
    cssnano = require('gulp-cssnano'),
    browserify = require('browserify'),
    watchify = require('watchify'),
    source = require('vinyl-source-stream'),
    sourcemaps = require('gulp-sourcemaps'),
    handlebars = require('gulp-handlebars'),
    autoprefixer = require('gulp-autoprefixer'),
    hbsfy = require('hbsfy'),
    connect = require('gulp-connect'),
    gopen = require('gulp-open'),
    buffer = require('vinyl-buffer'),
    Bust = require('gulp-bust'),
    clean = require('gulp-clean'),
    inject = require('gulp-inject'),
    gulpif = require('gulp-if');

var env = gutil.env || 'development',
    bust = new Bust(),
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
        .pipe(gulpif(!flags.production ,sourcemaps.init({loadMaps: true})))
        .pipe(gulpif(!flags.production, sourcemaps.write('./')))
        .pipe(gulpif(flags.production, bust.resources()))
        .pipe(gulpif(flags.production ,uglify()))
        .pipe(gulp.dest('dist/js'))
        .pipe(connect.reload());
}

gulp.task('js', ['cleanJs'], function () {
    return bundle(browserify('src/js/main.js'));
});

gulp.task('watch', function () {
    var watcher = watchify(browserify('src/js/main.js', watchify.args));

    bundle(watcher);

    watcher.on('update', function () {
        bundle(watcher);
    });

    watcher.on('log', gutil.log);

    watch('src/style/**', ['sass']);

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

gulp.task('createDist', ['sass', 'js', 'cleanIndex'], function () {
    var target = gulp.src('./src/index.html');
    var sources = gulp.src(['dist/js/*.js', 'dist/style/*.css'], {read: false});

    return target.pipe(inject(sources, {ignorePath: '/dist/'}))
        .pipe(gulp.dest('dist'));
});

gulp.task('prod', function () {
    flags.production = true;
});

gulp.task('default', ['open', 'watch']);
gulp.task('build', ['createDist']);
