'use strict';

const Controller = require('egg').Controller;

class ChainController extends Controller {
  async getBlock() {
    const { ctx } = this;
    ctx.validate({ hash: { type: 'hash', required: true } }, { hash: ctx.params.hash });
    const data = await this.service.polkadot.rpc.chain.getBlock(ctx.params.hash);
    ctx.body = data;
  }
  async getBlockHash() {
    const { ctx } = this;
    ctx.validate({ blockNumber: { type: 'int', required: true } }, { blockNumber: Number(ctx.params.blockNumber) });
    const data = await this.service.polkadot.rpc.chain.getBlockHash(ctx.params.blockNumber);
    ctx.body = data;
  }
  async getFinalizedHead() {
    const { ctx } = this;
    const data = await this.service.polkadot.rpc.chain.getFinalizedHead();
    ctx.body = data;
  }
  async getHeader() {
    const { ctx } = this;
    ctx.validate({ hash: { type: 'hash', required: true } }, { hash: ctx.params.hash });
    const data = await this.service.polkadot.rpc.chain.getHeader(ctx.params.hash);
    ctx.body = data;
  }
}

module.exports = ChainController;
