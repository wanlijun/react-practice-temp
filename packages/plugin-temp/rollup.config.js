import ts from 'rollup-plugin-typescript2';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
export default {
  input: './src/form/index.ts',
  output: {
    file: '/home/lijunwan/caicai/project/best/fe-banan-admin-test/generate-code-plugin/template/form.js',
    format: 'cjs'
  },
  manualChunks: () => {
    return null;
  },
  external: [],
  plugins: [
    ts(),
    commonjs(),
    nodeResolve(),
    {
      name: 'optionsPlugin',
      options(options) {
        console.log(options.external, '=====================')
        return null
      },
    },
  ],
}