import debug from 'debug'

import path from 'path'
import gulp from '@sequencemedia/gulp'
import vinylPaths from 'vinyl-paths'
import del from 'del'

import {
  currentDir,
  sourcePath,
  publicPath
} from '#source/build/paths/assets'

import handleError from './handle-error.mjs'

import cssFromSass from './css-from-sass.mjs'

const log = debug('@sequencemedia:source:build:css')

log('`css` is awake')

export function cleanCss () {
  log('cleanCss')

  return (
    gulp.src(path.join(publicPath, 'css/*'), { read: false })
      .pipe(vinylPaths((paths) => del(paths, { force: true })))
  )
}

/**
 *  - As `gulp.series()` to ensure Gulp executes it in sequence
 *  - As a named function to ensure Gulp prints the name
 */
export const css = gulp.series(function css () {
  log('css')

  return cssFromSass()
})

export function watchCss () {
  log('watchCss')

  return (
    gulp.watch(
      [
        path.join(sourcePath, 'sass/**/*.*'),
        path.join(sourcePath, 'font/**/*.*'),
        path.join(sourcePath, 'img/**/*.*')
      ],
      {
        name: 'css-watch',
        cwd: currentDir
      },
      gulp.series(cleanCss, css)
    )
      .on('error', handleError)
  )
}
