function validBraces(braces){
  
  var lastStr = "";

  while (lastStr != braces) {
    lastStr = braces;
    braces = braces.replace("()", "");
    braces = braces.replace("[]", "");
    braces = braces.replace("{}", "");
  }
  
  if (braces.length === 0) {
    return true;
  } else {
    return false;
  }
}