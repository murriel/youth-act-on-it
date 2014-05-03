var db=require('../lib/db');

module.exports=function(req,res) {
  db.query('insert into activity SET ?',req.body,function(err,results) {
    if(err) {
      throw err;
    }
    res.send(200);
  });
};
