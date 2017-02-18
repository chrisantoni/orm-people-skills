var Skill = require('../model/skill')

module.exports = {
      get_all_skill:function(req,res){
        Skill.find({},function(err,data){
          if(err)throw err
          res.send(data)
        })
      },
      get_skill:function(req,res){
        Skill.findOne({skillID:req.body.skillID},function(err,data){
          if(err)throw err;
          res.send(data)
        })
      },
      create_skill:function(req,res){
        var new_skill = new Skill({
          skillID:req.body.skillID,
          name:req.body.name,
          description:req.body.description
        })
        new_skill.save(function(err,data){
          if(err)throw err
          res.send(data)
        })
      },
      update_skill:function (req,res) {
      Skill.findOneAndUpdate({skillID:req.body.skillID},
      {name:req.body.name,description:req.body.description},
      {new:true},
        function(err,data){
          if(err)throw err
          res.send(data)
          }
        )
      },
      delete_skill:function(req,res){
        var input_skillID = req.body.skillID
        Skill.findOneAndRemove({skillID:input_skillID},
          function(err,data){
          if(err)throw err
          res.send(data)
        })
      }
}
