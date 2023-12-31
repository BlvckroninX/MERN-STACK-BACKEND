const jwt = require('jsonwebtoken')
const ExpressJWT = require("express-jwt")
exports.login=(req,res)=>{
    const {username,password} = req.body
    if(password === process.env.PASSWORD){
        //login เข้าสู่ระบบ
      const token =  jwt.sign({username},process.env.JWT_SECRET,{expiresIn:"1d"})
      return res.json({token,username})
    }
    else{
        return res.status(400).json({
            
            err:"รหัสผ่านไม่ถูกต้อง !!"

        })
    }
}

//ตรวจสอบ token
exports.requireLogin=ExpressJWT({
    secret:process.env.JWT_SECRET,
    algorithms:["HS256"],
    userProperty:"auth"
})