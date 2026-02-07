let express = require("express")
let user_info = require("../models/user.login.model")
let jwt = require("jsonwebtoken")
let bcrypt = require("bcrypt")
const route = express.Router()

route.post("/login",async (req,res)=>{
    const {email,password} = req.body
    const user = await user_info.findOne({email})
    if (!user){
        return res.status(404).send("user not find")
    }
    const password1 =await bcrypt.compare(password, user.password)
    if(password1){
        const token = jwt.sign({
            email:user.email,
            id:user._id,
        },process.env.JWT_SECRET)
        return res.send({
            stest:1,
            msg:"login successful",
            token,
            user
        })
    }
    return res.send({
        stest:0,
        error:334,
        msg:"login fild"
    })
})

module.exports = route