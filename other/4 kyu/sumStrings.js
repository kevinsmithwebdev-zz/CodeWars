function sumStrings(a,b) {
  
  var arr1 = [];
  var arr2 = [];
  
  if (a.length > b.length) {
    arr1 = a.split("").map(function(x){return parseInt(x)}).reverse();
    arr2 = b.split("").map(function(x){return parseInt(x)}).reverse();
  } else {
    arr1 = b.split("").map(function(x){return parseInt(x)}).reverse();
    arr2 = a.split("").map(function(x){return parseInt(x)}).reverse();
  }
  arr1.push(0);
  
  for (var i = 0 ; i < arr1.length ; i++) {
    if (!isNaN(arr2[i]))
      arr1[i] += arr2[i];
    if (arr1[i] > 9) {
      arr1[i] -= 10;
      arr1[i+1]++;
    }
  }
  return arr1.reverse().join("").replace(/\b0+/g, '');
}