'use strict';

const BaseController = require('../../../core/base_controller');

class BalancesController extends BaseController {
  async account() {
    try {
      const { ctx } = this;
      ctx.validate({ account: { type: 'string', required: true } }, { account: ctx.params.account });
      const data = await this.service.polkadot.query.balances.account(ctx.params.account);
      this.success(data);
    } catch (err) {
      this.error(err);
    }
  }
  async locks() {
    try {
      const { ctx } = this;
      ctx.validate({ account: { type: 'string', required: true } }, { account: ctx.params.account });
      const data = await this.service.polkadot.query.balances.locks(ctx.params.account);
      this.success(data);
    } catch (err) {
      this.error(err);
    }
  }
  async storageVersion() {
    try {
      const data = await this.service.polkadot.query.balances.storageVersion();
      this.success(data);
    } catch (err) {
      this.error(err);
    }
  }
  async totalIssuance() {
    try {
      const data = await this.service.polkadot.query.balances.totalIssuance();
      this.success(data);
    } catch (err) {
      this.error(err);
    }
  }
}

module.exports = BalancesController;
