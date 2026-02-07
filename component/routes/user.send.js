let express = require('express');
const user_info = require("../models/user.login.model")
const tokenck = require("../middleware/token.ck")
let router = express.Router();

router.get("/get/user/send",tokenck,async(req,res)=>{
    try {
        const user = await user_info.findOne({_id:req.token.id})
        if(!user){
            return res.send({
                stste: 0,
                bolien: false,
                msg: "user not find",
              });
        }
        return res.send({
            stste: 1,
            bolien: true,
            msg: "user find",
            data:{
                name:user.name,
                email:user.email,
                id:user._id
            }
          });
    } catch (error) {
        return res.send({
            stste: 0,
            bolien: false,
            msg: "user not find",
          });
    }
})

module.exports = router;