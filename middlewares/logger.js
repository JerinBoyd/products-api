module.exports = function logger(req, res, next) {
  console.log(req.body);
  const { url } = req;
  const date = new Date();
  console.log(`URL: ${url} @ ${date}`);
  next();
};

