module.exports=function(app) {
	app.get('/signup', function(req,res) {
	       res.render('login');
	  });
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
