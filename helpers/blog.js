module.exports = {
  readMore: function (body) {
    if (body.length > 348) {
      return "Read More";
    }
    return "Post Link";
  },
};
