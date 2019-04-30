const Controller = require("egg").Controller;

class HomeController extends Controller {
    async index() {
        const { ctx } = this;
        await ctx.render('add.html',{
            word:"添加保险箱",
            tjbxx: "添加保险箱",
            sys:"扫一扫保险箱二维码即可自动添加保险箱",
            word1:"扫描二维码添加",
        })
    }
}

module.exports = HomeController;