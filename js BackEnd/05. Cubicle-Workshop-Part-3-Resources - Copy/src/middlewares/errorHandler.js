const { extractErrorMsg } = require("../utils/errorHandle.js");

module.exports = (err, req, res, next) => {
  const errorMessages = extractErrorMsg(err);
  res.render("404", { errorMessages });
};
