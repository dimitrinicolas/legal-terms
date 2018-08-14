import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import string from 'rollup-plugin-string';

export default [
	{
		input: 'src/index.js',
		output: {
			name: 'app',
			file: 'assets/dist/script.js',
			format: 'umd',
			globals: {
			  'react': 'React',
			  'react-dom': 'ReactDOM',
				'react-router-dom': 'ReactRouterDOM'
			}
		},
		external: [
			'react',
			'react-dom',
			'react-router-dom'
		],
		plugins: [
			string({
				include: '**/*.md'
			}),
      babel({
        presets: [
          'react',
          [
            'env',
            { modules: false }
          ]
        ]
      }),
			resolve(),
			commonjs()
		]
	}
];
