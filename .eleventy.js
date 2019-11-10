const pluginRss = require("@11ty/eleventy-plugin-rss");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(pluginRss);
  eleventyConfig.setDataDeepMerge(true);
  
  // Create postsReversed tag with posts tag in reverse order
  eleventyConfig.addCollection("postsReversed", function(collection) {
   return collection.getFilteredByTag("posts").reverse();
  });
  
  eleventyConfig.addCollection("portfolioSorted", function(collection) {
   
    var filter = collection.getFilteredByTag("projects");
    for (var i in filter) {
      var j = filter[i];
      console.log(i, j);
    }
    
    
    return collection.getFilteredByTag("projects");
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