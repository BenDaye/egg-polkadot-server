'use strict';

const BaseController = require('../../../core/base_controller');

class StateController extends BaseController {
  async getMetadata() {
    try {
      const { ctx } = this;
      const data = await this.service.polkadot.rpc.state.getMetadata(ctx.query);
      this.success(data);
    } catch (err) {
      this.error(err);
    }
  }
}

module.exports = StateController;
