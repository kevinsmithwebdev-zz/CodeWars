function foldTo(distance) {
  const THICKNESS = 0.0001;
  
  if (isNaN(distance)||distance<=0)
    return null;
  if (distance<THICKNESS)
    return 0;
  return Math.ceil(Math.log2(distance/THICKNESS));
}