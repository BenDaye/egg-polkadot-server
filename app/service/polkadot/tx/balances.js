'use strict';

const Service = require('egg').Service;

class BalancesService extends Service {
  async forceTransfer(source, dest, value) {
    const forceTransfer = await this.app.polkadot.tx.balances.forceTransfer(source, dest, value);
    return forceTransfer.toHuman();
  }
  async setBalance(who, newFree, newReserved) {
    const setBalance = await this.app.polkadot.tx.balances.setBalance(who, newFree, newReserved);
    return setBalance.toHuman();
  }
  async transfer(dest, value) {
    const transfer = await this.app.polkadot.tx.balances.transfer(dest, value);
    return transfer.toHuman();
  }
  async transferKeepAlive(dest, value) {
    const transferKeepAlive = await this.app.polkadot.tx.balances.transferKeepAlive(dest, value);
    return transferKeepAlive.toHuman();
  }
}

module.exports = BalancesService;
