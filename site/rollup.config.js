import resolve from '@rollup/plugin-node-resolve'
import multi from '@rollup/plugin-multi-entry'

export default {
  input: ['src/scripts/**/*.js'],
  inlineDynamicImports: true,
  output: {
    file: 'dist/_scripts/bundle.js',
  },
  plugins: [multi(), resolve()]
}
