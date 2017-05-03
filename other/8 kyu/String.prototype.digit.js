String.prototype.digit = function() {
  if (this.length!=1) return false;
  if (this[0]>='0'&&this[0]<='9') 
    return true;
  else
    return false;
};