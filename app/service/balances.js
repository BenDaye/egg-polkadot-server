'use strict';

const Service = require('egg').Service;

class BalancesService extends Service {
  async transfer({ signer: uri, dest, value }) {
    const extrinsic = this.app.polkadot.tx.balances.transfer(dest, value);
    const signer = await this.ctx.helper.addFromUri({ uri });
    const paymentInfo = await extrinsic.paymentInfo(signer);
    const hash = await extrinsic.signAndSend(signer);
    return { paymentInfo, hash };
  }
  async transferKeepAlive({ signer: uri, dest, value }) {
    const extrinsic = this.app.polkadot.tx.balances.transferKeepAlive(dest, value);
    const signer = await this.ctx.helper.addFromUri({ uri });
    const paymentInfo = await extrinsic.paymentInfo(signer);
    const hash = await extrinsic.signAndSend(signer);
    return { paymentInfo, hash };
  }
  // async test() {
  //   const extrinsic = this.app.polkadot.tx.balances.transferKeepAlive('5Gk27Zd6N41QndMo39BBdAC7Wt6Hj6ZsNrroanFb4F98q4Tg', 10000000);
  //   const signer = await this.ctx.helper.keypairAlice();
  //   const paymentInfo = await extrinsic.paymentInfo(signer);
  //   const hash = await extrinsic.signAndSend(signer);
  //   return { paymentInfo: paymentInfo.toHuman(), hash: hash.toHuman() };
  // }
}

module.exports = BalancesService;
