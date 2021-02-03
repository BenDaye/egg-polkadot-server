'use strict';

const Service = require('egg').Service;

class AccountsService extends Service {
  async info(address) {
    const data = await this.app.polkadot.derive.accounts.info(address);
    return data;
  }
  async indexes() {
    const data = await this.app.polkadot.derive.accounts.indexes();
    return data;
  }
}

module.exports = AccountsService;
