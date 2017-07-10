function cakes(recipe, available) {
  var maxCakes = Infinity;
  
  for (var ingredient in recipe) {
    if (available[ingredient] == undefined) {
      return 0;
    } else {
      maxCakes = Math.min(maxCakes, available[ingredient]/recipe[ingredient])
    }
  }
  return Math.floor(maxCakes);
}