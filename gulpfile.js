"use strict";

var gulp = require("gulp");
var sass = require("gulp-sass");
var plumber = require("gulp-plumber");
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var minify = require("gulp-csso");
var rename = require("gulp-rename");
var imagemin = require("gulp-imagemin");
var svgstore = require("gulp-svgstore");
var server = require("browser-sync").create();
var webp = require("gulp-webp");
var del = require("del");
var run = require("run-sequence");

gulp.task("style", function() {
  gulp.src("source/sass/style.scss")
    .pipe(plumber())
    .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
    .pipe(postcss([
      autoprefixer()
    ]))
    .pipe(gulp.dest("build/css"))
    .pipe(minify())
    .pipe(rename("style.min.css"))
    .pipe(gulp.dest("build/css"))
    .pipe(server.stream());
});

gulp.task("images", function() {
  gulp.src("source/img/**/*.{jpg,png,svg}")
    .pipe(imagemin([
      imagemin.optipng({optimizationLevel: 3}),
      imagemin.jpegtran({progressive: true}),
      imagemin.svgo()
    ]))
    .pipe(gulp.dest("build/img"))
});

gulp.task("webp", function() {
  gulp.src("source/img/**/*.{jpg,png}")
    .pipe(webp({quality: 90}))
    .pipe(gulp.dest("build/img"))
});

gulp.task("sprite", function() {
    gulp.src([
      "source/img/icon-academy.svg",
      "source/img/logo-footer.svg",
      "source/img/icon-cart.svg",
      "source/img/icon-search.svg",
      "source/img/icon-fb.svg",
      "source/img/icon-insta.svg",
      "source/img/icon-tw.svg",
      "source/img/icon-phone.svg",
      "source/img/icon-mail.svg",
      "source/img/icon-left-arrow.svg",
      "source/img/icon-right-arrow.svg"
    ])
    .pipe(svgstore())
    .pipe(rename("sprite.svg"))
    .pipe(gulp.dest("build/img"))
});

gulp.task("copy", function() {
  gulp.src([
    "source/fonts/**/*.{woff,woff2}",
    "source/img/**",
    "source/js/**",
    "source/*.html"
  ], {
    base: "source"
  })
  .pipe(gulp.dest("build"));
});

gulp.task("clean", function() {
  del("build");
});

gulp.task("serve",  function() {
  server.init({
    server: "build/",
    notify: false,
    open: true,
    cors: true,
    ui: false
  });

  gulp.watch("source/sass/**/*.{scss,sass}", ["style"]);
  gulp.watch("source/*.html").on("change", server.reload);
});

gulp.task("build", function(done) {
  run(
    "clean",
    "copy",
    "style",
    "sprite",
    done
  );
});
