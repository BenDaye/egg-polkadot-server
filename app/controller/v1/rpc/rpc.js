'use strict';

const BaseController = require('../../../core/base_controller');
class RpcController extends BaseController {
  async methods() {
    try {
      const data = await this.service.polkadot.rpc.rpc.methods();
      this.success(data);
    } catch (err) {
      this.error(err);
    }
  }
}

module.exports = RpcController;
