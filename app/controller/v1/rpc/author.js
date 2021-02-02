'use strict';

const Controller = require('egg').Controller;

class AuthorController extends Controller {
  async hasKey() {
    const { ctx } = this;
    ctx.validate({
      publicKey: {
        type: 'string',
        required: true,
      },
      keyType: {
        type: 'string',
        required: true,
      },
    }, ctx.query);
    const data = await this.service.polkadot.rpc.author.hasKey(ctx.query);
    ctx.body = data;
  }
}

module.exports = AuthorController;
