/** @typedef {import('@jest/types').Config.InitialOptions} Config */

const fs = require('fs')
const path = require('path')

const json5 = require('json5')
const { pathsToModuleNameMapper } = require('ts-jest')

/** @type {import('../../tsconfig.base.json')} */
const { compilerOptions } = json5.parse(
  fs.readFileSync(path.resolve(__dirname, '../../tsconfig.base.json'), 'utf-8')
)

/** @type {Config} */
const config = {
  testEnvironment: 'node',
  transform: {
    '^.+\\.(t|j)sx?$': '@swc/jest',
  },
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths) || {},
}

module.exports = config
