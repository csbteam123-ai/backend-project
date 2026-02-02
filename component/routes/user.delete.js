let express = require("express");
const user_info = require("../models/user.login.model");
let route = express.Router();
route.delete("/user/delete/:id", async (req, res) => {
    const { id } = req.params;
    try {
        await user_info.findOneAndDelete({ _id: id });
        return res.status(200).json({ message: "User deleted successfully", success: true });
    } catch (error) {
        return res.status(500).json({ message: "Server Error", error });
    }
});

module.exports = route;