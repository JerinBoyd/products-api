module.exports = function notFoundHandler(req, res, next) {
    res.status(404).send("was is and still not right");
  };