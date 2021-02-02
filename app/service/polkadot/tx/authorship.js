'use strict';

const Service = require('egg').Service;

class AuthorshipService extends Service {
  async setUncles(newUncles) {
    const setUncles = await this.app.polkadot.tx.authorship.setUncles(newUncles);
    return setUncles.toHuman();
  }
}

module.exports = AuthorshipService;
