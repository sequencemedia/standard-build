import path from 'path'
import gulp from 'gulp'
import dartSass from 'sass'
import gulpSass from 'gulp-sass'
import debug from 'gulp-debug'
import rename from 'gulp-rename'
import postCss from 'gulp-postcss'
import normalize from 'postcss-normalize'
import scss from 'postcss-scss'
import autoprefixer from 'autoprefixer'
import nano from 'cssnano'
import cleanCss from 'gulp-clean-css'
import cssPurge from 'gulp-css-purge'
import sourcemaps from 'gulp-sourcemaps'

import {
  getPackage,
  getPackageVersion
} from '~/source/build/args'

import {
  sourcePath,
  publicPath
} from './paths/assets'

import handleError from './handle-error'

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
      normalize(),
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
