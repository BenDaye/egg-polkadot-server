'use strict';

const BaseController = require('../../../core/base_controller');

class SystemController extends BaseController {
  async chain() {
    try {
      const data = await this.service.polkadot.rpc.system.chain();
      this.success(data);
    } catch (err) {
      this.error(err);
    }
  }
  async chainType() {
    try {
      const data = await this.service.polkadot.rpc.system.chainType();
      this.success(data);
    } catch (err) {
      this.error(err);
    }
  }
  async health() {
    try {
      const data = await this.service.polkadot.rpc.system.health();
      this.success(data);
    } catch (err) {
      this.error(err);
    }
  }
  async name() {
    try {
      const data = await this.service.polkadot.rpc.system.name();
      this.success(data);
    } catch (err) {
      this.error(err);
    }
  }
  async networkState() {
    try {
      const data = await this.service.polkadot.rpc.system.networkState();
      this.success(data);
    } catch (err) {
      this.error(err);
    }
  }
  async nodeRoles() {
    try {
      const data = await this.service.polkadot.rpc.system.nodeRoles();
      this.success(data);
    } catch (err) {
      this.error(err);
    }
  }
  async peers() {
    try {
      const data = await this.service.polkadot.rpc.system.peers();
      this.success(data);
    } catch (err) {
      this.error(err);
    }
  }
  async properties() {
    try {
      const data = await this.service.polkadot.rpc.system.properties();
      this.success(data);
    } catch (err) {
      this.error(err);
    }
  }
  async syncState() {
    try {
      const data = await this.service.polkadot.rpc.system.syncState();
      this.success(data);
    } catch (err) {
      this.error(err);
    }
  }
  async version() {
    try {
      const data = await this.service.polkadot.rpc.system.version();
      this.success(data);
    } catch (err) {
      this.error(err);
    }
  }
}

module.exports = SystemController;
