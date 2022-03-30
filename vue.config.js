// eslint-disable-next-line no-undef
module.exports = {
	chainWebpack: config => {
		config.module.rules.delete('eslint');
	},
};
