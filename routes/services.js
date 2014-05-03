module.exports=function(app) {
  app.get('/activity/list',require('../services/list'));
  app.post('/activity/create',require('../services/create'));
  app.get('/activity/details/:id',require('../services/details'));
};
