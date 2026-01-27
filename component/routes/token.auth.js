let express = require("express");
let jwt = require("jsonwebtoken");
let user_ck = require("../models/user.login.model");
const tokenck = require("../middleware/token.ck");

let route = express.Router();

route.get("/token/test/ck", tokenck, async (req, res) => {
  const token = req.token;
  try {
    const user = await user_ck.findOne({ _id: token.id });
    if (user) {
      return res.send({
        state: 1,
        bolien: true,
        msg: "all okk",
        user,
      });
    }
  } catch (error) {
    return res.send({
      stste: 0,
      bolien: false,
      msg: "user not find",
    });
  }
});

module.exports = route;
