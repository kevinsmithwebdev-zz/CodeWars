function whoseMove(lastPlayer, win) {
  if (win)
    return lastPlayer;
  if (lastPlayer == "black")
    return "white";
  else
    return "black";
}