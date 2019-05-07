'use strict';

const Controller = require('egg').Controller;

class DetailsController extends Controller {
    async index() {
        const { ctx } = this;
        await ctx.render("details.html", {
            box: "米洛保险箱",
            boxname: "保险箱名称",
            MIKO: "MIKO保险箱",
            brand: "品牌",
            sanxing: "三星",
            serial: "序列号",
            number: "GFRGB44FDFD5FD",
            Ip: "设备Ip",
            Ip_number: "192.168.1.1",
            Firmware_version: "固件版本",
            Edition: "V2.01245",
            state: "连接状态",
            Yes: "已连接",
        })

    }
}

module.exports = DetailsController;