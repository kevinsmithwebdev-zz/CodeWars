function maxPizza(cut) {
  return cut<0 ? -1 : (cut*cut + cut + 2)/2;
}