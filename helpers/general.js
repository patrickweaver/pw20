module.exports = {
  
  eq: function() {
    const args = Array.prototype.slice.call(arguments, 0, -1);
    return args.every(function (expression) {
      return args[0] === expression;
    });
  }
}