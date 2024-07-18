function fibo(num) {
  const series = [0, 1];
  let i = 2;
  let nextfibo = 0;
  while (i < num) {
    nextfibo = series[i - 1] + series[i - 2];
    series.push(nextfibo);
    i++;
  }
  return series;
}
console.log(fibo(10));
