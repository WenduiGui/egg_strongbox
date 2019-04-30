'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.add.index);
  router.get('/head', controller.head.index);
  router.get('/my', controller.my.index);
};
