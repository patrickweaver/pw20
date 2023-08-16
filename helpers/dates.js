const moment = require("moment");

function readableDate(date) {
  return moment(new Date(date)).utcOffset(0).format("MMMM D, YYYY");
}

function machineReadableDate(date) {
  return moment(new Date(date)).utcOffset(0).format("YYYY-MM-D");
}

function projectDate(startDate, endDate) {
  const startYear = startDate
    ? moment(new Date(startDate)).format("YYYY")
    : null;
  const endYear = endDate ? moment(new Date(endDate)).format("YYYY") : null;
  if (endYear) {
    if (endYear != startYear) {
      return startYear + " - " + endYear;
    }
  }

  if (startYear) {
    return startYear;
  }

  return "";
}

module.exports = {
  readableDate,
  machineReadableDate,
  projectDate,
};
