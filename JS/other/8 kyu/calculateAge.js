function  calculateAge(a1, a2) {
  var diff = a2 - a1;
  if (diff == 0)
    return 'You were born this very year!';
  if (diff>0)
    return 'You are ' + diff + ' year' +
      ((diff==1)?'':'s') + ' old.'
  else {
    diff = Math.abs(diff);
    return 'You will be born in ' + diff + ' year' + 
      ((diff==1)?'':'s') + '.';
  }
}