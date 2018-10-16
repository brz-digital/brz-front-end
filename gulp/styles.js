import autoprefixer from 'autoprefixer';
import gulp from 'gulp';
import postcss from 'gulp-postcss';
import sourcemaps from 'gulp-sourcemaps';
// import lost from 'lost';
import * as cons from './constants';

gulp.task('styles', () => {
    return gulp.src(`${cons.src}/styles/main.{scss,sass}`)
    .pipe(cons.$.newer(`${cons.tmp}/styles`))
    .pipe(cons.$.sourcemaps.init())
    .pipe(cons.$.cssGlobbing({
      extensions: ['.scss', '.sass']
    }))
    .pipe(cons.$.plumber())
    .pipe(cons.$.sass.sync({
      outputStyle: 'expanded',
      precision: 10,
      includePaths: ['.']
    }).on('error', cons.$.sass.logError))
    .pipe(postcss([
      // lost(),
      autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false,
      }),
    ]))
    .pipe(cons.$.sourcemaps.write())
    .pipe(gulp.dest(`${cons.tmp}/styles`))
    .pipe(cons.$.size({title: '[styles]'}))
    .pipe(cons.reload({stream: true}));
});
