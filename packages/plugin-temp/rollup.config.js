import ts from 'rollup-plugin-typescript2'
export default {
  input: './src/form/index.ts',
  output: {
    file: '/home/lijunwan/caicai/project/best/fe-banan-admin-test/generate-code-plugin/template/form.js',
  },
  plugins: [
    ts()
  ]
}