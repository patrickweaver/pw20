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
  
  isProject: function(tag, options) {
    if (tag === 'project') {
      return options.fn(this);
    } else {
      return options.inverse(this);
    }
  }
  
}