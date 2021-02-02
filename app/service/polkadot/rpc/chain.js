'use strict';

const Service = require('egg').Service;

class ChainService extends Service {
  async getBlock(hash = undefined) {
    const getBlock = await this.app.polkadot.rpc.chain.getBlock(hash);
    return getBlock.toHuman();
  }
  async getBlockHash(blockNumber = undefined) {
    const getBlockHash = await this.app.polkadot.rpc.chain.getBlockHash(blockNumber);
    return getBlockHash.toHuman();
  }
  async getFinalizedHead() {
    const getFinalizedHead = await this.app.polkadot.rpc.chain.getFinalizedHead();
    return getFinalizedHead.toHuman();
  }
  async getHeader(hash = undefined) {
    const getHeader = await this.app.polkadot.rpc.chain.getHeader(hash);
    return getHeader.toHuman();
  }
  async subscribeAllHeads() {
    const subscribeAllHeads = await this.app.polkadot.rpc.chain.subscribeAllHeads();
    return subscribeAllHeads.toHuman();
  }
  async subscribeFinalizedHeads() {
    const subscribeFinalizedHeads = await this.app.polkadot.rpc.chain.subscribeFinalizedHeads();
    return subscribeFinalizedHeads.toHuman();
  }
  async subscribeNewHeads() {
    const subscribeNewHeads = await this.app.polkadot.rpc.chain.subscribeNewHeads();
    return subscribeNewHeads.toHuman();
  }
}

module.exports = ChainService;
