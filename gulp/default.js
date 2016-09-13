/// <reference path="../typings/index.d.ts" />

import gulp from 'gulp';
import gulpSequence from 'gulp-sequence';

gulp.task('default', 
  gulpSequence('serve', ['watch-html', 'watch-server-js'])
);