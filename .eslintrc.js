module.exports = {
	env: {
		browser: true,
		es6: true,
	},
	extends: 'airbnb',
	globals: {
		Atomics: 'readonly',
		SharedArrayBuffer: 'readonly',
	},
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 2018,
		sourceType: 'module',
	},
	plugins: [ 'react' ],
	rules: {
		'react/jsx-filename-extension': 0,
		'function-paren-newline': 0,
		'react/button-has-type': 0,
		'no-param-reassign': 0,
		'react/no-unescaped-entities': 0,
		indent: 0,
		'no-tabs': 0,
		'object-curly-newline': 0,
		'func-names': 0,
		'no-console': 0,
		'no-multiple-empty-lines': 0,
		'import/no-named-as-default': 0,
		'import/no-named-as-default-member': 0,
		'prefer-arrow-callback': 0,
		'prefer-template': 0,
		'prefer-const': 0,
		'arrow-body-style': 0,
		'react/no-array-index-key': 0,
		'class-methods-use-this': 0,
		'no-plusplus': 0,
		'no-case-declarations': 0,
		camelcase: 0,
		'react/jsx-pascal-case': 0,
		'jsx-a11y/no-static-element-interactions': 0,
		'jsx-a11y/click-events-have-key-events': 0,
		'arrow-parens': 0,
		'function-paren-newline': 0,
		'spaced-comment': 0,
		'react/jsx-indent': 0,
		'no-unused-expressions': [
			'error',
			{
				allowTernary: true,
			},
		],
		'react/prop-types': 0,
		'import/extensions': 0,
		'react/jsx-boolean-value': 0,
		'react/jsx-filename-extension': 0,
		'import/prefer-default-export': 0,
		'import/no-extraneous-dependencies': 0,
		'react/require-default-props': 0,
		'react/forbid-prop-types': 0,
		'react/prefer-stateless-function': 0,
		'jsx-a11y/label-has-for': 0,
		'comma-dangle': 0,
		'jsx-a11y/anchor-is-valid': 0,
		'no-underscore-dangle': 0,
		'react/jsx-one-expression-per-line': 0,
		'global-require': 0,
		'no-restricted-globals': 0,
		'array-bracket-spacing': 0,
		'react/jsx-indent-props': 0,
	},
	globals: {
		test: true,
		expect: true,
		afterEach: true,
		jest: true,
		describe: true,
		cy: true,
		it: true,
	},
};