'use strict';

const BaseController = require('../../../core/base_controller');
class ChainController extends BaseController {
  async getBlock() {
    try {
      const { ctx } = this;
      ctx.validate({ hash: { type: 'hash', required: true } }, { hash: ctx.params.hash });
      const data = await this.service.polkadot.rpc.chain.getBlock(ctx.params.hash);
      this.success(data);
    } catch (err) {
      this.error(err);
    }
  }
  async getBlockHash() {
    try {
      const { ctx } = this;
      ctx.validate({ blockNumber: { type: 'int', required: true } }, { blockNumber: Number(ctx.params.blockNumber) });
      const data = await this.service.polkadot.rpc.chain.getBlockHash(ctx.params.blockNumber);
      this.success(data);
    } catch (err) {
      this.error(err);
    }
  }
  async getFinalizedHead() {
    try {
      const data = await this.service.polkadot.rpc.chain.getFinalizedHead();
      this.success(data);
    } catch (err) {
      this.error(err);
    }
  }
  async getHeader() {
    try {
      const { ctx } = this;
      ctx.validate({ hash: { type: 'hash', required: true } }, { hash: ctx.params.hash });
      const data = await this.service.polkadot.rpc.chain.getHeader(ctx.params.hash);
      this.success(data);
    } catch (err) {
      this.error(err);
    }
  }
}

module.exports = ChainController;
