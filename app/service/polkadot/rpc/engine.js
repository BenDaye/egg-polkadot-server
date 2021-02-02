'use strict';

const Service = require('egg').Service;

class EngineService extends Service {
  async createBlock({ createEmpty, finalize, parentHash }) {
    const createBlock = await this.app.polkadot.rpc.engine.createBlock(createEmpty, finalize, parentHash);
    return createBlock.toHuman();
  }
  async finalizeBlock({ hash, justification }) {
    const finalizeBlock = await this.app.polkadot.rpc.engine.finalizeBlock(hash, justification);
    return finalizeBlock.toHuman();
  }
}

module.exports = EngineService;
