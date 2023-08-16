const htmlToText = require("html-to-text");
const { marked } = require("marked");

function isSameString(stringA, stringB) {
  return stringA.toUpperCase() === stringB.toUpperCase();
}

function eq() {
  const args = Array.prototype.slice.call(arguments, 0, -1);
  return args.every((expression) => args[0] === expression);
}

function or() {
  const args = Array.prototype.slice.call(arguments, 0, -1);
  for (let i in args) {
    if (args[i]) return true;
  }
  return false;
}

function not(a) {
  return !a;
}

function previewText(body) {
  if (body) {
    const options = {
      ignoreHref: true,
      ignoreImage: true,
      uppercaseHeadings: false,
    };
    const plainText = htmlToText.fromString(marked.parse(body), options);
    let previewText = plainText.substring(0, 349);
    // Make this more general
    weirdCharIndex = previewText.indexOf(">");
    if (weirdCharIndex >= 0) {
      previewText = previewText.substring(0, weirdCharIndex);
    }

    let lastChar = previewText.substring(
      previewText.length - 1,
      previewText.length
    );
    while (lastChar === " " || lastChar === "\n") {
      lastChar = previewText.substring(
        previewText.length - 1,
        previewText.length
      );
      previewText = previewText.substring(0, previewText.length - 1);
    }

    if (lastChar === "." || lastChar === "," || lastChar === "!") {
      previewText = previewText.substring(0, 348);
    }

    if (plainText.length > previewText.length) {
      previewText += "…";
    }

    return previewText;
  }
  return "";
}

module.exports = {
  isSameString,
  eq,
  or,
  not,
  previewText,
};
