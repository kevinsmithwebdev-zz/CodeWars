function remove(s){
  if(s[s.length-1] == "!")
  {
    s = s.slice(0, s.length-1);
  }
  return s;
}