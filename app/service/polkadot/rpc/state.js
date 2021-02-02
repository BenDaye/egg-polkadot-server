'use strict';

const Service = require('egg').Service;

class StateService extends Service {
  async call(params) {
    const call = await this.app.polkadot.rpc.state.call(...params);
    return call.toHuman();
  }
  async getChildKeys(params) {
    const getChildKeys = await this.app.polkadot.rpc.state.getChildKeys(...params);
    return getChildKeys.toHuman();
  }
  async getChildStorage(params) {
    const getChildStorage = await this.app.polkadot.rpc.state.getChildStorage(...params);
    return getChildStorage.toHuman();
  }
  async getChildStorageHash(params) {
    const getChildStorageHash = await this.app.polkadot.rpc.state.getChildStorageHash(...params);
    return getChildStorageHash.toHuman();
  }
  async getChildStorageSize(params) {
    const getChildStorageSize = await this.app.polkadot.rpc.state.getChildStorageSize(...params);
    return getChildStorageSize.toHuman();
  }
  async getKeys(params) {
    const getKeys = await this.app.polkadot.rpc.state.getKeys(...params);
    return getKeys.toHuman();
  }
  async getKeysPaged(params) {
    const getKeysPaged = await this.app.polkadot.rpc.state.getKeysPaged(...params);
    return getKeysPaged.toHuman();
  }
  async getMetadata({ at }) {
    const getMetadata = at ? await this.app.polkadot.rpc.state.getMetadata(at) : await this.app.polkadot.rpc.state.getMetadata();
    return getMetadata;
  }
  async getPairs(params) {
    const getPairs = await this.app.polkadot.rpc.state.getPairs(...params);
    return getPairs.toHuman();
  }
  async getReadProof(params) {
    const getReadProof = await this.app.polkadot.rpc.state.getReadProof(...params);
    return getReadProof.toHuman();
  }
  async getRuntimeVersion(params) {
    const getRuntimeVersion = await this.app.polkadot.rpc.state.getRuntimeVersion(...params);
    return getRuntimeVersion.toHuman();
  }
  async getStorage(params) {
    const getStorage = await this.app.polkadot.rpc.state.getStorage(...params);
    return getStorage.toHuman();
  }
  async getStorageHash(params) {
    const getStorageHash = await this.app.polkadot.rpc.state.getStorageHash(...params);
    return getStorageHash.toHuman();
  }
  async getStorageSize(params) {
    const getStorageSize = await this.app.polkadot.rpc.state.getStorageSize(...params);
    return getStorageSize.toHuman();
  }
  async queryStorage(params) {
    const queryStorage = await this.app.polkadot.rpc.state.queryStorage(...params);
    return queryStorage.toHuman();
  }
  async queryStorageAt(params) {
    const queryStorageAt = await this.app.polkadot.rpc.state.queryStorageAt(...params);
    return queryStorageAt.toHuman();
  }
  async subscribeRuntimeVersion(params) {
    const subscribeRuntimeVersion = await this.app.polkadot.rpc.state.subscribeRuntimeVersion(...params);
    return subscribeRuntimeVersion.toHuman();
  }
  async subscribeStorage(params) {
    const subscribeStorage = await this.app.polkadot.rpc.state.subscribeStorage(...params);
    return subscribeStorage.toHuman();
  }
}

module.exports = StateService;
