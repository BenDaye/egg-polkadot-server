'use strict';

const BaseController = require('../../../core/base_controller');

class AccountsController extends BaseController {
  async info() {
    try {
      const { ctx } = this;
      ctx.validate({ address: { type: 'string', required: true } }, ctx.params);
      const data = await this.service.polkadot.derive.accounts.info(ctx.params.address);
      this.success(data);
    } catch (err) {
      this.error(err);
    }
  }
  async indexes() {
    try {
      const data = await this.service.polkadot.derive.accounts.indexes();
      this.success(data);
    } catch (err) {
      this.error(err);
    }
  }
}

module.exports = AccountsController;
