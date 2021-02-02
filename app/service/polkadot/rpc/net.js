'use strict';

const Service = require('egg').Service;

class NetService extends Service {
  async listening() {
    const listening = await this.app.polkadot.rpc.net.listening();
    return listening.toHuman();
  }
  async peerCount() {
    const peerCount = await this.app.polkadot.rpc.net.peerCount();
    return peerCount.toHuman();
  }
  async version() {
    const version = await this.app.polkadot.rpc.net.version();
    return version.toHuman();
  }
}

module.exports = NetService;
