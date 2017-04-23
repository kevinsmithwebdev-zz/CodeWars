function rps(p1, p2) {
  var hands = ["rock", "paper", "scissors"];
  var index1 = hands.indexOf(p1)
  var index2 = hands.indexOf(p2);
  
  switch (index1-index2) {
    case 0:
      return "Draw!";
      break;
    case 1:
      return "Player 1 won!";
      break;
    case -1:
      return "Player 2 won!";
      break;
   }
  return "Player " + ((index1<index2)?"1":"2") + " won!";
};