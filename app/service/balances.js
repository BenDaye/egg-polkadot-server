'use strict';

const Service = require('egg').Service;
const { createTypeUnsafe } = require('@polkadot/types');

class BalancesService extends Service {
  async transfer({ signer, dest, value }) {
    const extrinsic = this.app.polkadot.tx.balances.transfer(dest, value);
    const paymentInfo = await extrinsic.paymentInfo(signer);
    const hash = await extrinsic.signAndSend(signer);
    return { paymentInfo, hash };
  }
  async transferKeepAlive({ signer, dest, value }) {
    const extrinsic = this.app.polkadot.tx.balances.transferKeepAlive(dest, value);
    const paymentInfo = await extrinsic.paymentInfo(signer);
    const hash = await extrinsic.signAndSend(signer);
    return { paymentInfo, hash };
  }
  async queryAll(address) {
    const balances = [];
    const nativeBalanceAll = await this.service.polkadot.derive.balances.all(address);
    const properties = await this.ctx.app.polkadot.rpc.system.properties();
    const nativeBalance = {
      key: '',
      account: address,
      assetId: '',
      type: 'native',
      symbol: properties.get('tokenSymbol').toJSON()[0],
      decimals: properties.get('tokenDecimals').toJSON()[0],
      _id: '',
      balance: nativeBalanceAll.availableBalance,
    };
    balances.push(nativeBalance);

    const { data: { success, result: assets, message } } = await this.ctx.curl('http://221.122.102.163:4000/potential_balances', {
      data: {
        account: address,
      },
      dataType: 'json',
    });
    if (!success) {
      throw new Error(message || 'Can not get potential balances');
    }
    if (!assets || !assets.length) {
      return balances;
    }
    const potentialBalances = [];
    const registry = this.app.polkadot.registry;
    for await (const asset of assets) {
      const key = createTypeUnsafe(registry, '(Hash, AccountId)', [[ asset.assetId, address ]]);
      const res = await this.app.polkadot.query.urc10Module.balances(key.toHex());
      // const balance = await this.ctx.helper.formatBalance(res.toString(), {
      //   decimals: asset.decimals,
      //   withUnit: false,
      //   withSiFull: true,
      // });
      // const balance = this.ctx.helper.formatNumber(res);
      const balance = res.toString();
      potentialBalances.push({
        ...asset,
        balance,
      });
    }
    return [ ...balances, ...potentialBalances ];
  }
}

module.exports = BalancesService;
