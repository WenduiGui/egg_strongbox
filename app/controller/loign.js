'use strict';

const Controller = require('egg').Controller;

class LoignController extends Controller {
  async index() {
    const { ctx } = this;
    await ctx.render("loign.html",{
      span:"退出登录",
      spanTwo:"大风起兮",
      MyList:[
          {num:"通知消息"},
          {num:"修改密码"},
      ],
      ListTow:[
          {word:"意见反馈"},
          {word:"关于"},
      ]
    })
    
  }
}

module.exports = LoignController;
