const Controller = require('egg').Controller;

class BindController extends Controller {
    async index() {
        const {
            ctx
        } = this;
        await ctx.render("kmjl.html",{
            mkbxx:"米克保险箱",
            yrydbxx:"开门",
            sj1:"2分钟前",
            cshz1:"杭州",
            bxxdl:"开门%",
            sj2:"2分钟前",
            csgd:"杭州",
            xgpz:"开门",
            sj3:"2分钟前",
            cssh1:"杭州",
            bxxdl:"开门",
            sj4:"2分钟前",
            chsh2:"杭州",
            yrydbxx:"开门",
            sj5:"2分钟前",
            cshz2:"杭州",
            yrydbxx:"开门",
            sj6:"2分钟前",
            cshz:"杭州",
            fh:"../public/img/切图/android/drawable-xhdpi/back.png",
            move:"../public/img/切图/android/drawable-xhdpi/suotou.jpg",
            electricity:"../public/img/切图/android/drawable-xhdpi/suotou.jpg",
            modify:"../public/img/切图/android/drawable-xhdpi/suotou.jpg",
            electricity:"../public/img/切图/android/drawable-xhdpi/suotou.jpg",
            move2:"../public/img/切图/android/drawable-xhdpi/suotou.jpg",
            move3:"../public/img/切图/android/drawable-xhdpi/suotou.jpg",
            "pic1":"../public/img/切图/android/drawable-xhdpi/tab_safebox.png",
            "pic2":"../public/img/切图/android/drawable-xhdpi/tab_opendoor_pre.png",
            "pic3":"../public/img/切图/android/drawable-xhdpi/tab_alarm.png",
            "pic4":"../public/img/切图/android/drawable-xhdpi/tab_associated.png",
        })
    }
}

module.exports = BindController;