function startingMark(bodyHeight){
  // Remember: Body height of 1.52 m --> starting mark: 9.45 m
  //           Body height of 1.83 m --> starting mark: 10.67 m
  // All other starting marks are based on these guidelines!
  let x1 = 1.52;
  let x2 = 1.83;
  let y1 = 9.45;
  let y2 = 10.67;
  
  let m = (y2-y1)/(x2-x1);
  let b = y1-m*x1;
  
  let newDist = Math.round((bodyHeight*m + b)*100)/100;
  
  return newDist;

}