function hofstadterQ(n) {
  if (n<=2) return 1;
  
  var arrQ = [1, 1];
  
  for (i = 2; i < n; i++) {
    arrQ.push(arrQ[i-arrQ[i-1]]+arrQ[i-arrQ[i-2]]);
  }
  return arrQ[n-1];
}