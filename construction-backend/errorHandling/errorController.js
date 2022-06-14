const sendErrorDev = function (err, req, res) {
  res.status(err.statusCode).json({
    err: err.status,
    error: err,
    message: err.message,
    stack: err.stack,
  });
};

module.exports = function (err, req, res, _) {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || "error";

  sendErrorDev(err, req, res);
};
