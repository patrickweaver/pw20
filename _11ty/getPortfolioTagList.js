module.exports = function (collection) {
  let statusTagSet = new Set();
  let tagSet = new Set();
  collection.getAll().forEach(function (item) {
    if ("tags" in item.data) {
      let tags = item.data.tags;

      tags = tags.filter(function (item) {
        switch (item) {
          // this list should match the `filter` list in tags.njk
          case "all":
          case "posts":
            return false;
        }

        return true;
      });

      for (const tag of tags) {
        const initChar = tag?.[0];
        if (initChar.toUpperCase() === initChar) {
          statusTagSet.add(tag);
        } else {
          tagSet.add(tag);
        }
      }
    }
  });

  return [...statusTagSet, ...tagSet];
};
