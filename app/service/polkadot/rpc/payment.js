'use strict';

const Service = require('egg').Service;

class PaymentService extends Service {
  async queryFeeDetails(extrinsic) {
    const queryFeeDetails = await this.app.polkadot.rpc.payment.queryFeeDetails(extrinsic);
    return queryFeeDetails.toHuman();
  }
  async queryFeeDetailsAt(extrinsic, at) {
    const queryFeeDetails = await this.app.polkadot.rpc.payment.queryFeeDetails(extrinsic, at);
    return queryFeeDetails.toHuman();
  }
  async queryInfo(extrinsic) {
    const queryInfo = await this.app.polkadot.rpc.payment.queryInfo(extrinsic);
    return queryInfo.toHuman();
  }
  async queryInfoAt(extrinsic, at) {
    const queryInfo = await this.app.polkadot.rpc.payment.queryInfo(extrinsic, at);
    return queryInfo.toHuman();
  }
}

module.exports = PaymentService;
