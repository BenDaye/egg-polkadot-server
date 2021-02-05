'use strict';

const { mnemonicValidate } = require('@polkadot/util-crypto');
const { decodeAddress, encodeAddress } = require('@polkadot/keyring');
const { hexToU8a, isHex } = require('@polkadot/util');

module.exports = app => {
  app.validator.addRule('hash', function(rule, value) {
    try {
      if (isHex(value)) {
        throw new TypeError('must be hash string');
      }
    } catch (err) {
      return this.t(err.message || err);
    }
  });
  app.validator.addRule('mnemonic', function(rule, value) {
    try {
      if (!mnemonicValidate(value)) {
        throw new TypeError('must be mnemonic string');
      }
    } catch (err) {
      return this.t(err.message || err);
    }
  });
  app.validator.addRule('address', (rule, value) => {
    try {
      encodeAddress(
        isHex(value)
          ? hexToU8a(value)
          : decodeAddress(value)
      );
    } catch (err) {
      return this.t(err.message || err);
    }
  });
};
