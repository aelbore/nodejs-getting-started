/// <reference path="../typings/index.d.ts" />

import gulp from 'gulp';
import gulpSequence from 'gulp-sequence';

gulp.task('serve', gulpSequence('clean', 'build', 'browser-sync'));