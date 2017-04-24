function divisors(num){

  var divArr = [];
  var div = 2;
  var numSqrt = Math.sqrt(num);

  while (div < numSqrt) {
    if (num % div === 0) {
      divArr.push(div, num/div);
    }
    div++;
  }
  if (div === numSqrt) {
    divArr.push(div);
  }
  if (divArr.length > 0) {
    return divArr.sort( function(a, b) { return a - b; });
  } else {
    return num + ' is prime';
  }
}