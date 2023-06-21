const pluginRss = require("@11ty/eleventy-plugin-rss");

// Helpers:
const generalHelpers = require("./helpers/general");
const dateHelpers = require("./helpers/dates");
const portfolioHelpers = require("./helpers/portfolio");
const blogHelpers = require("./helpers/blog");
const embedHelpers = require("./helpers/embed");

module.exports = function (eleventyConfig) {
  // Rss
  eleventyConfig.addPlugin(pluginRss);

  // Merge data in .json files in directories with data in each file
  eleventyConfig.setDataDeepMerge(true);

  // Collections

  // List of Tags
  eleventyConfig.addCollection(
    "portfolioTagList",
    require("./_11ty/getPortfolioTagList")
  );

  // Create postsReversed tag with posts tag in reverse order
  eleventyConfig.addCollection("postsReversed", function (collection) {
    return collection.getFilteredByTag("posts").reverse();
  });

  eleventyConfig.setLiquidOptions({
    dynamicPartials: true,
    strict_filters: true,
  });

  // Shortcodes/Helpers:
  eleventyConfig.addShortcode("readableDate", dateHelpers.readableDate);
  eleventyConfig.addShortcode(
    "machineReadableDate",
    dateHelpers.machineReadableDate
  );
  eleventyConfig.addShortcode("projectDate", dateHelpers.projectDate);

  eleventyConfig.addShortcode("previewText", generalHelpers.previewText);
  eleventyConfig.addShortcode("isSameString", generalHelpers.isSameString);
  eleventyConfig.addShortcode("eq", generalHelpers.eq);
  eleventyConfig.addShortcode("or", generalHelpers.or);
  eleventyConfig.addShortcode("not", generalHelpers.not);

  eleventyConfig.addShortcode("shortUrl", portfolioHelpers.shortUrl);
  eleventyConfig.addShortcode("statusColor", portfolioHelpers.statusColor);
  eleventyConfig.addShortcode("isProject", portfolioHelpers.isProject);

  eleventyConfig.addShortcode("readMore", blogHelpers.readMore);

  eleventyConfig.addShortcode("twitter", embedHelpers.twitter);
  eleventyConfig.addShortcode("glitch", embedHelpers.glitch);

  // In progress, create custom start_date, end_date filter
  eleventyConfig.addCollection(
    "portfolioSorted",
    portfolioHelpers.sort.bind(this, false)
  );

  return {
    dir: {
      input: "build",
      output: "dist",
    },
    templateFormats: [
      "md",
      "css",
      "js",
      "hbs",
      "njk",
      "gif",
      "jpg",
      "jpeg",
      "png",
      "mp3",
      "mp4",
      "pdf",
      "vtt",
    ],
  };
};
