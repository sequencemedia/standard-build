import debug from 'debug'

import {
  relative
} from 'path'

import {
  currentDir
} from '#source/build/paths'

const log = debug('@sequencemedia:source:build:handle-error')

const {
  env: {
    DEBUG = '@sequencemedia:source:build:handle-error'
  }
} = process

debug.enable(DEBUG)

log('`handleError` is awake')

export default function handleError ({
  code = 'No error code defined',
  message = 'No error message defined',
  filename: f = 'No file name defined',
  path: p = 'No path defined'
} = {}) {
  switch (code) {
    case 'EPERM':
      log(`A watched file or directory has invalid permissions: '${relative(currentDir, f || p)}'`)
      break

    case 'ENOENT':
      log(`A watched file or directory has been deleted: '${relative(currentDir, f || p)}'`)
      break

    default:
      log(`Watch error. ${code}: ${message}.`)
      break
  }
}
