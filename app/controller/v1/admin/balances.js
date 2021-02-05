'use strict';

const BaseController = require('../../../core/base_controller');
const transferRule = require('../../../model/rule').transferRule;
class BalancesController extends BaseController {
  async transfer() {
    try {
      const { ctx } = this;
      ctx.validate(transferRule);
      const { signer, dest, value } = ctx.request.body;
      const _signer = await this.service.account.createFromSigner(signer);
      const data = await this.service.balances.transfer({ signer: _signer, dest, value });
      this.success(data);
    } catch (err) {
      this.error(err);
    }
  }
  async transferKeepAlive() {
    try {
      const { ctx } = this;
      ctx.validate(transferRule);
      const { signer, dest, value } = ctx.request.body;
      const _signer = await this.service.account.createFromSigner(signer);
      const data = await this.service.balances.transferKeepAlive({ signer: _signer, dest, value });
      this.success(data);
    } catch (err) {
      this.error(err);
    }
  }
  async queryAll() {
    try {
      this.ctx.validate({
        address: {
          type: 'address',
        },
      }, this.ctx.params);
      const data = await this.service.balances.queryAll(this.ctx.params.address);
      this.success(data);
    } catch (err) {
      this.error(err);
    }
  }
}

module.exports = BalancesController;
