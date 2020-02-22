const pluginRss = require("@11ty/eleventy-plugin-rss");

// Helpers:
const generalHelpers = require('./helpers/general');
const dateHelpers = require("./helpers/dates");
const portfolioHelpers = require("./helpers/portfolio");

module.exports = function(eleventyConfig) {
  
  // Rss
  eleventyConfig.addPlugin(pluginRss);
  
  // Merge data in .json files in diretories with data in each file
  eleventyConfig.setDataDeepMerge(true);
  
  // Create postsReversed tag with posts tag in reverse order
  eleventyConfig.addCollection("postsReversed", function(collection) {
   return collection.getFilteredByTag("posts").reverse();
  });
  
  
  // Shortcodes/Helpers:
  eleventyConfig.addShortcode("readableDate", dateHelpers.readableDate);
  eleventyConfig.addShortcode("projectDate", dateHelpers.projectDate);
  eleventyConfig.addShortcode("previewText", generalHelpers.previewText);
  eleventyConfig.addShortcode("statusColor", portfolioHelpers.statusColor);
  eleventyConfig.addShortcode("isProject", portfolioHelpers.isProject);
  eleventyConfig.addShortcode("eq", generalHelpers.eq);
  
  
  // In progress, create custom start_date, end_date filter
  eleventyConfig.addCollection("portfolioSorted", portfolioHelpers.sort);

  
  
  return {
    dir: {
      input: "build",
      output: "dist"
    },
    templateFormats: [
      'md',
      'css',
      'js',
      'hbs',
      'njk',
      'gif',
      'jpg',
      'jpeg',
      'png',
      'mp3',
      'mp4',
      'pdf'
    ]
  }
};