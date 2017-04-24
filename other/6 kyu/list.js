function list(names){ 
  switch (names.length) {
    case 0:
      return "";
      break;
    case 1:
      return names[0].name;
      break;
    default:
      var partial;
      return names.slice(0, names.length-2).reduce(function(acc, val) { return acc + val.name + ", "}, "") + 
        names[names.length-2].name + " & " + names[names.length-1].name;
      break;
  }                   
}