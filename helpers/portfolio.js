function sort(tag, collection) {
  function portfolioCompare(a, b) {
    const aSortDate = a.data?.end_date ?? a.data?.start_date ?? 0;
    const aSort = new Date(aSortDate).getTime();
    const bSortDate = b.data?.end_date ?? b.data?.start_date ?? 0;
    const bSort = new Date(bSortDate).getTime();
    if (aSort > bSort) return -1;
    if (aSort < bSort) return 1;
    return 0;
  }
  if (tag) {
    return collection
      .getFilteredByTag("projects")
      .filter((i) => !!i.data.name)
      .sort(portfolioCompare);
  } else {
    return collection
      .getFilteredByTag("projects", tag)
      .filter((i) => !!i.data.name)
      .sort(portfolioCompare);
  }
}

function shortUrl(url) {
  if (url.substring(0, 4) === "http") {
    return linkWithLineBreaks(url.substring(url.indexOf("//") + 2, url.length));
  } else {
    return linkWithLineBreaks(url);
  }
}

function linkWithLineBreaks(link) {
  return `<span>${link.replaceAll("/", "<wbr/>/")}</span>`;
}

function statusColor(status) {
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
}

module.exports = {
  sort,
  shortUrl,
  linkWithLineBreaks,
  statusColor,
};
