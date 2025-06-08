import { describe, it } from 'node:test';
import assert from 'node:assert';

import envConfig from './env-config.js';

import configuration from './configuration.json' with { type: 'json' };

describe('ENVironment CONFIGurator', () => {
  it('can prepare a configuration', () => {
    assert.ok(envConfig);

    const configurator = envConfig(configuration);
    assert.ok(configurator);
    assert.equal(typeof configurator, 'function');

    const envJson = configurator('production', 'database');
    assert.ok(envJson);
    assert.deepEqual(envJson, {
      APPLICATION_EDITION: 'MVP-Release-Candidate',
      DB_PASSWORD: 'dbPassword',
      DB_USER_NAME: 'dbUserName',
      FEATURE_A: true,
      FEATURE_B: true,
      VERSION: '1.2.3'
    });
  });
});
