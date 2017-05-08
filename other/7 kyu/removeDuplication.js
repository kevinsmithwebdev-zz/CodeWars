function removeDuplication(arr){
  var myArr = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr.filter(function(x){return x==arr[i]}).length==1)
      myArr.push(arr[i]);
  }
  return myArr;
}