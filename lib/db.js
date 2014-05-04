var pg = require('pg');
var config = require('../config');
var conString = config.db_connection;

exports.query=function(sql,values,callback) {

  pg.connect(conString, function(err, client, done) {
    if(err) {
      return callback(err);
    }
    client.query(sql, values, function(err, result) {
      //call `done()` to release the client back to the pool
      done();

      callback(err,result);
    });
  });

}

