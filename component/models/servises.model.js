let mongoose = require("mongoose");

const servisesSchema = mongoose.Schema({
  title: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
    features: {
    type: [String],
    require: true, 
    },
    price: {
    type: Number,
    require: true,
  },
  priceType: {
    type: String,
    require: true,
  },
  popular: {
    type: Boolean,
    default: false,
  }
});

let servises_info = mongoose.model("servises_info", servisesSchema);
module.exports = servises_info;