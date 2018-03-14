const express = require("express");
const router = express.Router();
const mockProducts = require("../mocks/products");

const productArrayToObject = arrayOfProducts => {
  //create an accumaltor object
  const accumulator = {};
  // for each product in arrayOfProducts
  arrayOfProducts.forEach(product => {
    const id = product._id;
    const copy = { ...product};
    delete copy._id;
    accumulator[id] = copy;
  });
  //grab the id
  //delete the underscore id internal to the object
  //set the if value in the accumalator object equal to product
  //return accumalator
  return accumulator;
};

router.get("/products", (req, res) => {
  res.status(200).json({
    products: productArrayToObject(mockProducts)
  });
});

module.exports = router; // like export default
