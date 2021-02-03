'use strict';

const BaseController = require('../../../core/base_controller');

class BalancesController extends BaseController {
  async all() {
    try {
      const { ctx } = this;
      ctx.validate({ address: { type: 'string', required: true } }, ctx.params);
      const data = await this.service.polkadot.derive.balances.all(ctx.params.address);
      this.success(data);
    } catch (err) {
      this.error(err);
    }
  }
  async votingBalances() {
    try {
      const { ctx } = this;
      const data = await this.service.polkadot.derive.balances.votingBalances(ctx.queries.address);
      this.success(data);
    } catch (err) {
      this.error(err);
    }
  }
}

module.exports = BalancesController;
