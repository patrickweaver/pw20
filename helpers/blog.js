function readMore(body) {
  if (body.length > 348) {
    return "Read More";
  }
  return "Post Link";
}

module.exports = {
  readMore,
};
