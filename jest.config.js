/** @typedef {import('@jest/types').Config.InitialOptions} Config */

const { pathsToModuleNameMapper } = require('ts-jest')

const { compilerOptions } = require('./tsconfig.base.json')

/** @type {Config} */
const config = {
  testEnvironment: 'node',
  transform: {
    '^.+\\.(t|j)sx?$': '@swc/jest',
  },
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths) || {},
}

module.exports = config
