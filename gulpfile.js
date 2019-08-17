
var gulp = require("gulp"),
sass = require("gulp-sass"),
postcss = require("gulp-postcss"),
autoprefixer = require("autoprefixer"),
cssnano = require("cssnano"),
fs = require("fs"),
sourcemaps = require("gulp-sourcemaps"),
browserSync = require("browser-sync").create(),
removeCode = require('gulp-remove-code'),
// concat = require('gulp-concat'),
template = require('gulp-template-html');


var paths = {
	styles: {
		// By using styles/**/*.sass we're telling gulp to check all folders for any sass file
		src: "scss/*.scss",
		// Compiled files will end up in whichever folder it's found in (partials are not compiled)
		dest: "css"
	},

	// Easily add additional paths
	templates: {
		src: ['content/**/*.html', 'templates/**/*.html'],
		cache: 'cache',
		dest: './'
	}
};

function templatify() {
return gulp
	.src('content/**/*.html')
    .pipe(template('templates/template.html'))
    .pipe(gulp.dest(paths.templates.cache));
}

function remover() {
return gulp
	.src(paths.templates.cache+'/**/*.html')
	.pipe(removeCode({ notlive: true }))
	.pipe(gulp.dest('./'));
}

function style() {
return gulp
    .src(paths.styles.src)
    // Initialize sourcemaps before compilation starts
    .pipe(sourcemaps.init())
    .pipe(sass())
    .on("error", sass.logError)
    // Use postcss with autoprefixer and compress the compiled file using cssnano
    .pipe(postcss([autoprefixer(), cssnano()]))
    // Now add/write the sourcemaps
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(paths.styles.dest))
    // Add browsersync stream pipe after compilation
    .pipe(browserSync.stream());
}


// A simple task to reload the page
function reload() {
	browserSync.reload();
}

function move() {   
    return gulp
        .src('./node_modules/stickybits/dist/stickybits.min.js', { allowEmpty: true })
        .pipe(gulp.dest('./js/vendor/'));
}

// function packJs () {
//     return gulp.src(['./js/vendor/*.js', './js/main.js'], { allowEmpty: true })
//         .pipe(concat('bundle.js'))
//         .pipe(gulp.dest('./js'));
// }

// Add browsersync initialization at the start of the watch task
function watch() {
browserSync.init({
    // You can tell browserSync to use this directory and serve it as a mini-server
    server: {
        baseDir: "."
    }
    // If you are already serving your website locally using something like apache
    // You can use the proxy setting to proxy that instead
    // proxy: "yourlocal.dev"
});
gulp.watch(paths.styles.src, style);

// We should tell gulp which files to watch to trigger the reload
// This can be html or whatever you're using to develop your website
// Note -- you can obviously add the path to the Paths object
gulp.watch(paths.templates.src, templatify).on('change', browserSync.reload);
gulp.watch(paths.templates.cache, remover).on('change', browserSync.reload);

}

// We don't have to expose the reload function
// It's currently only useful in other functions


// Don't forget to expose the task!
exports.watch = watch

// Expose the task by exporting it
// This allows you to run it from the commandline using
// $ gulp style
exports.style = style;
exports.remover = remover;
exports.templatify = templatify;
exports.move = move;
// exports.packJs = packJs;

/*
* Specify if tasks run in series or parallel using `gulp.series` and `gulp.parallel`
*/

// gulp.task('default', function(){

// );
var build = gulp.parallel(style, templatify, remover, move, watch);

/*
* You can still use `gulp.task` to expose tasks
*/
//gulp.task('build', build);

/*
* Define default task that can be called by just running `gulp` from cli
*/
gulp.task('default', build);