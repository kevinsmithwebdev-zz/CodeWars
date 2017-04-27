function permutations(str) {
  
  var results = [];
  var arr = str.split('');

  function permute(arr, memo) {
    var cur, memo = memo || [];

    for (var i = 0; i < arr.length; i++) {
      cur = arr.splice(i, 1);
      if (arr.length === 0) {
        results.push(memo.concat(cur));
      }
      permute(arr.slice(), memo.concat(cur));
      arr.splice(i, 0, cur[0]);
    }
    return results;
  }
  
  permute(arr);
  
  for (var i = 0 ; i < results.length ; i++) {
    results[i] = results[i].join('');
  }
  
  results = results.sort();
  
  for (var i = 0 ; i < results.length-1 ; i++) {
    if (results[i] === results[i+1]) {
      results.splice(i--, 1);
    }
  } 
  
  return results;
}