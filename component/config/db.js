let mongoose = require("mongoose")

const dbconnect =async () =>{
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log("db connect✅")
    } catch (error) {
        console.log("db error"+error)
    }
}

module.exports = dbconnect