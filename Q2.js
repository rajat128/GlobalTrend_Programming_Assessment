
function solve(s) {
  try {
    return eval(s);
  } catch (error) {
    console.error("Error", error.message);
  }
}
console.log(solve("3+5-2"));
