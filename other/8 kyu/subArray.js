function sumArray(array) {
  if (array == null || array.length<3) return 0;
  
  return array.sort(function(a, b) { return a-b; })
      .reduce(function(acc, num) {return acc += num; }) -
      (array[0] + array[array.length-1]);
}