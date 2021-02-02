'use strict';

const Service = require('egg').Service;

class BabeService extends Service {
  async epochAuthorship() {
    const epochAuthorship = await this.app.polkadot.rpc.babe.epochAuthorship();
    return epochAuthorship.toHuman();
  }
}

module.exports = BabeService;
