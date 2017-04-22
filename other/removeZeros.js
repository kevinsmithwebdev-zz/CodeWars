function removeZeros(array) {
  var i = 0;
  var last = array.length - 1;
  
  while (i < last) {
    if (array[i]==0) {
      var element = array[i];
      for (var j = i ; j < array.length-1 ; j++) {
        array[j] = array[j+1];
      }
      array[array.length-1] = element;
      last--;
    } else
      i++;
  }
  return array;
}