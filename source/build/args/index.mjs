import 'dotenv/config'

import debug from 'debug'

import MAP from '#source/build/args/map'

import {
  accessSync,
  constants,
  readFileSync
} from 'node:fs'

const PACKAGE = JSON.parse(readFileSync('./package.json').toString())

const {
  env: ENV
} = process

const log = debug('@sequencemedia:source:build:args')

log('`source:build:args` is awake')

export * as assets from '#source/build/args/assets'

export const hasPackageArg = (m = MAP) => m.has('package')

export const getPackageArg = (m = MAP) => m.get('package')

export const hasPackageEnv = (e = ENV) => Reflect.has(e, 'PACKAGE')

export const getPackageEnv = (e = ENV) => Reflect.get(e, 'PACKAGE')

export const hasPackage = (m = MAP, e = ENV) => hasPackageArg(m) ? accessSync(getPackageArg(m), constants.F_OK) : hasPackageEnv(e) ? accessSync(getPackageEnv(e), constants.F_OK) : true

export const getPackage = (m = MAP, e = ENV) => hasPackageArg(m) ? JSON.parse(readFileSync(getPackageArg(m), 'utf8').toString()) : hasPackageEnv(e) ? JSON.parse(readFileSync(getPackageEnv(e), 'utf8').toString()) : PACKAGE

export const hasPackageName = (p = PACKAGE) => Reflect.has(p, 'name')

export const getPackageName = (p = PACKAGE) => Reflect.get(p, 'name')

export const hasPackageDescription = (p = PACKAGE) => Reflect.has(p, 'description')

export const getPackageDescription = (p = PACKAGE) => Reflect.get(p, 'description')

export const hasPackageVersion = (p = PACKAGE) => Reflect.has(p, 'version')

export const getPackageVersion = (p = PACKAGE) => Reflect.get(p, 'version')
