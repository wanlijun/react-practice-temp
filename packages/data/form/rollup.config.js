import ts from 'rollup-plugin-typescript2';
import dts from 'rollup-plugin-dts';
const input = './index.ts';
export default [
  {
    input,
    output: {
      file: './dist/index.js',
      format: 'es'
    },
    plugins: [
      ts(),
    ]
  },
  {
    input,
    output: {
      file: './dist/index.d.ts',
    },
    plugins: [
      dts()
    ]
  }
]