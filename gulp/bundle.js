/// <reference path="../typings/index.d.ts" />

import gulp from 'gulp';
import jspm from 'jspm';
import ngAnnotate from 'gulp-ng-annotate';
import rename from 'gulp-rename';
import uglify from 'gulp-uglify';
import htmlreplace from 'gulp-html-replace';
import htmlmin from 'gulp-htmlmin';

import * as path from 'path';

import { CLIENT_JS_SOURCE, DESTINATION } from './config';

let resolveTo = (resolvePath) => {
	return (glob) => {
		glob = glob || '';
		return path.resolve(path.join(CLIENT_JS_SOURCE, resolvePath, glob));
	}
};

let buildRoot = path.join(__dirname, '../build/'); 
let buildPath = `${buildRoot}/app.js`;
let appPath = resolveTo('app')('app');

gulp.task('bundle', () => {
  return jspm.bundleSFX(appPath, buildPath, {})
      .then(() => {
        return gulp.src(buildPath)
            .pipe(ngAnnotate())
            .pipe(uglify())
            .pipe(rename('app.min.js'))
            .pipe(gulp.dest(buildRoot));
      })
      .then(() => {
        return gulp.src(`${CLIENT_JS_SOURCE}/index.html`)
            .pipe(htmlreplace({
                'js': ['system.js', 'app.min.js']
            }))
            .pipe(htmlmin({collapseWhitespace: true}))
            .pipe(gulp.dest(buildRoot));
      })
      .then(() => {
          gulp.start('copy-systemjs:bundle');
      });
});