function getCount(str) {
  let match = str.match(/[aeiou]/g);
  if (match)
    return match.length;
  else
    return 0;
}