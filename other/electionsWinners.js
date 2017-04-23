function electionsWinners(votes, k) {

  votes.sort(function(a, b) { return b-a; });
  
  if (k==0) return (votes[0]!=votes[1])? 1 : 0;
  
  for (var i = 1 ; i <votes.length ; i++) {
    if (votes[i]+k <= votes[0])  break;
  }
  return i;
}