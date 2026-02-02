let express = require("express");
const user_info = require("../models/user.login.model");

let route = express.Router();

route.patch("/user/update/:id", async (req, res) => {
  const { id } = req.params;
  const { name, email, role } = req.body;
  try {
    await user_info.findOneAndUpdate(
      { _id: id },
      {
        name,
        email,
        role,
      },
    );
    res.status(200).json({ message: "User updated successfully" ,
        success:true
    });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
});

module.exports = route;
