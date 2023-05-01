import debug from 'debug'

import {
  join,
  resolve
} from 'node:path'

import {
  hasSourcePath,
  getSourcePath,
  hasPublicPath,
  getPublicPath
} from '#source/build/args/assets'

const log = debug('@sequencemedia:source:build:paths:assets')

log('`source:build:paths:assets` is awake')

export const currentDir = process.cwd()

const SOURCE_PATH = join(currentDir, 'source/assets')

const PUBLIC_PATH = join(currentDir, 'public/assets')

export const sourcePath = resolve(hasSourcePath() ? getSourcePath() : SOURCE_PATH)

export const publicPath = resolve(hasPublicPath() ? getPublicPath() : PUBLIC_PATH)
