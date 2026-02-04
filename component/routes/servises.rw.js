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
route.get("/servises/all", async (req, res) => {
  try {
    const servises = await servises_ck.find(); 
    res.status(200).json({ data: servises });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching services", error: error.message });
  }
});

route.patch("/servises/update/:id", tokenck, async (req, res) => {
  const { id } = req.params;
  const updates = req.body;

  try {
    const updatedServises = await servises_ck.findByIdAndUpdate(id, updates, { new: true });
    res.status(200).json({ message: "Service updated successfully", data: updatedServises });
  } catch (error) {
    res.status(500).json({ message: "Error updating service", error: error.message });
  }
});

module.exports = route;