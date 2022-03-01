import ts from 'rollup-plugin-typescript2'
export default {
  input: './src/index.ts',
  output: {
    file: './out/index.js',
    format: 'cjs',
  },
  plugins: [
    ts()
  ]
}