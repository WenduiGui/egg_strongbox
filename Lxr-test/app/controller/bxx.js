const Controller = require('egg').Controller;

class BindController extends Controller {
    async index() {
        const {
            ctx
        } = this;
        await ctx.render("bxx.html",{
            
        })
    }
}

module.exports = BindController;
