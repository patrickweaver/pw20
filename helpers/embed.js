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
        `
          <div class="glitch-embed-wrap" style="height: 420px; width: 100%;">
            <iframe
              src="https://glitch.com/embed/#!/embed/${glitchId}?path=README.md&previewSize=100"
              title="An App on Glitch"
              allow="geolocation; microphone; camera; midi; encrypted-media; xr-spatial-tracking; fullscreen"
              allowFullScreen
              style="height: 100%; width: 100%; border: 0;">
            </iframe>
          </div>
        `
      );
    }
  },
};
