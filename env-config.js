export default (config, env, tier) => ({
	...config['@common'],
	FEATURES: config['@features'],
	...config['@environments'][`${env}`][`${tier}`],
});
