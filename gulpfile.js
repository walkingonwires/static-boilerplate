// Gulp
var gulp = require("gulp");
var gutil = require('gulp-util');
var path = require('path');
var del = require('del');
var watch = require('gulp-watch');
var batch = require('gulp-batch');
var sourcemaps = require('gulp-sourcemaps');
var styleguide = require('sc5-styleguide');
var jshint = require('gulp-jshint');

// Style
var autoprefixer = require('gulp-autoprefixer');
var sass = require('gulp-sass');
var cssnano = require('gulp-cssnano');
var replace = require('gulp-replace');

// Images
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');

// Icon Font
var fontcustom = require('gulp-fontcustom')

// Server
var connect = require('gulp-connect');
var fs = require('fs');
var path = require('path');

// Compress SASS files to CSS
gulp.task('sass', function () {
	return gulp.src('src/style/style.scss')
	.pipe(sourcemaps.init())
	.pipe(sass()
		.on('error', function(err){
			gutil.log(err);
			this.emit('end');
		}))
	.pipe(autoprefixer({
        browsers: ['last 3 versions', 'ie 8', 'ie 9', 'ie 10', 'Android 4'],
        cascade: false
    }))
    .pipe(replace('./icons', '../fonts/icons/icons'))
    .pipe(cssnano({
    	autoprefixer: false
    }))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('dist/style/'))
    .pipe(connect.reload());
});

// Copy Images to Build Folder
gulp.task('copyimages', function() {
    return gulp.src('src/images/**/*')
    .pipe(gulp.dest('dist/images/'))
    .pipe(connect.reload());
});

// Compress and Move Images
gulp.task('imagemin', function(cb) {
	return gulp.src('src/images/**/*.*')
    .pipe(imagemin({
        progressive: true,
        svgoPlugins: [{removeViewBox: false}],
        use: [pngquant()]
    }))
    .pipe(gulp.dest('dist/images/'))
    .pipe(connect.reload());
});

// Copy fonts to Build Folder
gulp.task('copyfonts', function() {
    return gulp.src('src/fonts/**/*')
    .pipe(gulp.dest('dist/fonts/'))
    .pipe(connect.reload());
});

// Check JS for any errors
gulp.task('lint', function() {
  return gulp.src('src/js/**/*')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

// Copy JS to Build Folder
gulp.task('copyjs', function() {
    return gulp.src('src/js/**/*')
    .pipe(gulp.dest('dist/js/'))
    .pipe(connect.reload());
});

// Generate Icon Font
gulp.task('icons', function(){
	gulp.src("src/icons/*.svg")
	.pipe(fontcustom({
		font_name: 'icons',  // defaults to 'fontcustom',
		'css-selector': '.icon-{{glyph}}'
	}))
	.pipe(gulp.dest("src/fonts/icons/"))
	.pipe(connect.reload());
});


// Server
gulp.task('connect', function() {
	connect.server({
		middleware: function(connect, opt) {
			return [
				function(req, res, next) {
					var url = req.url;
					var passthroughPrefixes = ["/dist/", "/views/"];
					var passthrough = false;
					
					for(i in passthroughPrefixes) {
						if(url.indexOf(passthroughPrefixes[i]) === 0) {
							passthrough = true;
							break;
						}
					}
					
					if(passthrough) {
						next();
					} else {
						// console.log("Rewriting " + url);
						
						var filePath = path.join(".", 'index.html');
						var stat = fs.statSync(filePath);

						res.writeHead(200, {
							'Content-Type': 'text/html',
							'Content-Length': stat.size
						});

						var readStream = fs.createReadStream(filePath);
						readStream.pipe(res);
					}
				}
			]
		}
	});
});

// Styleguide
var outputPath = 'dist/styleguide/';

gulp.task('styleguide:generate', function() {
	return gulp.src(['src/style/**/*.scss', '!src/style/vendor/**'])
    .pipe(styleguide.generate({
        title: 'My Styleguide',
        server: true,
        rootPath: outputPath,
        overviewPath: 'src/styleguide/README.md'
      }))
    .pipe(gulp.dest(outputPath));
});

gulp.task('styleguide:applystyles', function() {
  return gulp.src('dist/style/style.css')
    .pipe(sass({
      errLogToConsole: true
    }))
    .pipe(styleguide.applyStyles())
    .pipe(gulp.dest(outputPath));
});

gulp.task('html', function(){
	gulp.src("*.html")
	.pipe(connect.reload());
});

// Default
gulp.task('default', ['sass', 'copyimages', 'copyfonts', 'copyjs', 'connect', 'watch']);

// Build
gulp.task('build', ['sass', 'imagemin', 'copyjs', 'copyfonts']);

// Watch for files changes
gulp.task('watch', ['connect'], function() {
    watch('src/style/**', batch(function (events, done) {
        gulp.start('sass', done);
    }));
    watch('src/images/**', batch(function (events, done) {
        gulp.start('copyimages', done);
    }));
    watch('src/fonts/**', batch(function (events, done) {
        gulp.start('copyfonts', done);
    }));
    watch('src/js/**', batch(function (events, done) {
        gulp.start('copyjs', done);
    }));
    watch('*.html', batch(function (events, done) {
    	gulp.start('html', done);
    }));
});

gulp.task('watch-icons', function () {
	watch('src/icons/**', batch(function (events, done) {
        gulp.start(['icons', 'sass', 'copyimages', 'copyfonts', 'copyjs'], done);
    }));
});

gulp.task('watch-styleguide', function () {
    watch('src/style/**', batch(function (events, done) {
        gulp.start('styleguide', done);
    }));
});

gulp.task('styleguide', ['styleguide:generate', 'styleguide:applystyles']);
