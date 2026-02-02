let mongoose = require("mongoose")

const singup = mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    password:{
        type:String,
        require:true
    },
    role:{
        type:String,
        default:"user"
    }
})

let user_info = mongoose.model("user_info",singup)
module.exports = user_info


