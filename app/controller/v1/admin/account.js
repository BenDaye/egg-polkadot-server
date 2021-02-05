'use strict';

const BaseController = require('../../../core/base_controller');
class AccountController extends BaseController {
  async create() {
    try {
      const createAccountRule = {
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
      this.ctx.validate(createAccountRule);

      const { mnemonicSeed, rawSeed, derivationPath, meta, keypairType } = this.ctx.request.body;
      if (mnemonicSeed && rawSeed) {
        this.error(new TypeError('Do not provide both [mnemonicSeed] and [rawSeed]'));
        return;
      } else if (mnemonicSeed) {
        const _rawSeed = this.service.account.mnemonicToMiniSecret(mnemonicSeed);
        const keyringPair = await this.service.account.createFromUri({ uri: `${mnemonicSeed}${derivationPath}`, meta, keypairType });
        this.success({
          mnemonicSeed,
          rawSeed: _rawSeed,
          address: keyringPair.address,
          rawData: keyringPair.toJson(),
        });
      } else if (rawSeed) {
        const keyringPair = await this.service.account.createFromUri({ uri: `${rawSeed}${derivationPath}`, meta, keypairType });
        this.success({
          mnemonicSeed,
          rawSeed,
          address: keyringPair.address,
          rawData: keyringPair.toJson(),
        });
      } else {
        const _mnemonicSeed = this.service.account.mnemonicGenerate();
        const _rawSeed = this.service.account.mnemonicToMiniSecret(_mnemonicSeed);
        const keyringPair = await this.service.account.createFromUri({ uri: `${_mnemonicSeed}${derivationPath}`, meta, keypairType });
        this.success({
          mnemonicSeed: _mnemonicSeed,
          rawSeed: _rawSeed,
          address: keyringPair.address,
          rawData: keyringPair.toJson(),
        });
      }
    } catch (err) {
      this.error(err);
    }
  }
}

module.exports = AccountController;
