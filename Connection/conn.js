const mongoose=require('mongoose')
async function getConnnection(){
    await mongoose.connect('mongodb://localhost/insta')
    console.log('mongoose is connnected')
}
module.exports=getConnnection

//how to check in cmd
//1.change the path to the mongodb file path>mongo>use database name>show collections