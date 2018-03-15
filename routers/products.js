const express = require("express");
const router = express.Router();
const mockProducts = require("../mocks/products");


const productArrayToObject = arrayOfProducts => {
  //create an accumaltor object
  const accumulator = {};
  // for each product in arrayOfProducts
  arrayOfProducts.forEach(product => {
    const id = product._id;
    const copy = { ...product };
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

router.get("/products/:id", (req, res) => {
  const { id } = req.params;
  const productsObject = productArrayToObject(mockProducts); //this will get deleted
  const selectedProduct = productsObject[id];
  res.status(200).json({
    products: {
      [id]: selectedProduct
    }
  });
});

router.post("/products", (req, res) => {
   const productsObject = productArrayToObject(mockProducts);
   const id = 1232341231 * Math.random();
    const newProduct = {
        name: 'something new',
        price: 1000,
        created: new Date(),
        imgSrc: 'https://via.placeholder.com/250x250',
    }
    mockProducts.push(newProduct);
    res.status(201).json({
        msg: 'successsfully created product'
    })
});

module.exports = router; // like export default
