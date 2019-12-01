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
      
      const aSort = a.data.end_date ? new Date(a.data.end_date) : (a.data.start_date ? new Date(a.data.start_date) : 0);
      const bSort = b.data.end_date ? new Date(b.data.end_date) : (b.data.start_date ? new Date(b.data.start_date) : 0);
      
      if (aSort > bSort) {
        return -1;
      }
      if (bSort > aSort) {
        return 1;
      }
      return 0;
    }
    
    return collection.getFilteredByTag("projects").sort(compare);
  }
  
}