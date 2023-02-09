// const { default: mongoose } = require("mongoose");

const mongoose = require('mongoose')
const Schema=mongoose.Schema
//const ObjectId=Schema.ObjectId

const UserSchema=Schema({
        name:{type:String,required:true},
        location:{type:String,required:true},
        likes:Number,
        description: {type:String,required:true},
        PostImage:{contentType:String} ,
        date: { type: Date, default: Date.now }
     })

const User=mongoose.model('users',UserSchema)
module.exports=User