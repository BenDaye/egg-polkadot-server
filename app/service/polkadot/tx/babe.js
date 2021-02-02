'use strict';

const Service = require('egg').Service;

class BabeService extends Service {
  async reportEquivocation(equivocationProof, keyOwnerProof) {
    const reportEquivocation = await this.app.polkadot.tx.babe.reportEquivocation(equivocationProof, keyOwnerProof);
    return reportEquivocation.toHuman();
  }
  async reportEquivocationUnsigned(equivocationProof, keyOwnerProof) {
    const reportEquivocationUnsigned = await this.app.polkadot.tx.babe.reportEquivocationUnsigned(equivocationProof, keyOwnerProof);
    return reportEquivocationUnsigned.toHuman();
  }
}

module.exports = BabeService;
