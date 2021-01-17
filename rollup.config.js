import { terser } from 'rollup-plugin-terser';

export default {
  input: 'src/utils/loader.js',
  output: {
    file: 'public/compiled/bundle.min.js',
    format: 'cjs',
    name: 'version',
    plugins: [terser()],
  },
};
