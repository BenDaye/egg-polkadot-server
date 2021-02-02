'use strict';

const Service = require('egg').Service;

class AccountService extends Service {
  mnemonicGenerate() {
    return this.ctx.helper.mnemonicGenerate();
  }
  async createFromMnemonic({ mnemonic, derivationPath = '', meta = {}, keypairType = 'sr25519' }) {
    return await this.ctx.helper.createFromMnemonic({ mnemonic, derivationPath, meta, keypairType });
  }
  seedGenerate() {
    return this.ctx.helper.seedGenerate();
  }
}

module.exports = AccountService;
