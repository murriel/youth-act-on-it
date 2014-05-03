var db=require('../lib/db');

module.exports=function(req,res) {

  db.query('select * from activity',[],function(err,results) {
    if(err) {
       console.log(err.message);
       return res.send(500);
    }
    var object={};
    object.activities=results.rows;
    object.total=results.length;
    res.send(200,object);
  });

};
