const Controller = require("egg").Controller;

class HomeController extends Controller {
    async index() {
        const {
            ctx
        } =this;
        await ctx.render("my.html",{
            span:"我的",
            spanTwo:"大风起兮",
            // MyList:[
            //     {num:"通知消息"},
            //     {num:"修改密码"},
            //     {word:"意见反馈"},
            //     {word:"关于"},
            // ],
        })
    }
}

module.exports = HomeController;