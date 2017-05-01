var number = function(busStops){
  // Good Luck!
  var num=0;
  for(var i=0;i<busStops.length;i++){
      num+=busStops[i][0]-busStops[i][1]
  }
  return num;
}