const express = require("express");
const router = express.Router();
const mockProducts = require("../mocks/products");

const Product = require("../models/product");
const productArrayToObject = arrayOfProducts => {
  //create an accumaltor object
  const accumulator = {};
  // for each product in arrayOfProducts
  arrayOfProducts.forEach(product => {
    const id = product._id;
    const copy = { ...product._doc };
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
  Product.find()
    .exec()
    .then(allProducts => {
      res.status(200).json({
        products: productArrayToObject(allProducts)
      });
    })
    .catch(err => {
      re.status(500).json({
        msg: "broken again"
      });
    });
});

router.get("/products/:id", (req, res) => {
  const { id } = req.params;
  Product.findById(id)
    .exec()
    .then(selectedProduct => {
        const selectedId = selectedProduct._id;
        const copy = {...selectedProduct.doc};
        delete copy._id
      res.status(200).json({
        products: {
          [selectedId]: copy
        }
      });
    })
    .catch(err => {
      res.status(500).json({
        masg: "really really broke"
      });
    });
});

router.post("/products", (req, res) => {
  const product = new Product({
    name: "something new",
    price: 1000,
    imgSrc: "https://via.placeholder.com/250x250"
  });
  product.save().then(response => {
    res
      .status(201)
      .json({
        msg: "successsfully created product"
      })
      .catch(err => {
        res.status(500).json({
          msg: "You stuf is broked"
        });
      });
  });
});

module.exports = router; // like export default
