const successResponse = (message, data = null) => {
  return {
    status: true,
    message,
    data,
  };
};

const errorResponse = (message) => {
  return {
    status: false,
    message,
  };
};

module.exports = {
  successResponse,
  errorResponse,
};
