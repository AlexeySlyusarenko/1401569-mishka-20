const gulp = require("gulp");
const plumber = require("gulp-plumber");
const sourcemap = require("gulp-sourcemaps");
const sass = require("gulp-sass");
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const sync = require("browser-sync").create();
var clean = require('gulp-clean');
const csso = require("gulp-csso");
const rename = require("gulp-rename");
const uglify = require('gulp-uglify-es').default;
const imagemin = require('gulp-imagemin');
const webp = require('gulp-webp');
const svgstore = require('gulp-svgstore');

// Build

const buildClear = () => {
  return gulp.src("build", {read: false})
        .pipe(clean());
}

exports.buildClear = buildClear;

const buildCSS = () => {
  return gulp.src("source/sass/style.scss")
    .pipe(plumber())
    .pipe(sass())
    .pipe(postcss([
      autoprefixer()
    ]))
    .pipe(csso())
    .pipe(rename("style.min.css"))
    .pipe(gulp.dest("build/css"))
    .pipe(sync.stream());
}

exports.buildCSS = buildCSS;

const buildJS = () => {
  return gulp.src("source/js/**/*.js")
    .pipe(uglify())
    .pipe(gulp.dest("build/js"));
}

exports.buildJS = buildJS;

const buildHTML = () => {
  return gulp.src("source/*.html")
    .pipe(gulp.dest("build"));
}

exports.buildHTML = buildHTML;

const buildFonts = () => {
  return gulp.src("source/fonts/**/*")
    .pipe(gulp.dest("build/fonts"));
}

exports.buildFonts = buildFonts;

const buildImages = () => {
  return gulp.src("source/img/**/*")
    .pipe(imagemin([
      imagemin.mozjpeg({quality: 75, progressive: true}),
      imagemin.optipng({optimizationLevel: 3}),
      imagemin.svgo({
        plugins: [
          {removeViewBox: false},
          {cleanupIDs: false}
        ]
      })
    ]))
    .pipe(gulp.dest("build/img"));
}

exports.buildImages = buildImages;

const buildWebp = () => {
  return gulp.src("source/img/**/*.{png,jpg}")
    .pipe(webp({quality: 90}))
    .pipe(gulp.dest("build/img"));
}

exports.buildWebp = buildWebp;

const buildSVG = () => {
  return gulp.src("source/img/**/icon-*.svg")
    .pipe(svgstore())
    .pipe(imagemin([
      imagemin.svgo({
        plugins: [
          {removeViewBox: false},
          {cleanupIDs: false}
        ]
      })
    ]))
    .pipe(rename("icon-sprite.svg"))
    .pipe(gulp.dest("build/img"));
}

exports.buildSVG = buildSVG;

// Server

const server = (done) => {
  sync.init({
    server: {
      baseDir: 'build'
    },
    cors: true,
    notify: false,
    ui: false,
  });
  done();
}

exports.server = server;

// Watcher

const watcher = () => {
  gulp.watch("source/sass/**/*.scss", gulp.series("buildCSS"));
  gulp.watch("source/*.html", gulp.series("buildHTML")).on("change", sync.reload);
}

exports.default = gulp.series(
  server, watcher
);
