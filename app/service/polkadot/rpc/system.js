'use strict';

const Service = require('egg').Service;

class SystemService extends Service {
  async accountNextIndex(accountId) {
    const accountNextIndex = await this.app.polkadot.rpc.system.accountNextIndex(accountId);
    return accountNextIndex.toHuman();
  }
  async addLogFilter(directives) {
    const addLogFilter = await this.app.polkadot.rpc.system.addLogFilter(directives);
    return addLogFilter.toHuman();
  }
  async addReservedPeer(peer) {
    const addReservedPeer = await this.app.polkadot.rpc.system.addReservedPeer(peer);
    return addReservedPeer.toHuman();
  }
  async chain() {
    const chain = await this.app.polkadot.rpc.system.chain();
    return chain.toHuman();
  }
  async chainType() {
    const chainType = await this.app.polkadot.rpc.system.chainType();
    return chainType.toHuman();
  }
  async dryRun(extrinsic) {
    const dryRun = await this.app.polkadot.rpc.system.dryRun(extrinsic);
    return dryRun.toHuman();
  }
  async dryRunAt(extrinsic, at) {
    const dryRun = await this.app.polkadot.rpc.system.dryRun(extrinsic, at);
    return dryRun.toHuman();
  }
  async health() {
    const health = await this.app.polkadot.rpc.system.health();
    return health.toHuman();
  }
  async localListenAddresses() {
    const localListenAddresses = await this.app.polkadot.rpc.system.localListenAddresses();
    return localListenAddresses.map(v => v.toHuman());
  }
  async localPeerId() {
    const localPeerId = await this.app.polkadot.rpc.system.localPeerId();
    return localPeerId.toHuman();
  }
  async name() {
    const name = await this.app.polkadot.rpc.system.name();
    return name.toHuman();
  }
  async networkState() {
    const networkState = await this.app.polkadot.rpc.system.networkState();
    return networkState.toHuman();
  }
  async nodeRoles() {
    const nodeRoles = await this.app.polkadot.rpc.system.nodeRoles();
    return nodeRoles.map(v => v.toHuman());
  }
  async peers() {
    const peers = await this.app.polkadot.rpc.system.peers();
    return peers.map(v => v.toHuman());
  }
  async properties() {
    const properties = await this.app.polkadot.rpc.system.properties();
    return properties.toHuman();
  }
  async removeReservedPeer(peerId) {
    const removeReservedPeer = await this.app.polkadot.rpc.system.removeReservedPeer(peerId);
    return removeReservedPeer.toHuman();
  }
  async resetLogFilter() {
    const resetLogFilter = await this.app.polkadot.rpc.system.resetLogFilter();
    return resetLogFilter.toHuman();
  }
  async syncState() {
    const syncState = await this.app.polkadot.rpc.system.syncState();
    return syncState.toHuman();
  }
  async version() {
    const version = await this.app.polkadot.rpc.system.version();
    return version.toHuman();
  }
}

module.exports = SystemService;
