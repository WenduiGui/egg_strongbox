const Controller = require('egg').Controller;

class BindController extends Controller {
    async index() {
        const {
            ctx
        } = this;
        await ctx.render("header.html",{
            mkbxx:"米克保险箱",
            yrydbxx:"有人移动保险箱",
            sj1:"2分钟前",
            cshz1:"杭州",
            bxxdl:"保险箱电量低于20%",
            sj2:"25分钟前",
            csgd:"广东",
            xgpz:"修改配置",
            sj3:"2天前",
            cssh1:"上海",
            bxxdl:"保险箱电量低于20%",
            sj4:"18天前",
            chsh2:"上海",
            yrydbxx:"有人移动保险箱",
            sj5:"2分钟前",
            cshz2:"杭州",
            yrydbxx:"有人移动保险箱",
            sj6:"2分钟前",
            cshz:"杭州",
            fh:"../public/img/切图/android/drawable-xhdpi/back.png",
            move:"../public/img/切图/android/drawable-xhdpi/move.png",
            electricity:"../public/img/切图/android/drawable-xhdpi/electricity.png",
            modify:"../public/img/切图/android/drawable-xhdpi/modify.png",
            electricity:"../public/img/切图/android/drawable-xhdpi/electricity.png",
            move2:"../public/img/切图/android/drawable-xhdpi/move.png",
            move3:"../public/img/切图/android/drawable-xhdpi/move.png",
            "pic1":"../public/img/切图/android/drawable-xhdpi/tab_safebox.png",
            "pic2":"../public/img/切图/android/drawable-xhdpi/tab_opendoor.png",
            "pic3":"../public/img/切图/android/drawable-xhdpi/tab_alarm_pre.png",
            "pic4":"../public/img/切图/android/drawable-xhdpi/tab_associated.png",

        })
    }
}

module.exports = BindController;
