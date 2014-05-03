module.exports=function(app) {
app.get('/login', function(req,res) {
       res.render('login');
  });
  app.get('/', function(req,res) {
       res.render('home');
  });

  app.get('/details', function(req,res) {
       res.render('detailPage');
  });
};
