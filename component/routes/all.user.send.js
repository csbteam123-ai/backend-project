let express = require("express")
const user_info = require("../models/user.login.model")

let route = express.Router()

route.get("/user/all/info",async (req,res)=>{
    const user = await user_info.find({},{password:0})
    res.send({data:user})
})

module.exports = route