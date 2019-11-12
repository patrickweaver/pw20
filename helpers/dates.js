const moment = require("moment");

module.exports = {
  
  readableDate: function(date) {
    return moment(new Date(date)).format("MMMM D, YYYY"); 
  },
  
  projectDate: function(startDate, endDate) {
    if (endDate) {
      if (endDate != startDate) {
        const startYear = moment(new Date(startDate)).format("YYYY");
        const endYear = moment(new Date(endDate)).format("YYYY");
        return  startYear + " - " + endYear;
      }
    }
    return moment(new Date(startDate)).format("YYYY");
  }
  
}