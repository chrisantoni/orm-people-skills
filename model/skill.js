var mongoose = require('mongoose')
var Schema = mongoose.Schema

var skillSchema = Schema({
  skillID:{type:Number,unique:true},
  name:{type:String,unique:true},
  description:String
},
{
  timestamps:true
})

var Skill = mongoose.model('Skill',skillSchema)
module.exports = Skill
