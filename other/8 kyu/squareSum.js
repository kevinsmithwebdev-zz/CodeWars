function squareSum(numbers){
  return numbers.reduce( function(a, b) { return a + Math.pow(b, 2) }, 0)
}