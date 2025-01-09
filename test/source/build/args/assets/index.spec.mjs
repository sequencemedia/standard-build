import * as chai from 'chai'

import {
  expect
} from 'chai'

import {
  stub
} from 'sinon'

import sinonChai from 'sinon-chai'

import {
  hasSourcePathArg,
  getSourcePathArg,
  hasPublicPathArg,
  getPublicPathArg,
  hasSourcePathEnv,
  getSourcePathEnv,
  hasPublicPathEnv,
  getPublicPathEnv,
  hasSourcePath,
  getSourcePath,
  hasPublicPath,
  getPublicPath
} from '#source/build/args/assets'

chai.use(sinonChai)

describe('#source/build/args/assets', () => {
  describe('`hasSourcePathArg`', () => {
    it('is a function', () => {
      return expect(hasSourcePathArg)
        .to.be.a('function')
    })
  })

  describe('`getSourcePathArg`', () => {
    it('is a function', () => {
      return expect(getSourcePathArg)
        .to.be.a('function')
    })
  })

  describe('`hasPublicPathArg`', () => {
    it('is a function', () => {
      return expect(hasPublicPathArg)
        .to.be.a('function')
    })
  })

  describe('`getPublicPathArg`', () => {
    it('is a function', () => {
      return expect(getPublicPathArg)
        .to.be.a('function')
    })
  })

  describe('`hasSourcePathEnv`', () => {
    it('is a function', () => {
      return expect(hasSourcePathEnv)
        .to.be.a('function')
    })
  })

  describe('`getSourcePathEnv`', () => {
    it('is a function', () => {
      return expect(getSourcePathEnv)
        .to.be.a('function')
    })
  })

  describe('`hasPublicPathEnv`', () => {
    it('is a function', () => {
      return expect(hasPublicPathEnv)
        .to.be.a('function')
    })
  })

  describe('`getPublicPathEnv`', () => {
    it('is a function', () => {
      return expect(getPublicPathEnv)
        .to.be.a('function')
    })
  })

  describe('`hasSourcePath`', () => {
    it('is a function', () => {
      return expect(hasSourcePath)
        .to.be.a('function')
    })
  })

  describe('`getSourcePath`', () => {
    it('is a function', () => {
      return expect(getSourcePath)
        .to.be.a('function')
    })
  })

  describe('`hasPublicPath`', () => {
    it('is a function', () => {
      return expect(hasPublicPath)
        .to.be.a('function')
    })
  })

  describe('`getPublicPath`', () => {
    it('is a function', () => {
      return expect(getPublicPath)
        .to.be.a('function')
    })
  })

  describe('`hasSourcePathArg()`', () => {
    describe('A Map instance is provided as an argument', () => {
      describe('The map instance has the key `sourceAssets`', () => {
        it('returns true', () => {
          const has = stub().returns(true)
          const map = { has }

          return expect(hasSourcePathArg(map))
            .to.be.true
        })
      })

      describe('The map instance does not have the key `sourceAssets`', () => {
        it('returns false', () => {
          const has = stub().returns(false)
          const map = { has }

          return expect(hasSourcePathArg(map))
            .to.be.false
        })
      })
    })
  })

  describe('`getSourcePathArg()`', () => {
    describe('A Map instance is provided as an argument', () => {
      describe('The map instance has the key `sourceAssets`', () => {
        it('returns a string', () => {
          const get = stub().returns('MOCK VALUE')
          const map = { get }

          return expect(getSourcePathArg(map))
            .to.eql('MOCK VALUE')
        })
      })

      describe('The map instance does not have the key `sourceAssets`', () => {
        it('returns undefined', () => {
          const get = stub().returns(undefined)
          const map = { get }

          return expect(getSourcePathArg(map))
            .to.be.undefined
        })
      })
    })
  })

  describe('`hasPublicPathArg()`', () => {
    describe('A Map instance is provided as an argument', () => {
      describe('The map instance has the key `publicAssets`', () => {
        it('returns true', () => {
          const has = stub().returns(true)
          const map = { has }

          return expect(hasPublicPathArg(map))
            .to.be.true
        })
      })

      describe('The map instance does not have the key `publicAssets`', () => {
        it('returns false', () => {
          const has = stub().returns(false)
          const map = { has }

          return expect(hasPublicPathArg(map))
            .to.be.false
        })
      })
    })
  })

  describe('`getPublicPathArg()`', () => {
    describe('A Map instance is provided as an argument', () => {
      describe('The map instance has the key `publicAssets`', () => {
        it('returns a string', () => {
          const get = stub().returns('MOCK VALUE')
          const map = { get }

          return expect(getPublicPathArg(map))
            .to.eql('MOCK VALUE')
        })
      })

      describe('The map instance does not have the key `publicAssets`', () => {
        it('returns undefined', () => {
          const get = stub().returns(undefined)
          const map = { get }

          return expect(getPublicPathArg(map))
            .to.be.undefined
        })
      })
    })
  })

  describe('`hasSourcePathEnv()`', () => {
    describe('An env object is provided as an argument', () => {
      describe('The env object has the key `SOURCE_ASSETS`', () => {
        it('returns true', () => {
          return expect(hasSourcePathEnv({ SOURCE_ASSETS: 'MOCK SOURCE ASSETS' }))
            .to.be.true
        })
      })

      describe('The env object does not have the key `SOURCE_ASSETS`', () => {
        it('returns false', () => {
          return expect(hasSourcePathEnv({}))
            .to.be.false
        })
      })
    })
  })

  describe('`getSourcePathEnv()`', () => {
    describe('An env object is provided as an argument', () => {
      describe('The env object has the key `SOURCE_ASSETS`', () => {
        it('returns a string', () => {
          return expect(getSourcePathEnv({ SOURCE_ASSETS: 'MOCK SOURCE ASSETS' }))
            .to.eql('MOCK SOURCE ASSETS')
        })
      })

      describe('The env object does not have the key `SOURCE_ASSETS`', () => {
        it('returns undefined', () => {
          return expect(getSourcePathEnv({}))
            .to.be.undefined
        })
      })
    })
  })

  describe('`hasPublicPathEnv()`', () => {
    describe('An env object is provided as an argument', () => {
      describe('The env object has the key `PUBLIC_ASSETS`', () => {
        it('returns true', () => {
          return expect(hasPublicPathEnv({ PUBLIC_ASSETS: 'MOCK PUBLIC ASSETS' }))
            .to.be.true
        })
      })

      describe('The env object does not have the key `PUBLIC_ASSETS`', () => {
        it('returns false', () => {
          return expect(hasPublicPathEnv({}))
            .to.be.false
        })
      })
    })
  })

  describe('`getPublicPathEnv()`', () => {
    describe('An env object is provided as an argument', () => {
      describe('The env object has the key `PUBLIC_ASSETS`', () => {
        it('returns a string', () => {
          return expect(getPublicPathEnv({ PUBLIC_ASSETS: 'MOCK PUBLIC ASSETS' }))
            .to.eql('MOCK PUBLIC ASSETS')
        })
      })

      describe('The env object does not have the key `PUBLIC_ASSETS`', () => {
        it('returns undefined', () => {
          return expect(getPublicPathEnv({}))
            .to.be.undefined
        })
      })
    })
  })

  describe('`hasSourcePath()`', () => {
    describe('The map instance has the key `sourceAssets`', () => {
      it('returns true', () => {
        const has = stub().returns(true)
        const map = { has }

        return expect(hasSourcePath(map))
          .to.be.true
      })
    })

    describe('The map instance does not have the key `sourceAssets`', () => {
      describe('The env object has the key `SOURCE_ASSETS`', () => {
        it('returns true', () => {
          const has = stub().returns(false)
          const map = { has }
          const env = { SOURCE_ASSETS: 'MOCK SOURCE ASSETS' }

          return expect(hasSourcePath(map, env))
            .to.be.true
        })
      })

      describe('The env object does not have the key `SOURCE_ASSETS`', () => {
        it('returns false', () => {
          const has = stub().returns(false)
          const map = { has }
          const env = {}

          return expect(hasSourcePath(map, env))
            .to.be.false
        })
      })
    })
  })

  describe('`getSourcePath()`', () => {
    describe('The map instance has the key `sourceAssets`', () => {
      it('returns a string', () => {
        const has = stub().returns(true)
        const get = stub().returns('MOCK SOURCE ASSETS')
        const map = { has, get }

        return expect(getSourcePath(map))
          .to.eql('MOCK SOURCE ASSETS')
      })
    })

    describe('The map instance does not have the key `sourceAssets`', () => {
      describe('The env object has the key `SOURCE_ASSETS`', () => {
        it('returns a string', () => {
          const has = stub().returns(false)
          const map = { has }
          const env = { SOURCE_ASSETS: 'MOCK SOURCE ASSETS' }

          return expect(getSourcePath(map, env))
            .to.eql('MOCK SOURCE ASSETS')
        })
      })

      describe('The env object does not have the key `SOURCE_ASSETS`', () => {
        it('returns undefined', () => {
          const has = stub().returns(false)
          const map = { has }
          const env = {}

          return expect(getSourcePath(map, env))
            .to.be.undefined
        })
      })
    })
  })

  describe('`hasPublicPath()`', () => {
    describe('The map instance has the key `publicAssets`', () => {
      it('returns true', () => {
        const has = stub().returns(true)
        const map = { has }

        return expect(hasPublicPath(map))
          .to.be.true
      })
    })

    describe('The map instance does not have the key `publicAssets`', () => {
      describe('The env object has the key `PUBLIC_ASSETS`', () => {
        it('returns true', () => {
          const has = stub().returns(false)
          const map = { has }
          const env = { PUBLIC_ASSETS: 'MOCK PUBLIC ASSETS' }

          return expect(hasPublicPath(map, env))
            .to.be.true
        })
      })

      describe('The env object does not have the key `PUBLIC_ASSETS`', () => {
        it('returns false', () => {
          const has = stub().returns(false)
          const map = { has }
          const env = {}

          return expect(hasPublicPath(map, env))
            .to.be.false
        })
      })
    })
  })

  describe('`getPublicPath()`', () => {
    describe('The map instance has the key `publicAssets`', () => {
      it('returns a string', () => {
        const has = stub().returns(true)
        const get = stub().returns('MOCK PUBLIC ASSETS')
        const map = { has, get }

        return expect(getPublicPath(map))
          .to.eql('MOCK PUBLIC ASSETS')
      })
    })

    describe('The map instance does not have the key `publicAssets`', () => {
      describe('The env object has the key `PUBLIC_ASSETS`', () => {
        it('returns a string', () => {
          const has = stub().returns(false)
          const map = { has }
          const env = { PUBLIC_ASSETS: 'MOCK PUBLIC ASSETS' }

          return expect(getPublicPath(map, env))
            .to.eql('MOCK PUBLIC ASSETS')
        })
      })

      describe('The env object does not have the key `PUBLIC_ASSETS`', () => {
        it('returns undefined', () => {
          const has = stub().returns(false)
          const map = { has }
          const env = {}

          return expect(getPublicPath(map, env))
            .to.be.undefined
        })
      })
    })
  })
})
