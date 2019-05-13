'use strict';

const Controller = require('egg').Controller;

class AddController extends Controller {
    async index() {
        const { ctx } = this;
        await ctx.render("page.html", {
            item: { 'bt1': '智能保险箱' },

            bt: 'MIKO保险箱',
            sj: '最后一次位置：杭州',
            sp5: "监听保险箱"
        })
    }
}

module.exports = AddController;