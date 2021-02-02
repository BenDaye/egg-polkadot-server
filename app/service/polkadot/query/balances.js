'use strict';

const Service = require('egg').Service;

class BalancesService extends Service {
  async any(methods, ...params) {
    const any = await this.app.polkadot.query.balances[methods](...params);
    return any;
  }
  async account(arg) {
    const account = await this.app.polkadot.query.balances.account(arg);
    return account.toHuman();
  }
  async locks(arg) {
    const locks = await this.app.polkadot.query.balances.locks(arg);
    return locks.toHuman();
  }
  async storageVersion() {
    const storageVersion = await this.app.polkadot.query.balances.storageVersion();
    return storageVersion.toHuman();
  }
  async totalIssuance() {
    const totalIssuance = await this.app.polkadot.query.balances.totalIssuance();
    return totalIssuance.toHuman();
  }
}

module.exports = BalancesService;
