'use strict';

const Service = require('egg').Service;

class BalancesService extends Service {
  async all(address) {
    const data = await this.app.polkadot.derive.balances.all(address);
    const {
      accountId,
      accountNonce,
      freeBalance,
      frozenFee,
      frozenMisc,
      reservedBalance,
      isVesting,
      lockedBalance,
      lockedBreakdown = [],
      availableBalance,
      votingBalance,
      vestedBalance,
      vestedClaimable,
      vestingEndBlock,
      vestingLocked,
      vestingPerBlock,
      vestingTotal,
    } = data;
    return {
      accountId: accountId.toString(),
      accountNonce: accountNonce.toString(),
      // freeBalance: this.ctx.helper.formatNumber(freeBalance), // freeBalance.toHuman(),
      freeBalance: freeBalance.toString(),
      frozenFee: frozenFee.toString(),
      frozenMisc: frozenMisc.toString(),
      reservedBalance: reservedBalance.toString(),
      isVesting,
      lockedBalance: lockedBalance.toString(),
      lockedBreakdown: lockedBreakdown.map(v => v.toString()),
      availableBalance: availableBalance.toString(),
      votingBalance: votingBalance.toString(),
      vestedBalance: vestedBalance.toString(),
      vestedClaimable: vestedClaimable.toString(),
      vestingEndBlock: vestingEndBlock.toString(),
      vestingLocked: vestingLocked.toString(),
      vestingPerBlock: vestingPerBlock.toString(),
      vestingTotal: vestingTotal.toString(),
    };
  }
  async votingBalances(addresses) {
    const data = await this.app.polkadot.derive.balances.votingBalances(addresses);
    if (!data || !data.length) {
      return [];
    }
    return data.map(v => {
      const {
        accountId,
        accountNonce,
        freeBalance,
        frozenFee,
        frozenMisc,
        reservedBalance,
        votingBalance,
      } = v;
      return {
        accountId: accountId.toString(),
        accountNonce: accountNonce.toString(),
        // freeBalance: this.ctx.helper.formatNumber(freeBalance), // freeBalance.toHuman(),
        freeBalance: freeBalance.toString(),
        frozenFee: frozenFee.toString(),
        frozenMisc: frozenMisc.toString(),
        reservedBalance: reservedBalance.toString(),
        votingBalance: votingBalance.toString(),
      };
    });
  }
}

module.exports = BalancesService;
