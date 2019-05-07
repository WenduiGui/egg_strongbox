'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
    async index() {
        const { ctx } = this;
        await ctx.render("home.html", {
            name: "用户名",
            pass: "密码",
            register: "注册用户",
            Forget_password: "忘记密码"
        })
    }


    async register() {
        await this.ctx.render('register', {
            word: "注册",
            tell: "手机",
            Yzm: "验证码",
            Cipher: "密码",
            zhuce: "注册",
            hasbtn: true,
            content: "获取验证码", // 按钮里显示的内容
            totalTime: 60, //记录具体倒计时时间
            canClick: true, //添加canClick
            tongyi: "注册代表同意",
            yinsi: "《隐私条款》",
            methods: {
                countDown() {
                    if (!this.canClick) return; //改动的是这两行代码
                    this.canClick = false;
                    this.content = this.totalTime + "s后重新发送";
                    let clock = window.setInterval(() => {
                        this.totalTime--;
                        this.content = this.totalTime + "s后重新发送";
                        if (this.totalTime < 0) {
                            window.clearInterval(clock);
                            this.content = "重新发送验证码";
                            this.totalTime = 60;
                            this.canClick = true; //这里重新开启
                        }
                    }, 1000);
                },

                git() {
                    alert("注册成功")
                },
            }
        })
    }


    async Forget_password() {
        await this.ctx.render("Forget_password", {
            Register: "注册",
            tell: "手机",
            Vc: "验证码",
            pass: "重置密码",
            Register: "注册",
            hasbtn: true,
            content: "获取验证码", // 按钮里显示的内容
            totalTime: 60, //记录具体倒计时时间
            canClick: true, //添加canClick
            methods: {
                countDown() {
                    if (!this.canClick) return; //改动的是这两行代码
                    this.canClick = false;
                    this.content = this.totalTime + "s后重新发送";
                    let clock = window.setInterval(() => {
                        this.totalTime--;
                        this.content = this.totalTime + "s后重新发送";
                        if (this.totalTime < 0) {
                            window.clearInterval(clock);
                            this.content = "重新发送验证码";
                            this.totalTime = 60;
                            this.canClick = true; //这里重新开启
                        }
                    }, 1000);
                },
                get() {
                    alert("注册成功")
                }
            }
        })

    }
}


module.exports = HomeController;