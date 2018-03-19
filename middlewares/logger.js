module.exports = function logger(req, res, next) {
  const { url } = req;
  const date = new Date();
  console.log(`URL: ${url} @ ${date}`);
  next();
};

