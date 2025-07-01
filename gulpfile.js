import gulp from 'gulp';
import gulpShell from 'gulp-shell';
import { deleteAsync } from 'del'; 

gulp.task('clean', () => {
  return deleteAsync(['dist', '.parcel-cache']);
});

gulp.task('parcel', gulpShell.task([
  'parcel starter/index.html --open'
]));

gulp.task('test', gulpShell.task([
  'mocha test/shuffle.js'
]));

gulp.task('cypress', gulpShell.task([
  'npx cypress run'
]));

gulp.task('full-test', gulp.series('parcel', 'test', 'cypress'));

gulp.task('default', gulp.series('clean', 'parcel'));
