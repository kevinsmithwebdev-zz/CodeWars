function secretMap(sp){
  var gold = 0;
  var pirates = 0;
  
  sp.map( function(loc) {
    if (loc[0]=="pirate") pirates++;
    else if (loc[0]=="pile_of_gold") gold++;
  });

  return "count of pirates: " + pirates + " and the count of gold piles: " + gold;
}