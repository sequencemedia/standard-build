import debug from 'debug'

import yargsParser from 'yargs-parser'

const log = debug('@sequencemedia:source:build:args:map')

log('`source:build:args:map` is awake')

const {
  argv = []
} = process

export default new Map(Object.entries(yargsParser(argv.slice(2))))
