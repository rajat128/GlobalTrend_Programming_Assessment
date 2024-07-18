function isAnagram(s1, s2) {
  const sort1 = s1.toLowerCase().split("").sort().join("");
  const sort2 = s2.toLowerCase().split("").sort().join("");
  return sort1 === sort2;
}
let s1 = "expect";
let s2 = "except";
console.log(isAnagram(s1, s2));
