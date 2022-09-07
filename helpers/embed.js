module.exports = {
  twitter: function (tweetId) {
    return (
      '<blockquote class="twitter-tweet"><a href="https://twitter.com/user/status/' +
      String(tweetId) +
      '"></a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>'
    );
  },
  glitch: function (glitchId, type) {
    if (type === "app") {
      return (
        '<div class="glitch-embed-wrap" style="height: 420px; width: 100%;"><iframe allow="geolocation; microphone; camera; midi; encrypted-media" src="https://glitch.com/embed/#!/embed/' +
        glitchId +
        '?path=README.md&previewSize=100" alt="record-player on Glitch" style="height: 100%; width: 100%; border: 0;"></iframe></div>'
      );
    }
  },
};
