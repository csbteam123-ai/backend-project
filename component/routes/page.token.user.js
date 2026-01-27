let express = require("express");
let jwt = require("jsonwebtoken");
const user_info = require("../models/user.login.model");
let route = express.Router();

route.post("/token/ck/user", async (req, res) => {
  const { token } = req.body;

  if (!token) {
    return res.status(400).send({ state: 0, error: "Token missing" });
  }

  try {
    const vf_token = jwt.verify(token, process.env.JWT_SECRET);

    const user = await user_info.findOne({ email: vf_token.email });

    if (!user) {
      return res.status(404).send({ state: 0, error: "User not found" });
    }
    return res.send({
      state: 1,
      email: user.email,
      name: user.name,
      file:true
    });
  } catch (err) {
    return res
      .status(401)
      .send({ state: 0, error: "Invalid or expired token" });
      
  }
});

module.exports = route;
