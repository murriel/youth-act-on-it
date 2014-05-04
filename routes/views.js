var restify = require('restify'),
    moment = require('moment');

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

  app.get('/details/:id', function(req,response) {
    var x = '/activity/details/' + req.params.id;
    client.get(x, function(err, req, res, obj){
      response.render('detailPage', { details: obj});
    });
  });

  app.get('/list', function(req,response) {
      client.get('/activity/list', function(err, req, res, obj){
        response.render('list', { object: obj});
      });
  });
};
