const htmlToText = require("html-to-text");


module.exports = {
  preview: function(body) {
    return htmlToText.fromString(body).substring(0, 239);
  }
}