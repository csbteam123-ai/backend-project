let nodemailer = require("nodemailer")
async function sendmailp(){
    try {
        const sender = nodemailer.createTransport({
            service: "gmail",
            auth:{
                user:process.env.EMAIL_USERNAME,
                pass: process.env.EMAIL_APP_PASSWORD
            }
        })
        return sender;
    } catch (error) {
        console.log(error)
    }
}

module.exports = sendmailp