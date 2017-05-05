function highAndLow(numbers){
   get max and min with the spread operator
  let numArr = numbers.split(' ');
  return Math.max(...numArr) + ' ' + Math.min(...numArr);
}