function negationValue(string, value) {
  if (value) 
    value = true;
  else
    value = false;
  return ((string.toString().match(/\!/g) || []).length%2===0) ? value : !value;
}