'use strict';

const { mnemonicValidate } = require('@polkadot/util-crypto');
const { decodeAddress, encodeAddress } = require('@polkadot/keyring');
const { hexToU8a, isHex } = require('@polkadot/util');
class AppBootHook {
  constructor(app) {
    this.app = app;
  }

  async didReady() {
    this.app.validator.addRule('hash', function(rule, value) {
      try {
        if (isHex(value)) {
          throw new TypeError('must be hash string');
        }
      } catch (err) {
        return this.t(err.message || err);
      }
    });
    this.app.validator.addRule('mnemonic', function(rule, value) {
      try {
        if (!mnemonicValidate(value)) {
          throw new TypeError('must be mnemonic string');
        }
      } catch (err) {
        return this.t(err.message || err);
      }
    });
    this.app.validator.addRule('address', (rule, value) => {
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
  }
}

module.exports = AppBootHook;
