var db=require('../lib/db');

module.exports=function(req,res) {
  var activity=req.body;
  db.query('insert into activity (title,' +
           '                      description,' +
           '                      create_date,' +
           '                      activity_location,' +
           '                      longitude,' +
           '                      latitude,' +
           '                      status) ' +
           '            values ($1,$2,$3,$4,$5,$6,$7)',
           [activity.title,
            activity.description,
            activity.create_date,
            activity.activity_location,
            activity.longitude,
            activity.latitude,
            activity.status],

  function(err,results) {

    if(err) {
      throw err;
    }

    res.send(200);
  });
};
