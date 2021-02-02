'use strict';

const Service = require('egg').Service;

class AuthorService extends Service {
  async hasKey({ publicKey, keyType }) {
    const hasKey = await this.app.polkadot.rpc.author.hasKey(publicKey, keyType);
    return hasKey.toHuman();
  }
  async hasSessionKeys(sessionKeys) {
    const hasSessionKeys = await this.app.polkadot.rpc.author.hasSessionKeys(sessionKeys);
    return hasSessionKeys.toHuman();
  }
  async insertKey(keyType, suri, publicKey) {
    const insertKey = await this.app.polkadot.rpc.author.insertKey(keyType, suri, publicKey);
    return insertKey.toHuman();
  }
  async pendingExtrinsics() {
    const pendingExtrinsics = await this.app.polkadot.rpc.author.pendingExtrinsics();
    return pendingExtrinsics.map(v => v.toHuman());
  }
  async removeExtrinsic(bytesOrHash) {
    const removeExtrinsic = await this.app.polkadot.rpc.author.removeExtrinsic(bytesOrHash);
    return removeExtrinsic.map(v => v.toHuman());
  }
  async rotateKeys() {
    const rotateKeys = await this.app.polkadot.rpc.author.rotateKeys();
    return rotateKeys.toHuman();
  }
  async submitAndWatchExtrinsic(extrinsic) {
    const submitAndWatchExtrinsic = await this.app.polkadot.rpc.author.submitAndWatchExtrinsic(extrinsic);
    return submitAndWatchExtrinsic.toHuman();
  }
  async submitExtrinsic(extrinsic) {
    const submitExtrinsic = await this.app.polkadot.rpc.author.submitExtrinsic(extrinsic);
    return submitExtrinsic.toHuman();
  }
}

module.exports = AuthorService;
