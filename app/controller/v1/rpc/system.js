'use strict';

const Controller = require('egg').Controller;

class SystemController extends Controller {
  async chain() {
    const { ctx } = this;
    const data = await this.service.polkadot.rpc.system.chain();
    ctx.body = data;
  }
  async chainType() {
    const { ctx } = this;
    const data = await this.service.polkadot.rpc.system.chainType();
    ctx.body = data;
  }
  async health() {
    const { ctx } = this;
    const data = await this.service.polkadot.rpc.system.health();
    ctx.body = data;
  }
  async name() {
    const { ctx } = this;
    const data = await this.service.polkadot.rpc.system.name();
    ctx.body = data;
  }
  async networkState() {
    const { ctx } = this;
    const data = await this.service.polkadot.rpc.system.networkState();
    ctx.body = data;
  }
  async nodeRoles() {
    const { ctx } = this;
    const data = await this.service.polkadot.rpc.system.nodeRoles();
    ctx.body = data;
  }
  async peers() {
    const { ctx } = this;
    const data = await this.service.polkadot.rpc.system.peers();
    ctx.body = data;
  }
  async properties() {
    const { ctx } = this;
    const data = await this.service.polkadot.rpc.system.properties();
    ctx.body = data;
  }
  async syncState() {
    const { ctx } = this;
    const data = await this.service.polkadot.rpc.system.syncState();
    ctx.body = data;
  }
  async version() {
    const { ctx } = this;
    const data = await this.service.polkadot.rpc.system.version();
    ctx.body = data;
  }
}

module.exports = SystemController;
