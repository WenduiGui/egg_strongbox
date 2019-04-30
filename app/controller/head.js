const Controller = require("egg").Controller;

class HomeController extends Controller {
    async index() {
        const {
            ctx
        } = this;
        await ctx.render("head.html",{
            HeadList:[{bt1:'智能保险箱',}],
            ContentnList:[
                {
                bt:'MIKO保险箱',
                sj:'最后一次位置:杭州'
                },
            ],
            sp5:"监听保险箱",
        })
    }
}

module.exports = HomeController;