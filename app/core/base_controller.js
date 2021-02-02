'use strict';

const { Controller } = require('egg');

class BaseController extends Controller {
  success(data) {
    this.ctx.body = {
      status: 0,
      message: '',
      data,
    };
  }

  error(err) {
    err = err.message || err || 'Internal Server Error';
    // this.ctx.throw(500, err);
    this.ctx.body = {
      status: 1,
      message: err,
      data: '',
    };
  }

  notFound(msg) {
    msg = msg || 'not found';
    this.ctx.throw(404, msg);
  }
}

module.exports = BaseController;
