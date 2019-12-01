module.exports = {
  
  statusColor: function(status) {
    console.log("&#&#&#&#&#&#&#&", status)
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
  
  isProject: function() {
    
    console.log("**********", this);
    
    if (this === 'project') {
      return true;
    } else {
      return false;
    }
  }
  
}