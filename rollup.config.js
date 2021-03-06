import cleaner from 'rollup-plugin-cleaner';
import typescript from 'rollup-plugin-typescript2';

import pkg from './package.json';

export default {
  input: './src/index.ts',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
    },
    {
      file: pkg.module,
      format: 'es',
    },
  ],
  external: [...Object.keys(pkg.dependencies || {})],
  plugins: [
    cleaner({
      targets: ['./dist'],
    }),
    typescript({
      typescript: require('typescript'),
      clean: true,
      verbosity: 2,
      check: true,
    }),
  ],
};