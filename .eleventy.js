const { feedPlugin } = require("@11ty/eleventy-plugin-rss");
const handlebarsPlugin = require("@11ty/eleventy-plugin-handlebars");

// Helpers:
const generalHelpers = require("./helpers/general");
const dateHelpers = require("./helpers/dates");
const portfolioHelpers = require("./helpers/portfolio");
const blogHelpers = require("./helpers/blog");
const embedHelpers = require("./helpers/embed");

const feedOptions = {
  type: "atom", // or "rss", "json"
  outputPath: "/feed.xml",
  collection: {
    name: "posts", // iterate over `collections.posts`
    limit: 10, // 0 means no limit
  },
  metadata: {
    language: "en",
    title: "Patrick Weaver: Blog",
    subtitle: "",
    base: "https://patrickweaver.net/blog/",
    author: {
      name: "Patrick Weaver",
    },
  },
};

module.exports = function (eleventyConfig) {
  // Atom feed
  eleventyConfig.addPlugin(feedPlugin, feedOptions);
  eleventyConfig.addPlugin(feedPlugin, {
    ...feedOptions,
    type: "rss",
    outputPath: "/rss.xml",
  });
  eleventyConfig.addPlugin(feedPlugin, {
    ...feedOptions,
    type: "json",
    outputPath: "/feed.json",
  });
  eleventyConfig.addPlugin(handlebarsPlugin);

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
  eleventyConfig.addShortcode(
    "linkWithLineBreaks",
    portfolioHelpers.linkWithLineBreaks
  );

  eleventyConfig.addShortcode("readMore", blogHelpers.readMore);

  eleventyConfig.addShortcode("twitter", embedHelpers.twitter);

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
      "m4a",
      "mp3",
      "mp4",
      "otf",
      "pdf",
      "vtt",
      "txt",
    ],
  };
};
