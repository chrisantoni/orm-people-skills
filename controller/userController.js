var User = require('../model/user')

module.exports = {
      create_user:function(req,res){
        var new_user = new User({
          userID:req.body.userID,
          username:req.body.username,
        })
        new_user.save(function(err,data){
          if(err)throw err
          res.send(data)
        })
      },
      get_all_user_and_skill:function(req,res){
        User.find({}).populate('skills.skill')
        .exec(function(err,data){
          if(err)throw err
          res.send(data)
        })
      },
      add_skill_to_person:function(req,res){
        User.findOne({username:req.body.username}).populate('skills.skill')
        .exec(function(err,data){
          if(err)throw err
          var tampung_skill = []
          for (var i = 0; i < data.skills.length; i++) {
          tampung_skill[tampung_skill.length] = (data.skills[i].skill._id).toString()}
          console.log(tampung_skill.indexOf(0));
              if (tampung_skill.indexOf(req.body.skillID) == -1) {
              User.findOneAndUpdate(
              { username:req.body.username},
              { $push:{'skills':{skill:req.body.skillID,score:req.body.score}}},
                {safe:true,upsert:true,new:true,unique:true},
                function(err,data){
                  if(err)throw err
                  res.send(data)
                })
              }else{
                res.send({msg:'duplicate skill'})
              }
          })
      },
      delete_user:function(req,res){
        var input_userID = req.body.userID
        User.findOneAndRemove({userID:input_userID},
          function(err,data){
          if(err)throw err
          res.send(data)
        })
      }
}
