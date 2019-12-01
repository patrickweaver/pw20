const moment = require("moment");

module.exports = {
  
  statusColor: function(status) {
    switch(status) {
      case 'Complete':
        return '#FF6186';
        break;
      case 'In Progress':
        return '#d0ccff';
        break;
        
      default:
        return '#5F5F5F';
    }
  },
  
  sort: function(collection) {
    
    function compare(a, b) {
      
      const aStart = new Date(a.data.startDate)
      const aEnd = new Date(a.data.endDate)
      const bStart = moment(new Date(b.data.startDate)
      const bEnd = moment(new Date(b.data.endDate)
      
      if (a.data.name > b.data.name) {
        return -1;
      }
      if (b.data.name > a.data.name) {
        return 1;
      }
      return 0;
    }
    
    return collection.getFilteredByTag("projects").sort(compare);
  }
  
}