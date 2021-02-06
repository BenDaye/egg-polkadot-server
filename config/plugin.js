'use strict';

/** @type Egg.EggPlugin */
module.exports = {
  // had enabled by egg
  // static: {
  //   enable: true,
  // }
  polkadot: {
    enable: true,
    package: 'egg-polkadot',
  },
  routerPlus: {
    enable: true,
    package: 'egg-router-plus',
  },
  validate: {
    enable: true,
    package: 'egg-validate',
  },
  cors: {
    enable: true,
    package: 'egg-cors',
  },
  alinode: {
    enable: true,
    package: 'egg-alinode',
  },
};
