module.exports=function(app) {
  app.get('/', function(req,res) {
       res.render('home');
  });

  app.get('/details', function(req,res) {
       res.render('detailPage');
  });
};
