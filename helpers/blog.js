const sanitizeHtml = require("sanitize-html");


module.exports = {
  preview: function(body) {
    return sanitizeHtml(body).substring(0, 239);
  }
}