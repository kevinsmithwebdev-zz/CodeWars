function alphabetPosition(text) {
  var arr = [];
  
  for (var i = 0 ; i < text.length ; i++) {
    var char = text.charCodeAt(i)

    if (char >= 65 && char <= 90) {
      arr.push(char - 64);
    } else if (char >= 97 && char <= 122) {
      arr.push(char - 96);
    }
  }
  return arr.join(" ");
}