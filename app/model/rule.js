'use strict';

class Rule {
  constructor() {
    this.createAccountRule = {
      mnemonicSeed: {
        type: 'mnemonic',
        required: false,
        convertType: v => v.trim(),
        widelyUndefined: true,
      },
      rawSeed: {
        type: 'string?',
        convertType: v => v.trim(),
        widelyUndefined: true,
      },
      derivationPath: {
        type: 'string?',
        convertType: v => v.trim(),
        default: '',
      },
      meta: {
        type: 'object',
        default: {},
        required: false,
      },
      keypairType: {
        type: [ 'ed25519', 'sr25519', 'ecdsa', 'ethereum' ],
        default: 'sr25519',
        required: false,
      },
    };
    this.transferRule = {
      signer: {
        type: 'object',
        rule: this.createAccountRule,
      },
      dest: {
        type: 'address',
      },
      value: {
        type: 'number',
      },
    };
  }
}

const rule = new Rule();

module.exports = rule;
