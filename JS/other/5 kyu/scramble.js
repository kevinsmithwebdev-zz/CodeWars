function scramble(str1, str2) {
  var arr1 = str1.split('').sort();
  var arr2 = str2.split('').sort();
  var i = str1.length;
  var j = str2.length;
  
  while (i && j) {
    if (arr1[i-1] === arr2[j-1]) {
      i--;
      j--;
    } else if (arr1[i-1]  arr2[j-1]) {
      return false;
    } else {
      i--;
    }
  }
  if (j===0) {
    return true;
  }
  return false;
}