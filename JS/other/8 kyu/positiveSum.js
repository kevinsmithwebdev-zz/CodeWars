function positiveSum(arr) {
  return arr.reduce(function(sum, value) {
      return sum + ((value>0)?value:0);
    }, 0);
}