'use strict';

const Service = require('egg').Service;

class ChildStateService extends Service {
  async getKeys({ childKey, prefix, at }) {
    const getKeys = await this.app.polkadot.rpc.childstate.getKeys(childKey, prefix, at);
    return getKeys.map(v => v.toHuman());
  }
  async getStorage({ childKey, key, at }) {
    const getStorage = await this.app.polkadot.rpc.childstate.getStorage(childKey, key, at);
    return getStorage.toHuman();
  }
  async getStorageHash({ childKey, key, at }) {
    const getStorageHash = await this.app.polkadot.rpc.childstate.getStorageHash(childKey, key, at);
    return getStorageHash.toHuman();
  }
  async getStorageSize({ childKey, key, at }) {
    const getStorageSize = await this.app.polkadot.rpc.childstate.getStorageSize(childKey, key, at);
    return getStorageSize.toHuman();
  }
}

module.exports = ChildStateService;
