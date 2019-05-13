'use strict';

const Controller = require('egg').Controller;

class LoignController extends Controller {
  async index() {
    const { ctx } = this;
    await ctx.render("loign.html",{
        Sign_out:"退出登陆",
    })
    
  }
}

module.exports = LoignController;
