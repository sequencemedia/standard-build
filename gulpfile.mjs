import gulp from '@sequencemedia/gulp'

import {
  cleanFont,
  font,
  watchFont,
  cleanImg,
  img,
  watchImg,
  cleanCss,
  css,
  watchCss
} from '#source/build'

gulp
  .task('clean:font', cleanFont)

gulp
  .task('build:font', gulp.series('clean:font', font))

gulp
  .task('watch:font', gulp.series('build:font', watchFont))

gulp
  .task('clean:img', cleanImg)

gulp
  .task('build:img', gulp.series('clean:img', img))

gulp
  .task('watch:img', gulp.series('build:img', watchImg))

gulp
  .task('clean:css', cleanCss)

gulp
  .task('build:css', gulp.series('clean:css', css))

gulp
  .task('watch:css', gulp.series('build:css', watchCss))

gulp
  .task('clean', gulp.series('clean:font', 'clean:img', 'clean:css'))

gulp
  .task('build', gulp.series('build:font', 'build:img', 'build:css'))

gulp
  .task('watch', gulp.parallel('watch:font', 'watch:img', 'watch:css'))

gulp
  .task('default', gulp.series('build'))
