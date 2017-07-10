function isOpposite(s1,s2) {
  if (s1.length==0 || s1.length!=s2.length)
    return false; 
  return s1 == s2.split("").map( function(x) { return (x>='a' && x<='z') ? x.toUpperCase() : x.toLowerCase(); }).join("");
}