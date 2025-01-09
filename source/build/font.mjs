import path from 'node:path'
import gulp from '@sequencemedia/gulp'
import debug from '@sequencemedia/gulp-debug'
import vinylPaths from 'vinyl-paths'
import del from 'del'

import {
  currentDir,
  sourcePath,
  publicPath
} from '#source/build/paths/assets'

import handleError from './handle-error.mjs'

export function cleanFont () {
  return (
    gulp.src(path.join(publicPath, 'font/*'), { read: false })
      .pipe(vinylPaths((paths) => del(paths, { force: true })))
  )
}

export function font () {
  return (
    gulp.src([path.join(sourcePath, 'font/**/*.*'), `!${path.join(sourcePath, 'font/.gitkeep')}`])
      .pipe(gulp.dest(path.join(publicPath, 'font')))
      .pipe(debug({ title: 'Font' }))
  )
}

export function watchFont () {
  return (
    gulp.watch(
      path.join(sourcePath, 'font/**/*.*'),
      {
        name: 'font-watch',
        cwd: currentDir
      },
      gulp.series(cleanFont, font)
    )
      .on('error', handleError)
  )
}
