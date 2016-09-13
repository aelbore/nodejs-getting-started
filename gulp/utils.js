/// <reference path="../typings/index.d.ts" />

import gulp from 'gulp';
import sourcemaps from 'gulp-sourcemaps';
import babel from 'gulp-babel';
import clean from 'gulp-clean';
import { BABEL_RC, DESTINATION } from './config';

let build = (files) => {
  return gulp.src(files)
    .pipe(sourcemaps.init())
    .pipe(babel(BABEL_RC))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(DESTINATION));  
},
cleanFiles = (files) => {
  return gulp.src(files, {read: false})
    .pipe(clean());
},
watcher = (srcRoot, destRoot) => {
  gulp.watch(`${srcRoot}/**/*.js`, (event) => {
    console.log(`> ${event.type}: ${event.path}.`);
    if (event.type === 'deleted'){
      let file = event.path.replace(srcRoot, destRoot);
      cleanFiles([ file, `${file}.map` ]);
    } else {
      build(event.path);
    }
  });
};;

export { build, cleanFiles, watcher }