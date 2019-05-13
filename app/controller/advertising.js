'use strict';

const Controller = require('egg').Controller;

class AdvertisingController extends Controller {
    async index() {
        const { ctx } = this;
        await ctx.render("advertising.html", {
            url: "../public/img/1.jpg",
            tiaozhuan: "跳转",
            num: 3,
        })
    }
}

module.exports = AdvertisingController;