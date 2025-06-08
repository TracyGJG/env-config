export default (config) => (env, tier) => ({
  ...config['@common'],
  ...config['@environments'][`${env}`][`${tier}`],
  ...config['@features'].reduce(
    (features, feature) => ({ ...features, [feature]: true }),
    {}
  ),
});
