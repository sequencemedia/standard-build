import debug from 'debug'

const {
  env: {
    DEBUG
  }
} = process

before(() => {
  if (DEBUG) debug.enable(DEBUG)
})
