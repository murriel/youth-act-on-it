var restify = require('restify'),
    async = require('async');

var client = restify.createJsonClient({
  url: 'http://localhost:3000',
});

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

  app.get('/details/:id', function(req,res) {
      console.log(req.params.id);
      res.render('detailPage');
  });

  app.get('/list', function(req,response) {
      client.get('/activity/list', function(err, req, res, obj){
        response.render('list', { object: obj});
      });
  });
};
