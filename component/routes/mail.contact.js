let express = require("express");
const { Contact } = require("../view/Contact.mail");
const sendmailp = require("../config/mail.config");

const route = express.Router();

route.post("/contact/send/mail", async (req, res) => {
  try {
    const { fullname, email, phone, subject, message } = req.body;
    const transporter = await sendmailp();
    if (!transporter) return res.send("Mail setup failed");
    if (!fullname || !email || !message) {
      return res.status(200).json({ success: false, msg: "Missing required fields" });
    }
    const now = new Date();
    const Contact_html = Contact
      .replace("{{name}}", fullname)
      .replace("{{email}}", email)
      .replace("{{phone}}", phone)
      .replace("{{subject}}", subject)
      .replace("{{message}}", message)
      .replace("{{date}}", now.toLocaleDateString())
      .replace("{{time}}", now.toLocaleTimeString())
      .replace("{{year}}", now.getFullYear());
    const info = await transporter.sendMail({
      from: process.env.EMAIL_USERNAME,
      to: process.env.EMAIL_USERNAME,
      subject: `New Contact Message: ${subject}`,
      html: Contact_html,
    });
    return res.send({ success: true, msg: "Mail sent" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ success: false, msg: "Failed to send mail",error });
  }
});

module.exports = route;
