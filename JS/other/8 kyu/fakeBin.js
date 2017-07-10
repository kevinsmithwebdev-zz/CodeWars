function fakeBin(x){
  return x.replace(/([0-4])|([5-9])/g, function(m, N1, N2) {
    return (N1) ? '0' : '1'; 
  });;
}