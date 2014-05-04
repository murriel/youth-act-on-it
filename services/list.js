var db=require('../lib/db');

module.exports=function(req,res) {
  db.query("select *,to_char(activity_date,'Dy, Mon DDth yyyy') f_activity_date from activity order by activity_id desc",[],function(err,results) {
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
