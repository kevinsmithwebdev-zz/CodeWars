function XO(str) {
    return (str.match(/x/ig) || []).length === (str.match(/o/ig) || []).length;
}