const pluginRss = require("@11ty/eleventy-plugin-rss");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(pluginRss);
  eleventyConfig.setDataDeepMerge(true);
  return {
    dir: {
      input: "build",
      output: "dist"
    },
    templateFormats: [
      'md',
      'css',
      'hbs',
      'njk'
    ]
  }
};