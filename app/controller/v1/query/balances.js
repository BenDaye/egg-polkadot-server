'use strict';

const Controller = require('egg').Controller;

class BalancesController extends Controller {
  async account() {
    const { ctx } = this;
    ctx.validate({ account: { type: 'string', required: true } }, { account: ctx.params.account });
    const data = await this.service.polkadot.query.balances.account(ctx.params.account);
    ctx.body = data;
  }
  async locks() {
    const { ctx } = this;
    ctx.validate({ account: { type: 'string', required: true } }, { account: ctx.params.account });
    const data = await this.service.polkadot.query.balances.locks(ctx.params.account);
    ctx.body = data;
  }
  async storageVersion() {
    const { ctx } = this;
    const data = await this.service.polkadot.query.balances.storageVersion();
    ctx.body = data;
  }
  async totalIssuance() {
    const { ctx } = this;
    const data = await this.service.polkadot.query.balances.totalIssuance();
    ctx.body = data;
  }
}

module.exports = BalancesController;
