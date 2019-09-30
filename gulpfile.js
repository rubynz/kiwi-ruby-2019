
var gulp = require("gulp"),
sass = require("gulp-sass"),
postcss = require("gulp-postcss"),
autoprefixer = require("autoprefixer"),
cssnano = require("cssnano"),
fs = require("fs"),
sourcemaps = require("gulp-sourcemaps"),
browserSync = require("browser-sync").create(),
removeCode = require('gulp-remove-code'),
rename = require('gulp-rename'),
compilehandlebars = require('gulp-compile-handlebars'),
templateHtml = require('gulp-template-html'),
gutil = require('gulp-util'),
del = require('del'),
replace = require('gulp-replace');

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
    },
    notProd: {
        // src: ['schedule'],
        // srcContent: '!content/schedule/**/*'
        src: '',
        srcContent: ''
    }
};

var talks = require('./content/speakers/talks.json');
var versionNumber = 2 + Math.random();

function generalTemplates(env) {

rcOptions = (gutil.env.env === 'dev') ? { dev: true, live: false } : { dev: false, live: true }


if (gutil.env.env === 'prod') {
    notProdTemplates = ['content/**/*.html', paths.notProd.srcContent];
} else {
    notProdTemplates = ['content/**/*.html'];
}

return gulp
    .src( notProdTemplates )
    .pipe(compilehandlebars({
        people:talks, 
        eumir:talks[0],
        julian:talks[1],
        pete:talks[2],
        shaun:talks[3],
        julianna:talks[4],
        erin:talks[5],
        lena:talks[6],
        rose:talks[7],
        michael:talks[8],
        nick:talks[9]
    }))
    .pipe(rename(function(path) {
        path.extname = '.html';
    }))
    .pipe(templateHtml('templates/template.html'))
    .pipe(removeCode(rcOptions))
    .pipe(replace('<!-- replace:version -->', versionNumber))
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
gulp.watch(paths.templates.src, generalTemplates).on('change', browserSync.reload);

}

function cleaner() {
    if (gutil.env.env === 'prod' ? true : false) {
        return del(paths.notProd.src, {force:true});
    } else {
        return del('!speakers')
    }
};

// We don't have to expose the reload function
// It's currently only useful in other functions


// Don't forget to expose the task!
exports.watch = watch

// Expose the task by exporting it
// This allows you to run it from the commandline using
// $ gulp style
exports.style = style;
exports.cleaner = cleaner;


/*
* Specify if tasks run in series or parallel using `gulp.series` and `gulp.parallel`
*/

var build = gulp.series(cleaner, gulp.parallel(style, generalTemplates, watch));



/*
* You can still use `gulp.task` to expose tasks
*/
//gulp.task('build', build);

/*
* Define default task that can be called by just running `gulp` from cli
*/
gulp.task('default', build);
