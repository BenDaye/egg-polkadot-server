/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1611041301069_7896';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
    // onerror: {
    //   all(err, ctx) {
    //     ctx.body = err.message || err;
    //     ctx.status = 500;
    //   },
    // },
    security: {
      domainWhiteList: [ 'http://127.0.0.1:7001' ],
      csrf: false,
    },
    polkadot: {
      client: {
        url: 'ws://221.122.102.163:9944',
        options: {
          types: {
            Address: 'AccountId',
            LookupSource: 'AccountId',
            URC10: {
              symbol: 'Vec<u8>',
              name: 'Vec<u8>',
              decimals: 'u8',
              max_supply: 'u64',
            },
          },
        },
      },
    },
    alinode: {
      appid: '86841',
      secret: '7394c282884e92994b1f27f0dd90440cc5497cfd',
    },
  };

  return {
    ...config,
    ...userConfig,
  };
};
