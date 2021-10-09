const { src, dest, parallel } = require('gulp'),
    del = require('del'),
    sass = require('gulp-sass'),
    cleanCSS = require('gulp-clean-css'),
    rename = require('gulp-rename'),
    sourcemaps = require('gulp-sourcemaps');


function styles() {
    return src("scss/entry.scss")
        .pipe(sourcemaps.init())
        .pipe(sass().on("error", sass.logError))
        .pipe(rename({
            basename: "styles",
            suffix: ".min"
        }))
        .pipe(cleanCSS())
        .pipe(sourcemaps.write())
        .pipe (dest("css"))
}

function clean(cb) {
    return del(['css'], cb());
}

exports.styles = styles;
exports.clean = clean;

exports.default = parallel(styles, clean)