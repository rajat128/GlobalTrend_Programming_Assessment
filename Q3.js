function flatIt(array) {
  return array.flat(Infinity);
}
let array = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10]]];
console.log(flatIt(array));
