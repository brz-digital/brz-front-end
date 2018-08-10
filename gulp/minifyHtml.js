import * as cons from './constants';
import gulp from 'gulp';
import htmlmin from 'gulp-htmlmin';

gulp.task('minifyHtml', () => {
  return gulp.src(`${cons.src}/*.html`) // From dir
  .pipe(htmlmin({ collapseWhitespace: true, removeComments: true })) // Minify html
  .pipe(gulp.dest(`${cons.dist}`)) // To dir
  .pipe(cons.$.size({ title: '[minifyHtml]' })); // Final size
});
