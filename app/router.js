'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.banner.index);
  router.get('/Associated', controller.associated.index);
  router.get('/state', controller.state.index);
  router.get('/open', controller.home1.open);
  router.get('/recoed', controller.home1.recoed);
};
