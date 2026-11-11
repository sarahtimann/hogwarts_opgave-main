export default (err, req, res, next) => {
  //   console.log(err.message);
  //   console.log(err.statusCode);

  let error = "Internal Server Error";
  if (err.statusCode == 404) {
    error = "Not Found";
  } else if (err.statusCode == 400) {
    error = "Bad Request";
  } else if (err.statusCode == 401) {
    error = "Unauthorized";
  } else if (err.statusCode == 403) {
    error = "Forbidden";
  } else if (err.statusCode == 409) {
    error = "Conflict";
  } else if (err.statusCode == 418) {
    error = "I'm a teapot";
  } else if (err.statusCode == 500) {
    error = "Internal Server Error";
  }

  res.status(err.statusCode).json({
    message: err.message,
    error: error,
    status: err.statusCode,
  });
};
