const moment = require("moment");

module.exports = {
  sort: function (tag, collection) {
    function portfolioCompare(a, b) {
      const aSort = a.data.end_date
        ? new Date(a.data.end_date)
        : a.data.start_date
        ? new Date(a.data.start_date)
        : 0;
      const bSort = b.data.end_date
        ? new Date(b.data.end_date)
        : b.data.start_date
        ? new Date(b.data.start_date)
        : 0;

      if (aSort > bSort) {
        return -1;
      }
      if (bSort > aSort) {
        return 1;
      }
      return 0;
    }
    if (tag) {
      return collection.getFilteredByTag("projects").sort(portfolioCompare);
    } else {
      return collection
        .getFilteredByTag("projects", tag)
        .sort(portfolioCompare);
    }
  },

  shortUrl: function (url) {
    if (url.substring(0, 4) === "http") {
      return url.substring(url.indexOf("//") + 2, url.length);
    } else {
      return url;
    }
  },

  statusColor: function (status) {
    switch (status) {
      case "Complete":
        return "#a6ff9e";
      case "In Progress":
        return "#9efff7";
      case "Paused":
        return "#9ea6ff";
      default:
        return "#ffe79e";
    }
  },
};
