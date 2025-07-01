function twitter(tweetId) {
  return (
    '<blockquote class="twitter-tweet"><a href="https://twitter.com/user/status/' +
    String(tweetId) +
    '"></a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>'
  );
}

module.exports = {
  twitter,
};
