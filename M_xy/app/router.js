'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
    const { router, controller } = app;
<<<<<<< HEAD
    router.get('/', controller.advertising.index);
    router.get('/home', controller.home.index);
=======
    router.get('/', controller.home.index);
>>>>>>> 898d5176ddcba5263b4d2d98d3917d5647474084
    router.get('/register', controller.home.register);
    router.get('/Forget_password', controller.home.Forget_password);
    router.get('/Add_to', controller.add.index);
    router.get('/page', controller.page.index);
    router.get('/loign', controller.loign.index);
    router.get('/box', controller.home1.box);
    router.get('/details', controller.details.index);
    router.get('/open', controller.home1.open);
    router.get('/recoed', controller.home1.recoed);
    router.get('/user', controller.home1.user);
};