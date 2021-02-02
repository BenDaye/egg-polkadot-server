'use strict';

const Controller = require('egg').Controller;

class AccountController extends Controller {
  async create() {
    const { ctx } = this;
    const mnemonic = await this.service.account.mnemonicGenerate();
    const keyringPairJson = await this.service.account.createFromMnemonic({ mnemonic });
    ctx.body = {
      data: {
        mnemonic,
        keyringPairJson,
      },
    };
  }
}

module.exports = AccountController;
