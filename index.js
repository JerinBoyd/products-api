const express = require("express");
const serverApp = express();
const mongoose = require('mongoose');

require('dotenv').config();

mongoose.connect(process.env.MONGO_URI); //has to be put after require('dotenv')
const PORT = process.env.PORT || 5000; // necc for heroku deployment

//routers
const productRouter = require('./routers/products');

serverApp.use(productRouter); //register the router with the application

serverApp.get("/", (req, res) => {
  res.send("yes it still works");
});

serverApp.listen(PORT, () => {
  console.log(`Now listening on port $(PORT)`);
});
