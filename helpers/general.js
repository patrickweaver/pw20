const htmlToText = require("html-to-text");
const marked = require("marked");

module.exports = {

  isSameString: function(stringA, stringB) {
    return stringA.toUpperCase() === stringB.toUpperCase();
  },
  
  eq: function() {
    const args = Array.prototype.slice.call(arguments, 0, -1);
    return args.every(function (expression) {
      return args[0] === expression;
    });
  },
  
  previewText: function(body) {
    if (body){
      const options = {
        ignoreHref: true,
        ignoreImage: true,
        uppercaseHeadings: false
      }
      
      let previewText = htmlToText.fromString(marked(body), options).substring(0, 349);
      let lastChar = previewText.substring(348, 349);
      
      if (lastChar === '.' || lastChar === ',') {
        previewText = previewText.substring(0, 348);
      }
      
      previewText += '…';
      
      return previewText;
    }
    return '';
  }
}