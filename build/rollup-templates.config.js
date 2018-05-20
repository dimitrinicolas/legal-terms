import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import string from 'rollup-plugin-string';
import pkg from '../package.json';

export default [
	{
		input: 'templates/index.js',
		output: {
			name: 'templates',
			file: pkg.browser,
			format: 'umd'
		},
		plugins: [
			string({
				include: '**/*.md'
			}),
			resolve(),
			commonjs(),
			babel({
				presets: [
					[
						'env',
						{ modules: false }
					]
				],
				plugins: [
					'external-helpers'
				],
				externalHelpers: true
			})
		]
	},
	{
		input: 'templates/index.js',
		external: ['ms'],
		output: [
			{ file: pkg.main, format: 'cjs' },
			{ file: pkg.module, format: 'es' }
		],
    plugins: [
			string({
				include: '**/*.md'
			}),
			babel({
				presets: [
					[
						'env',
						{ modules: false }
					]
				],
				plugins: [
					'external-helpers'
				],
				externalHelpers: true
			})
    ]
	}
];
