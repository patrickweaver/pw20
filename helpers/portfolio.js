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
  }
  
}