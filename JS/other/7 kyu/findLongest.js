function findLongest(array) {
  return array.reduce((acc, val) => { return Math.max(numDigits(val)>numDigits(acc))?val:acc} )
  
  function numDigits(x) {
    return Math.floor(Math.log10(x))+1;
  }
}