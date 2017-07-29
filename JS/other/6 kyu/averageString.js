function averageString(str) {
  const NUMS = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
  
  var numArr = str.split(" ");
  var hasBadNum = false;
  
  var average = numArr.reduce( function(sum, value) {
    if (NUMS.indexOf(value)==-1)
      hasBadNum = true;
    return sum + NUMS.indexOf(value)/numArr.length;
  }, 0);
  
  if (hasBadNum)
    return "n/a";
  else
    return NUMS[Math.floor(average)];
}