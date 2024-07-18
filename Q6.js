function Capitalize(s) {
  return s
    .split(" ")
    .map((char) => char.charAt(0).toUpperCase() + char.slice(1))
    .join(" ");
}

console.log(
  Capitalize("global trend programming profile assessment questions")
);
