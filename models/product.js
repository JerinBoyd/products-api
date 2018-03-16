const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const productSchema = new Schema({
  // I would add more info about this property
    name: {
        required: true,
        type: String,
    },
  imgSrc: String, 
  price: Number,
  created: {
      required: true,
      type: Date,
      default: Date.now
  }
});

const Product = mongoose.model("Product", productSchema);
module.exports = Product;
