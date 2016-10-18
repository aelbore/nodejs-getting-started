/// <reference path="../typings/index.d.ts" />

import gulp from 'gulp';
import ngAnnotate from 'gulp-ng-annotate';
import rename from 'gulp-rename';
import htmlreplace from 'gulp-html-replace';
import htmlmin from 'gulp-htmlmin';
import sourcemaps from 'gulp-sourcemaps';
import gulp_jspm from 'gulp-jspm';
import gulpSequence from 'gulp-sequence';

import { CLIENT_JS_SOURCE, BUILD_PATH } from './config';
import { BundleConfigs } from '../bundle.config';

gulp.task('jspm-bundle', () => {
  let jspm_options = {
      selfExecutingBundle: true,
      minify: true
  };
  return gulp.src(BundleConfigs.main)
      .pipe(sourcemaps.init())
      .pipe(gulp_jspm(jspm_options))
      .pipe(ngAnnotate())    
      .pipe(rename(BundleConfigs.outFile))
      .pipe(sourcemaps.write('.'))
      .pipe(gulp.dest(BundleConfigs.outFolder));
});

gulp.task('jspm-bundle-index', () => {
  let htmlReplace = htmlreplace({ 'js': [ BundleConfigs.outFile ] });
  return gulp.src(`${CLIENT_JS_SOURCE}/index.html`)
      .pipe(htmlReplace)
      .pipe(htmlmin({collapseWhitespace: true}))
      .pipe(gulp.dest(BundleConfigs.outFolder));
});

gulp.task('bundle', 
    gulpSequence('clean:build', 
        'jspm-bundle', 
        'jspm-bundle-index')
);