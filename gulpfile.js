// Gulp configuration
var gulp = require('gulp');
var uglify = require("gulp-uglify");

gulp.task('minify-js', function () {
    gulp.src('src/js/*.js') // path to your files
        .pipe(uglify())
        .pipe(gulp.dest('assets/js'));
});

gulp.task('watch', function () {
    gulp.watch('src/js/**/*.js', ['minify-js']);
});