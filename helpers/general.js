const htmlToText = require("html-to-text");
const marked = require("marked");

module.exports = {
  
  eq: function() {
    const args = Array.prototype.slice.call(arguments, 0, -1);
    return args.every(function (expression) {
      return args[0] === expression;
    });
  },
  
  previewText: function(body) {
    
    console.log('******', body.substr(0, ))
    
    const options = {
      ignoreHref: true,
      ignoreImage: true,
      uppercaseHeadings: false
    }
    return htmlToText.fromString(marked(body), options).substring(0, 349);
  }
}