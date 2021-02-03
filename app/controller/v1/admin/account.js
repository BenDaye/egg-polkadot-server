'use strict';

const BaseController = require('../../../core/base_controller');
class AccountController extends BaseController {
  async create() {
    try {
      const mnemonic = await this.service.account.mnemonicGenerate();
      const keyringPairJson = await this.service.account.createFromMnemonic({ mnemonic });
      this.success({
        mnemonic,
        keyringPairJson,
      });
    } catch (err) {
      this.error(err);
    }
  }
}

module.exports = AccountController;
