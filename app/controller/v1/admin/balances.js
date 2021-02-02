'use strict';

// const Controller = require('egg').Controller;
const BaseController = require('../../../core/base_controller');

class BalancesController extends BaseController {
  async transfer() {
    try {
      const { ctx } = this;
      ctx.validate({
        signer: {
          type: 'string',
          required: true,
        },
        dest: {
          type: 'string',
          required: true,
        },
        value: {
          type: 'number',
          required: true,
        },
      });
      const data = await this.service.balances.transfer(ctx.request.body);
      this.success(data);
    } catch (err) {
      this.logger.error(err);
      this.error(err);
    }
  }
  async transferKeepAlive() {
    try {
      const { ctx } = this;
      ctx.validate({
        signer: {
          type: 'string',
          required: true,
        },
        dest: {
          type: 'string',
          required: true,
        },
        value: {
          type: 'number',
          required: true,
        },
      });
      const data = await this.service.balances.transferKeepAlive(ctx.request.body);
      this.success(data);
    } catch (err) {
      this.logger.error(err);
      this.error(err);
    }
  }
}

module.exports = BalancesController;
