const htmlToText = require("html-to-text");
const marked = require("marked");


module.exports = {
  preview: function(body) {
    const options = {
      ignoreHref: true,
      ignoreImage: true,
      uppercaseHeadings: false
    }
    return htmlToText.fromString(marked(body), options).substring(0, 349);
  }
}