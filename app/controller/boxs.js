'use strict';

const Controller = require('egg').Controller;

class BoxsController extends Controller {
  async index() {
    const{ ctx } =this;
    await ctx.render("boxs.html",{
        word:"米克保险箱",

    })
  }
}

module.exports = BoxsController;
