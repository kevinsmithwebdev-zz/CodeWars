function towerBuilder(nFloors) {

  var arr = [];
  
  for (var i = 1 ; i <= nFloors ; i++) {
    arr.push (' '.repeat(nFloors - i) + '*'.repeat(i*2-1) + ' '.repeat(nFloors - i));
  }
  return (arr);
}
