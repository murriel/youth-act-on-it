module.exports=function(app) {
  app.get('/activity/list',require('../services/list'));
};
