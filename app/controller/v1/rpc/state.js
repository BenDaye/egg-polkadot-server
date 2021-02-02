'use strict';

const Controller = require('egg').Controller;

class StateController extends Controller {
  async getMetadata() {
    const { ctx } = this;
    const data = await this.service.polkadot.rpc.state.getMetadata(ctx.query);
    ctx.body = data;
  }
}

module.exports = StateController;
