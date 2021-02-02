'use strict';

const isHex = require('@polkadot/util').isHex;
const mnemonicValidate = require('@polkadot/util-crypto').mnemonicValidate;

module.exports = app => {
  app.validator.addRule('hash', function(rule, value) {
    try {
      isHex(value);
    } catch (err) {
      return this.t('must be hash string');
    }
  });
  app.validator.addRule('mnemonic', function(rule, value) {
    try {
      mnemonicValidate(value);
    } catch (err) {
      return this.t('must be mnemonic string');
    }
  });
};
