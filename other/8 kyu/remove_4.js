function remove(s,n){
  for (var i = 0; i < s.length && n > 0; i++) {
    if (s[i]=='!') {
      s = s.substring(0, i) + s.substring(i+1, s.length);
      n--;
      i--;
    }
  }
  return s;
}