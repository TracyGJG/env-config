import envConfig from './env-config.js';

import configuration from './configuration.json' with { type: 'json' };

const envJson = envConfig(configuration, 'production', 'database');

console.log(envJson);
