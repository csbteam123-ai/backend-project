const jwt = require("jsonwebtoken");

const tokenck = (req, res, next) => {
  const token = req.headers.tokensend;
  if (!token) return res.send("token not found");
  try {
    const tokenvrafy = jwt.verify(token, process.env.JWT_SECRET);
    if (!tokenvrafy) {
      return res.send({
        stste: 0,
        bolien: false,
        msg: "user not find",
      });
    }
    req.token = tokenvrafy;
    next();
  } catch (error) {
    return res.send({
      stste: 0,
      bolien: false,
      msg: "user not find",
    });
  }
};
module.exports = tokenck;
