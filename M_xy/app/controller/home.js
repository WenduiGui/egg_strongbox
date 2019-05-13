'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
    async index() {
        const { ctx } = this;
        await ctx.render("home.html", {
            name: "用户名",
            pass: "密码",
            register: "注册用户",
            Forget_password: "忘记密码",
            mm: "请输入正确得手机号",
            en: "密码必须由6-12位数字或者字母组成",

        });
        // const username = this.ctx.request.home.password;
        // const password = this.ctx.request.home.password;
        // if (username === "123" && password === "456") {
        //     await this.ctx.redirect("/Add_to")
        // } else {
        //     // alert("请输入正确用户与密码")
        // }
    }


    async register() {
        await this.ctx.render('register', {
            word: "注册",
            tell: "手机",
            mm: "",
            Yzm: "验证码",
            Cipher: "密码",
            zhuce: "注册",
            tongyi: "注册代表同意",
            yinsi: "《隐私条款》",
        })
    }


    async Forget_password() {
        await this.ctx.render("Forget_password", {
            Register: "注册",
            tell: "手机",
            mm: "",
            Vc: "验证码",
            pass: "重置密码",
            Register: "注册",
        })
    }
}


module.exports = HomeController