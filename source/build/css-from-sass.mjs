import path from 'node:path'
import gulp from '@sequencemedia/gulp'
import dartSass from 'sass'
import gulpSass from '@sequencemedia/gulp-sass'
import debug from '@sequencemedia/gulp-debug'
import rename from '@sequencemedia/gulp-rename'
import postCss from '@sequencemedia/gulp-postcss'
import scss from 'postcss-scss'
import autoprefixer from 'autoprefixer'
import nano from 'cssnano'
import cleanCss from '@sequencemedia/gulp-clean-css'
import cssPurge from '@sequencemedia/gulp-css-purge'
import sourcemaps from '@sequencemedia/gulp-sourcemaps'

import {
  getPackage,
  getPackageVersion
} from '#source/build/args'

import {
  sourcePath,
  publicPath
} from '#source/build/paths/assets'

import handleError from './handle-error.mjs'

const sass = gulpSass(dartSass)

const PACKAGE = getPackage()
const VERSION = getPackageVersion(PACKAGE)

function getTransformForSass () {
  return (
    sass({
      outputStyle: 'compressed' // 'nested'
    }).on('error', sass.logError)
  )
}

function getTransformForPostCss () {
  return (
    postCss([
      autoprefixer(),
      nano()
    ], { syntax: scss })
  )
}

function getTransformForCleanCss () {
  return (
    cleanCss({
      format: 'beautify',
      compatibility: 'ie9',
      specialComments: 0
    })
  )
}

function getTransformForCssPurge () {
  return (
    cssPurge({
      trim: false, // we have chosen to beautify not minify in cleanCSS, so let's not minify here
      trim_last_semicolon: true, // cleanCSS does this for us; cssPurge puts it back (unless we prevent it, here)
      shorten: false, // 'true' kills some inline `<svg />` elements
      format: false,
      verbose: false
    })
  )
}

export default function cssFromSass () {
  return (
    gulp.src([path.join(sourcePath, 'sass/**/*.scss'), `!${path.join(sourcePath, 'sass/**/_*.scss')}`])
      .pipe(sourcemaps.init({ loadMaps: true }))
      .pipe(rename((filePath) => { filePath.basename += `-${VERSION}` }))
      .pipe(getTransformForSass())
      .pipe(getTransformForPostCss())
      .pipe(getTransformForCleanCss())
      .pipe(getTransformForCssPurge())
      .pipe(sourcemaps.write('.'))
      .pipe(gulp.dest(path.join(publicPath, 'css')))
      .pipe(debug({ title: 'CSS' }))
      .on('error', handleError)
  )
}
