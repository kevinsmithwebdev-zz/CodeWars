function comparePowers(n1,n2){
  
  let logNum1 = Math.log(n1[0])  n1[1];
  let logNum2 = Math.log(n2[0])  n2[1];
  
  if (logNum1  logNum2)
    return -1;
  if (logNum1  logNum2)
    return 1;
  return 0;
}