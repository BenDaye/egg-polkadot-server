'use strict';

const BaseController = require('../../../core/base_controller');
class BalancesController extends BaseController {
  async forceTransfer(source, dest, value) {
    try {
      const data = await this.service.polkadot.tx.balances.forceTransfer(source, dest, value);
      this.success(data);
    } catch (err) {
      this.error(err);
    }
  }
}

module.exports = BalancesController;
