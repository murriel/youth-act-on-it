var db=require('../lib/db');

module.exports=function(req,res) {
  var activity=req.body;
  db.query('insert into activity (title,' +
           '                      description,' +
           '                      create_date,' +
           '                      activity_location,' +
           '                      longitude,' +
           '                      latitude,' +
           '                      status,' +
           '                      activity_date,' +
           '                      visual_asset,' +
           '                      target_attendance) ' +
           '            values ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10)',
           [activity.title,
            activity.description,
            new Date(),
            activity.activity_location,
            activity.longitude,
            activity.latitude,
            activity.status,
            activity.activity_date,
            activity.visual_asset,
            activity.target_attendance],

  function(err,results) {

    if(err) {
      throw err;
    }

    res.send(200);
  });
};
