/* eslint-disable node/no-extraneous-import */

import path from 'path'

import esbuild from 'esbuild'

esbuild
  .build({
    entryPoints: [path.resolve(__dirname, '../src/index.ts')],
    outdir: path.resolve(__dirname, '../dist'),
    bundle: true,
    minify: true,
    platform: 'node',
    target: 'node16',
    tsconfig: path.resolve(__dirname, '../tsconfig.app.json'),
    mainFields: ['module', 'main'],
  })
  .catch((err) => {
    console.error(err)
    // eslint-disable-next-line no-process-exit
    process.exit(1)
  })
