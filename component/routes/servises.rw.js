let express = require("express");
let servises_ck = require("../models/servises.model");
const tokenck = require("../middleware/token.ck");
let route = express.Router();

route.post("/servises/add", tokenck, async (req, res) => {
  const { title, description, features, price, priceType, popular } = req.body;
  try {
    const newServises = new servises_ck({
      title,
      description,
      features,
      price,
      priceType,
      popular,
    });
    await newServises.save();
    res
      .status(201)
      .json({ message: "Service added successfully", data: newServises });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error adding service", error: error.message });
  }
});
module.exports = route;