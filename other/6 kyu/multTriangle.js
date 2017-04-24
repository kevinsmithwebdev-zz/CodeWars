function multTriangle(n) {
  const s = Math.pow(n*(n + 1) >> 1, 2);
  const d = Math.pow((n + 1) >> 1, 4);
  return [s, s - d, d];
}