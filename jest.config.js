/** @typedef {import('@jest/types').Config.InitialOptions} Config */

const path = require('path')

const { pathsToModuleNameMapper } = require('ts-jest/utils')

const { compilerOptions } = require('./tsconfig.dev.json')

/** @type {Config} */
const config = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  roots: ['<rootDir>'],
  modulePaths: ['<rootDir>'],
  globals: {
    'ts-jest': {
      tsconfig: path.resolve(__dirname, './tsconfig.dev.json'),
    },
  },
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths) || {},
}

module.exports = config
