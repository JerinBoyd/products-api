const express = require("express");
const serverApp = express();

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
