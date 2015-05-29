'use strict';
var gulp = require('gulp');


// Build theme images
gulp.task('build:theme:images', function() {
    return gulp.src('theme/images/**/*')
        .pipe(gulp.dest('build/theme/images'));
});