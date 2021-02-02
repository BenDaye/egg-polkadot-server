'use strict';

const Service = require('egg').Service;

class ContractsService extends Service {
  async call({ callRequest, at }) {
    const call = await this.app.polkadot.rpc.contracts.call(callRequest, at);
    return call.toHuman();
  }
  async getStorage({ address, key, at }) {
    const getStorage = await this.app.polkadot.rpc.contracts.getStorage(address, key, at);
    return getStorage.toHuman();
  }
  async rentProjection({ address, at }) {
    const rentProjection = await this.app.polkadot.rpc.contracts.rentProjection(address, at);
    return rentProjection.toHuman();
  }
}

module.exports = ContractsService;
