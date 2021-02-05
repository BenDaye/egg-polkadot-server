'use strict';

const Service = require('egg').Service;

class AccountService extends Service {
  mnemonicGenerate() {
    return this.ctx.helper.mnemonicGenerate();
  }
  mnemonicToMiniSecret(mnemonic) {
    return this.ctx.helper.mnemonicToMiniSecret(mnemonic);
  }
  seedGenerate() {
    return this.ctx.helper.seedGenerate();
  }
  async createFromUri({ uri, meta = {}, keypairType = 'sr25519' }) {
    return await this.ctx.helper.createFromUri({ uri, meta, keypairType });
  }
  async createFromSigner({ mnemonicSeed, rawSeed, derivationPath, meta, keypairType }) {
    if (mnemonicSeed && rawSeed) {
      throw new TypeError('Do not provide both [mnemonicSeed] and [rawSeed]');
    } else if (mnemonicSeed) {
      return await this.createFromUri({ uri: `${mnemonicSeed}${derivationPath}`, meta, keypairType });
    } else if (rawSeed) {
      return await this.createFromUri({ uri: `${rawSeed}${derivationPath}`, meta, keypairType });
    } else {
      return await this.createFromUri({ uri: `${derivationPath}`, meta, keypairType });
    }
  }
}

module.exports = AccountService;
