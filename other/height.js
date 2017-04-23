function height (n){
  var catHeight = 2000000;
  var nextCat = catHeight;
  for (var i = 0 ; i < n ; i++) {
    nextCat /= 2.5;
    catHeight += nextCat;
  }
  return catHeight.toFixed(3);
}