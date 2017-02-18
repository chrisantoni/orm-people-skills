var mongoose = require('mongoose')
var Schema = mongoose.Schema


var userSchema = Schema({
  userID:{type:Number,unique:true},
  username:{type:String,unique:true},
  skills:[{
    skill: {type:Schema.Types.ObjectId,unique:true,ref:'Skill'},
    score:Number
  }]
},
{
  timestamps:true
})

var User = mongoose.model('User',userSchema)
module.exports = User
