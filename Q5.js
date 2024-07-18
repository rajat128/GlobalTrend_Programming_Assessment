function removeD(array) {
  return array.filter((item, index) => array.indexOf(item) === index);
}
let array = [1, 2, 4, 4, 5, 6, 7, 7, 7, 8, 9, 10];
console.log(removeD(array));
