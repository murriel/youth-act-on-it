var db=require('../lib/db');

module.exports=function(req,res) {
    db.query('select * from activity where activity_id = $1',[req.params.id],function(err,results) {
      if(err) {
        throw err;
      }

      res.send(200,results.rows[0]);

    });
};
