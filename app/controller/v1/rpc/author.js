'use strict';

const BaseController = require('../../../core/base_controller');
class AuthorController extends BaseController {
  async hasKey() {
    try {
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
      this.success(data);
    } catch (err) {
      this.error(err);
    }
  }
}

module.exports = AuthorController;
