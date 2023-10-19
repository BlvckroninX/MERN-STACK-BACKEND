const express = require("express")
const morgan = require("morgan")
const cors = require("cors")
const mongoose = require("mongoose")
require("dotenv").config()

const blogRoute =require('./Routes/blog')
const authRoute = require('./Routes/auth')


const app = express()

//connect cloud database
mongoose.connect(process.env.DATABASE,{
    useNewUrlParser:true,
    useUnifiedTopology:false
}).then(()=>console.log("connect database successful"))
.catch((err)=>console.log("error"))

// middleware การใช้คำสั่ง use
app.use(express.json())
app.use(cors())
app.use(morgan())


//route (url) การเรียกใช้งาน server และต้องการให้ส่งอะไรกลับไป
app.use('/api',blogRoute)
app.use('/api',authRoute)


const  port = process.env.PORT || 3000
app.listen(port,()=>{
    console.log(`start server in ${port}`)
})