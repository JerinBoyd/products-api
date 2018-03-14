const express = require("express");
const router = express.Router();
const mockProducts = require("../mocks/products");

router.get("/products", (req, res) => {
  res.status(200).json({
    products: mockProducts
  });
});




module.exports = router; // like export default
