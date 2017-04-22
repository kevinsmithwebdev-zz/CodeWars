function animals(heads, legs){
  var chickens = (4 * heads - legs)/2;
  var cows = heads - chickens;
  
  if (heads < 0 || legs < 0 || legs%2 != 0 || chickens < 0 || cows < 0)
    return "No solutions";
  else
    return [chickens, cows];
}