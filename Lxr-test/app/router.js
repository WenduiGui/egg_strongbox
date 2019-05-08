'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.header.index);
  router.get('/header', controller.header.index);
  router.get('/kmjl', controller.kmjl.index);
};
