function findMultiples(int,limit){
  var arr = [];
  var mult = int;
  while (mult <= limit) {
    arr.push(mult);
    mult+=int;
  }
  return arr;
}