const pluginRss = require("@11ty/eleventy-plugin-rss");

// Helpers:
const dateHelpers = require("./helpers/dates");
const blogHelpers = require("./helpers/blog");
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
  eleventyConfig.addShortcode("blogPreview", blogHelpers.preview);
  eleventyConfig.addShortcode("statusColor", portfolioHelpers.statusColor);
  
  
  // In progress, create custom start_date, end_date filter
  eleventyConfig.addCollection("portfolioSorted", function(collection) {
   
    var filter = collection.getFilteredByTag("projects");
    for (var i in filter) {
      var j = filter[i];
      //console.log(i, j);
      break
    }
    return collection.getFilteredByTag("projects").reverse();
  });

  
  
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