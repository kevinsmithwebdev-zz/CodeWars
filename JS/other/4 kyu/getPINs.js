function getPINs(observed) {
  var list = [ 
        [ "0", "8" ],
        [ "1", "2", "4"],
        [ "2", "1", "3", "5"],
        [ "3", "2", "6"],                  
        [ "4", "1", "5", "7"],
        [ "5", "2", "4", "6", "8"],   
        [ "6", "3", "5", "9"],   
        [ "7", "4", "8"],
        [ "8", "5", "7", "9", "0"],   
        [ "9", "6", "8"]
      ];
  var args = [];
  observed = observed.split('').map(num => parseInt(num));
  observed.map(arr => args.push(list[arr]));

  function addTo(curr, args) {
    var i, copy, 
        rest = args.slice(1),
        last = !rest.length,
        result = [];
    for (i = 0; i < args[0].length; i++) {
      copy = curr.slice();
      copy.push(args[0][i]);

      if (last) {
        result.push(copy);
      } else {
        result = result.concat(addTo(copy, rest));
      }
    }
    return result;
  }

  var final = addTo([], Array.prototype.slice.call(args));
  
  for (var i = 0 ; i < final.length ; i++)
    final[i] = final[i].join("");
  
  return final;
}