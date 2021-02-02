'use strict';

const Service = require('egg').Service;

class RpcService extends Service {
  async methods() {
    const methods = await this.app.polkadot.rpc.rpc.methods();
    return methods.toHuman();
  }
}

module.exports = RpcService;
