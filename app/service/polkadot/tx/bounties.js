'use strict';

const Service = require('egg').Service;

class BountiesService extends Service {
  async acceptCurator(bountyId) {
    const acceptCurator = await this.app.polkadot.tx.bounties.acceptCurator(bountyId);
    return acceptCurator.toHuman();
  }
  async approveBounty(bountyId) {
    const approveBounty = await this.app.polkadot.tx.bounties.approveBounty(bountyId);
    return approveBounty.toHuman();
  }
  async awardBounty(bountyId, beneficiary) {
    const awardBounty = await this.app.polkadot.tx.bounties.awardBounty(bountyId, beneficiary);
    return awardBounty.toHuman();
  }
  async claimBounty(bountyId) {
    const claimBounty = await this.app.polkadot.tx.bounties.claimBounty(bountyId);
    return claimBounty.toHuman();
  }
  async closeBounty(bountyId) {
    const closeBounty = await this.app.polkadot.tx.bounties.closeBounty(bountyId);
    return closeBounty.toHuman();
  }
  async extendBountyExpiry(bountyId, remark) {
    const extendBountyExpiry = await this.app.polkadot.tx.bounties.extendBountyExpiry(bountyId, remark);
    return extendBountyExpiry.toHuman();
  }
  async proposeBounty(value, description) {
    const proposeBounty = await this.app.polkadot.tx.bounties.proposeBounty(value, description);
    return proposeBounty.toHuman();
  }
  async proposeCurator(bountyId, curator, fee) {
    const proposeCurator = await this.app.polkadot.tx.bounties.proposeCurator(bountyId, curator, fee);
    return proposeCurator.toHuman();
  }
  async unassignCurator(bountyId) {
    const unassignCurator = await this.app.polkadot.tx.bounties.unassignCurator(bountyId);
    return unassignCurator.toHuman();
  }
}

module.exports = BountiesService;
