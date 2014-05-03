module.exports=function(app) {
  app.get('/activity/list',require('../services/list'));
  app.post('/activity/create',require('../services/create'));
};
