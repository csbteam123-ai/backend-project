let express = require("express");
let bcrypt = require("bcrypt")
let jwt = require("jsonwebtoken")
let route = express.Router();
let user_info = require("../models/user.login.model");
const tokenck = require("../middleware/token.ck");
route.post("/usercreate", tokenck, async (req, res) => {
  const { email, name, password } = req.body;
  const passhash = await bcrypt.hash(password,10)
  try {
    const usercrate = new user_info({
      name,
      email,
      password: passhash,
    });

    await usercrate.save();
    const ck = req.body;

    const token = jwt.sign({
        id:usercrate._id,
        email:usercrate.email
    },process.env.JWT_SECRET)

    return res.send({
      state: 1,
      msg: "all ok",
      deta: ck,
      token
    });
  } catch (error) {
    if (error.code === 11000) {
      return res.send({
        state: 334,
        msg: "exmail alrady exsis",
      });
    }
  }
});

module.exports = route;
