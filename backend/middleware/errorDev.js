export default (err, req, res, next) => {
  /* eslint-disable no-not-accumulator-reassign/no-not-accumulator-reassign */
  if (res.headersSent) {
    return next(err);
  }
  if (!err.status && err.name && !err.errors) {
    switch (err.name) {
      case 'BadRequestError':
      case 'MongoError':
      case 'CastError':
        err.status = 400;
        break;
      default:
        err.status = 500;
    }
  }
  err.status = err.status || 500;
  if (err.status === 500) {
    if (err.functionName) {
      console.error('Error in function:', err.functionName);
    }
    console.error((err.stack || '').toString());
  }
  /* eslint-enable */
  res.status(err.status);
  return res.json({
    message: err.message,
    error: err.stack,
  });
};
