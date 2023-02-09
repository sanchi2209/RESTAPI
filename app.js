const express=require('express')
const mongoose=require('mongoose')
const app=express()
const Conn=require('./Connection/conn')
//const User=require('./model/user')
const userRoutes=require('./router/user')
const cors=require('cors')
Conn()

const bodyParser=require('body-parser')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extend:false}))
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())

app.use('/app',userRoutes)

app.get('/',(req,res)=>{
    res.send('ok')
})

app.listen(3000,()=>console.log('server is up at 3000'))