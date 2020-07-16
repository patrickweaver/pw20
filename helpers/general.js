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
      // Make this more general
      weirdCharIndex = previewText.indexOf(">");
      if (weirdCharIndex >=0) {
        previewText = previewText.substring(0, weirdCharIndex);
      }

      let lastChar = previewText.substring(previewText.length - 1, previewText.length);
      while (lastChar === " " || lastChar === "\n") {
        lastChar = previewText.substring(previewText.length - 1, previewText.length);
        previewText = previewText.substring(0, previewText.length - 1)
      }
      
      if (lastChar === '.' || lastChar === ',' || lastChar === "!") {
        previewText = previewText.substring(0, 348);
      }
      
      previewText += '…';
      
      return previewText;
    }
    return '';
  }
}