var restify = require('restify'),
    moment = require('moment'),
    config = require('../config');

var client = restify.createJsonClient({
    url: config.rest_url,
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

  app.get('/create', function(req,response) {
    response.render('createActivity');
  });

  app.get('/list', function(req,response) {
      client.get('/activity/list', function(err, req, res, obj){
        response.render('list', { object: obj,
        	helpers: {
        		"prettifyDate": function(timestamp) {
        			return new Date(timestamp).toString('yyyy-MM-dd');
        		}
        	}
        	});
      });
  });
};

//app.get('/', function (req, res, next) {
//    res.render('home', {
//        showTitle: true,
//
//        // Override `foo` helper only for this rendering.
//        helpers: {
//            foo: function () { return 'foo.'; }
//        }
//    });
//});