function TitleCae(s) {
  return s
    .split(" ")
    .map((char) => char.charAt(0).toUpperCase() + char.slice(1).toLowerCase())
    .join(" ");
}

console.log(TitleCae("rAjat pArIhAR "));
