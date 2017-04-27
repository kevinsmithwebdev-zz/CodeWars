function triangleType(a, b, c){
  var arr = [a, b, c].sort(function(a, b) { return a - b; });
  
  if (arr[2] >= arr[0] + arr[1])
    return 0;
  
  a2 = Math.pow(arr[0], 2);
  b2 = Math.pow(arr[1], 2);
  c2 = Math.pow(arr[2], 2);  
  
  if (c2 === a2 + b2 ) {
    return 2;  
  }
  if (c2 > a2 + b2 ) {
    return 3;  
  }
  return 1;
}