import debug from 'debug'

const log = debug('@sequencemedia:source:build:paths')

log('`source:build:paths` is awake')

export const currentDir = process.cwd()

export * as assets from '#source/build/paths/assets'
