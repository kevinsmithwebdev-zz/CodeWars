function getDartboardScore(x, y) {
  var angle = Math.atan2(x, y) * (180 / Math.PI);
  var slotScores = [  '20', '1', '18', '4', '13',
                      '6', '10', '15', '2', '17',
                      '3', '19', '7', '16', '8',
                      '11', '14', '9', '12', '5'
                   ];
  var distance = Math.sqrt(x*x+y*y);
  
  if (angle < 0) angle+=360;
  
  var slot = parseInt((i+9)/18)%20);
  var score = slotScores[slot];
  console.log("angle = " + angle + " distance = " + distance + " slot = " + slot + " score = " + score);
  if (distance < (12.7/2)) return 'DB'; // bull's eye
  if (distance < (31.6/2)) return 'SB'; // bull 
  if (distance < (198/2)) return score; // inner single zone
  if (distance < (214/2)) return 'T' + score; // triple ring
  if (distance < (324/2)) return score; // outer single zone  
  if (distance < (340/2)) return 'D' + score; // double ring
  return 'X'; // out of bounds
}


console.log(getDartboardScore(-5.43, 117.95));