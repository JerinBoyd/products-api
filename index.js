const express = require("express");
const serverApp = express();
const mongoose = require("mongoose");

require("dotenv").config();

//middleware imports
const logger = require("./middlewares/logger");

mongoose.connect(process.env.MONGO_URI);
const PORT = process.env.PORT || 5000; //necessary for Heroku deployment

//routers
const productRouter = require("./routers/products");
serverApp.use(logger);

serverApp.use(productRouter); //register the router with the application

serverApp.get("/", (req, res) => {
  res.send("Something better");
});

serverApp.use(function notFoundHandler(req, res, next) {
  res.status(404).send("was is and still not right");
});

serverApp.listen(PORT, () => {
  console.log(`Now listening on port ${PORT}`);
});
