'use strict';

const Controller = require('egg').Controller;

class Home1Controller extends Controller {
    async box() {
        const {
            ctx
        } = this;
        await ctx.render("box.html", {
            box: "米洛保险箱",
            Safety_situation: "安全情况",
            security: "安全",
            position: "最后位置:杭州",
            current_state: "当前状态:打开",
            Setting: "灵敏度设置",
            introduce: "灵敏度介绍",
            list: [
                "一级",
                "二级",
                "三级",
                "四级",
            ],
            boxurl: "../public/img/tab_safebox_pre@2x.png",
            openurl: "../public/img/tab_opendoor@2x.png",
            recoedurl: "../public/img/tab_alarm@2x.png",
            userurl: "../public/img/tab_associated@2x.png",
        })
    }
    async open() {
        await this.ctx.render("open", {
            box: "米洛保险箱",
            list: [{
                    "door": "开门",
                    "time": "2分钟前",
                    "address": "杭州",
                },
                {
                    "door": "开门",
                    "time": "2分钟前",
                    "address": "杭州",
                },
                {
                    "door": "开门",
                    "time": "2分钟前",
                    "address": "杭州",
                },
                {
                    "door": "开门",
                    "time": "2分钟前",
                    "address": "杭州",
                },
                {
                    "door": "开门",
                    "time": "2分钟前",
                    "address": "杭州",
                },
                {
                    "door": "开门",
                    "time": "2分钟前",
                    "address": "杭州",
                },
            ],
            boxurl: "../public/img/tab_safebox@2x.png",
            openurl: "../public/img/tab_opendoor_pre@2x.png",
            recoedurl: "../public/img/tab_alarm@2x.png",
            userurl: "../public/img/tab_associated@2x.png",
            // students: ["小明", "小红", "小亮"]
        })
    }
    async recoed() {
        await this.ctx.render("recoed", {
            box: "米洛保险箱",
            list: [{
                    "url": "../public/img/move@2x.png",
                    "door": "有人移动保险箱",
                    "time": "2分钟前",
                    "address": "杭州",
                },
                {
                    "url": "../public/img/electricity@2x.png",
                    "door": "保险箱点亮低于20",
                    "time": "25分钟前",
                    "address": "广东",
                },
                {
                    "url": "../public/img/modify@2x.png",
                    "door": "修改配置",
                    "time": "2天前",
                    "address": "上海",
                },
                {
                    "url": "../public/img/electricity@2x.png",
                    "door": "保险箱电量低于20",
                    "time": "18天前",
                    "address": "上海",
                },
                {
                    "url": "../public/img/move@2x.png",
                    "door": "有人移动保险箱",
                    "time": "2分钟前",
                    "address": "杭州",
                },
                {
                    "url": "../public/img/move@2x.png",
                    "door": "有人移动保险箱",
                    "time": "2分钟前",
                    "address": "杭州",
                },
            ],
            boxurl: "../public/img/tab_safebox@2x.png",
            openurl: "../public/img/tab_opendoor@2x.png",
            recoedurl: "../public/img/tab_alarm_pre@2x.png",
            userurl: "../public/img/tab_associated@2x.png",
            // teachers: ["张三", "李四", "王五"]
        })
    }
    async user() {
        await this.ctx.render("user", {
            span: "米克保险箱",
            span1: "保险箱将按此顺序拨号，拖动可排序",
            list: [
                "13149869439",
                "13149869440",
                "13149869441",
                "13149869442",
            ],
            boxurl: "../public/img/tab_safebox@2x.png",
            openurl: "../public/img/tab_opendoor@2x.png",
            recoedurl: "../public/img/tab_alarm@2x.png",
            userurl: "../public/img/tab_associated_pre@2x.png",
            // teachers: ["张三", "李四", "王五"]
        })
    }
}

module.exports = Home1Controller;