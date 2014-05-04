var db=require('../lib/db');

module.exports=function(req,res) {
  db.query("delete from activity where activity_id=$1",[req.params.id],function(err,results) {
    if(err) {
       console.log(err.message);
       return res.send(500);
    }
    res.send(200);
  });

};
