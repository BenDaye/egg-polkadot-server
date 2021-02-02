'use strict';

const Service = require('egg').Service;

class GrandpaService extends Service {
  async proveFinality(begin, end, authoritiesSetId = undefined) {
    const proveFinality = await this.app.polkadot.rpc.grandpa.proveFinality(begin, end, authoritiesSetId);
    return proveFinality.toHuman();
  }
  async roundState() {
    const roundState = await this.app.polkadot.rpc.grandpa.roundState();
    return roundState.toHuman();
  }
  async subscribeJustifications() {
    const subscribeJustifications = await this.app.polkadot.rpc.grandpa.subscribeJustifications();
    return subscribeJustifications.toHuman();
  }
}

module.exports = GrandpaService;
