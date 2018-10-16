import gulp from 'gulp';
import cleanCSS from 'gulp-clean-css';
import autoprefixer from 'gulp-autoprefixer';
import * as cons from './constants';

gulp.task('minifyCss', () => {
  return gulp.src(`${cons.tmp}/styles/main.css`) // From dir
  // Rename file
  .pipe(cons.$.rename(function (path) {
    path.basename += ".min";
    path.extname = ".css"
  }))
  .pipe(autoprefixer({
    browsers: ['last 2 versions'],
    cascade: false,
  }))
  .pipe(cleanCSS()) // Minify css
  .pipe(gulp.dest(`${cons.tmp}/styles`)) // To dir
  .pipe(cons.$.size({title: '[minifyCss]'})) // Final size
});
