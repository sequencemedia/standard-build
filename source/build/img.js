import path from 'path'
import gulp from 'gulp'
import debug from 'gulp-debug'
import vinylPaths from 'vinyl-paths'
import del from 'del'

import {
  currentDir,
  sourcePath,
  publicPath
} from './paths/assets'

import handleError from './handle-error'

export function cleanImg () {
  return (
    gulp.src(path.join(publicPath, 'img/*'), { read: false })
      .pipe(vinylPaths((paths) => del(paths, { force: true })))
  )
}

export function img () {
  return (
    gulp.src([path.join(sourcePath, 'img/**/*.*'), `!${path.join(sourcePath, 'img/.gitkeep')}`, `!${path.join(sourcePath, 'img/**/*.ai')}`])
      .pipe(gulp.dest(path.join(publicPath, 'img')))
      .pipe(debug({ title: 'Img' }))
  )
}

export function watchImg () {
  return (
    gulp.watch(
      path.join(sourcePath, 'img/**/*.*'),
      {
        name: 'img-watch',
        cwd: currentDir
      },
      gulp.series(cleanImg, img)
    )
      .on('error', handleError)
  )
}
