function last(list){
  if (arguments.length>1)
    list = arguments;
  if (typeof list != "string" && typeof list != "object")
    return list;
  return list[list.length-1];
}