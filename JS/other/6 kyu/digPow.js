function digPow(n, p){
  var sumP = 0;
  n = n.toString();
  
  for (var i = 0 ; i< n.length ; i++) {
    sumP += Math.pow(n[i], p + i);
  }
  
  if((sumP/n) % 1 === 0){
    return (sumP/n);
  } else {
    return -1;
  }  
}