import {
  expect
} from 'chai'

import map from '~/source/build/args/map'

describe('~/source/build/args/map', () => {
  describe('`map`', () => {
    it('is an instance of Map', () => {
      return expect(map)
        .to.be.an.instanceof(Map)
    })
  })
})
