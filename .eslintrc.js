// eslint-disable-next-line no-undef
module.exports = {
	root: true,
	extends: ['eslint:recommended', 'plugin:vue/essential', 'prettier', 'plugin:prettier/recommended'],
	plugins: ['prettier'],
	rules: {
		'vue/multi-word-component-names': 'off',
		'vue/require-v-for-key': 'off',
		'vue/no-multiple-template-root': 'off',
		'vue/no-v-for-template-key': 'off',
		'no-undef': 'off',
		'no-unused-vars': 'off',
		'vue/no-unused-vars': 'off',
		'prettier/prettier': [
			'error',
			{
				singleQuote: true, // '' 사용
				semi: true,
				useTabs: true,
				tabWidth: 2,
				trailingComma: 'all',
				printWidth: 160,
				bracketSpacing: true,
				arrowParens: 'avoid',
				endOfLine: 'auto',
			},
		],
		/* eslint-disable-next-line no-undef */
		'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
	},
};
