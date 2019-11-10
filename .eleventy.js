const pluginRss = require("@11ty/eleventy-plugin-rss");

module.exports = function(eleventyConfig) {
  
  // Rss
  eleventyConfig.addPlugin(pluginRss);
  
  // Merge data in .json files in diretories with data in each file
  eleventyConfig.setDataDeepMerge(true);
  
  // Create postsReversed tag with posts tag in reverse order
  eleventyConfig.addCollection("postsReversed", function(collection) {
   return collection.getFilteredByTag("posts").reverse();
  });
  
  
  // In progress, create custom start_date, end_date filter
  eleventyConfig.addCollection("portfolioSorted", function(collection) {
   
    var filter = collection.getFilteredByTag("posts");
    for (var i in filter) {
      var j = filter[i];
      //console.log(i, j);
      break
    }
    
    
    return collection.getFilteredByTag("posts");
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