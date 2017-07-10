function find_average(array) {
  return array.reduce( ( acc, cur ) => acc+= cur)/array.length;
}