const express=require('express')
const router=express.Router()

const User=require('../model/user')
const bodyParser=require('body-parser')

const multer=require('multer')
const fs=require('fs')

router.use(bodyParser.json())
router.use(bodyParser.urlencoded({extended:false}))
router.use(express.json())
router.use(express.urlencoded({extended:false}))

const Storage = multer.diskStorage({
    destination:'uploads' ,filename(req, file, cb){
      cb(null, Date.now()+""+file.originalname);
    }
  })
const upload=multer({
    storage:Storage
}).single('PostImage')

router.get('/user',(req,res)=>{
  res.send('hi')
})
router.post('/user',async(req, res)=> {
    upload(req, res, (err)=> {
      if (err) {
        // A Multer error occurred when uploading.
        console.log(err)
      } else {
        // An unknown error occurred when uploading.
        const{name,location,likes,description}=req.body;
        const newImage=new User({
          name,
          location,
          likes,
          description,
          PostImage:{
                data:fs.readFileSync('uploads/'+req.file.filename),contentType:'image/png'
            }
            
        })
          newImage.save().then(()=>{
            res.send("uploaded")
          }).catch(err=>{
            console.log(err)
          })
      }
  
      // Everything went fine.
    })
  })

module.exports=router