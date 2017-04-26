function digital_root(n) {
  
  var sum = 0;
  n = n.toString();
  
  for (var i = 0 ; i < n.length ; i++) {  
    sum += +n[i];
  }
  
  if (sum>9) {
    return digital_root(sum)
  } else {
    return sum;
  }
}