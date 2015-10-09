var gulp = require("gulp"),
 browserSync = require('browser-sync');

gulp.task('server', function (){
	browserSync({
		port: 9000,
		server:{
			baseDir: './'
		}
	});
});

gulp.task('watch', function(){
	gulp.watch([
		'./*.html',
		'./js/**/*.js',
		'./css/**/*.css'
	]).on('change', browserSync.reload);
});

gulp.task('default', ['server', 'watch']);


// var gulp = require('gulp');
// var mainBowerFiles = require('gulp-main-bower-files');
// var concat = require('gulp-concat');
// var uglify = require('gulp-uglify');
// var gulpFilter = require('gulp-filter');
 
// gulp.task('main-bower-files', function() {
//     var filterJS = gulpFilter('**/*.js');
//     return gulp.src('./bower.json')
//         .pipe(mainBowerFiles({
//             overrides: {
//                 bootstrap: {
//                     main: [
//                         './dist/js/bootstrap.js',
//                         './dist/css/*.min.*',
//                         './dist/fonts/*.*'
//                     ]
//                 }
//             }
//         }))
//         .pipe(filterJS)
//         .pipe(concat('vendor.js'))
//         .pipe(uglify())
//         .pipe(filterJS.restore())
//         .pipe(gulp.dest('./wwwroot/libs'));
// });