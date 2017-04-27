function factorial(n) {
  var numArr = [1];
  
  for (var i = 2 ; i <= n ; i++) {
    numArr = multArr(numArr, convertArr(i));
    numArr = flattenArr(numArr);
  }
  
  return flattenArr(numArr).join("");

  // *************************

  function convertArr(num) {
    arr = [];
    while (num > 0) {
      arr.unshift(num%10);
      num = Math.floor(num/10);
    }
    return arr;
  }
  function multArr(arr1, arr2) { 
    var newArr = [];
    for (var i = 0 ; i < arr1.length ; i++) {
      for (var j = 0 ; j < arr2.length ; j++) {

        if (newArr[(i + j)] === undefined) {
          newArr.push(arr1[i] * arr2[j]);
        } else {
          newArr[(i + j)] += arr1[i] * arr2[j];
        }
      }
    }
    return newArr;
  }
  function flattenArr(arr) {
    var i = arr.length - 1;
    while (i >= 0) {
      if (arr[i] > 9) {
        if (i > 0) {
          arr[i-1] += Math.floor(arr[i]/10);
          arr[i] = arr[i]%10;
        } else {
          arr.unshift(Math.floor(arr[i]/10));
          arr[i+1] = arr[i+1]%10;
          i++;
        }
      }
      i--;
    } // while
    return arr;
  }
}