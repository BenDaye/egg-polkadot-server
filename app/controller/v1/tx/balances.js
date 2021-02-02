'use strict';

const Controller = require('egg').Controller;

class BalancesController extends Controller {
  async forceTransfer(source, dest, value) {
    const { ctx } = this;
    const forceTransfer = await this.service.polkadot.tx.balances.forceTransfer(source, dest, value);
    ctx.body = {
      forceTransfer,
    };
  }
}

module.exports = BalancesController;
