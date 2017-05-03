function countPositivesSumNegatives(input) {

  if (input==null) return [];
  if (input.length==0) return [];  
  let sumNeg = 0;
  let countPos = 0;
  input.map(num => (num>0)?countPos++:sumNeg+=num);
  return [countPos, sumNeg];
}