import * as cons from './constants';
import gulp from 'gulp';
import cleanCSS from 'gulp-clean-css';

gulp.task('minifyCss', () => {
  return gulp.src(`${cons.tmp}/styles/main.css`) // From dir
  // Rename file
  .pipe(cons.$.rename(function (path) {
    path.basename += ".min";
    path.extname = ".css"
  }))
  .pipe(cleanCSS()) // Minify css
  .pipe(gulp.dest(`${cons.tmp}/styles`)) // To dir
  .pipe(cons.$.size({title: '[minifyCss]'})) // Final size
});
