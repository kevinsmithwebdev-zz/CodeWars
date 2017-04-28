function sumMul(n,m){
  let i=1;
  let mults=0;
  
  while (i*n < m) { mults+=(i++)*n }
  
  return (mults==0)? "INVALID" : mults;
}