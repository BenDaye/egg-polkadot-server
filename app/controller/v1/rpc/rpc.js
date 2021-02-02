'use strict';

const Controller = require('egg').Controller;

class RpcController extends Controller {
  async methods() {
    const { ctx } = this;
    const data = await this.service.polkadot.rpc.rpc.methods();
    ctx.body = data;
  }
}

module.exports = RpcController;
