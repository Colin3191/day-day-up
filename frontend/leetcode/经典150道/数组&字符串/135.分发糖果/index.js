export function candy(ratings) {
  const n = ratings.length;
  const res = new Array(n).fill(1);
  for (let i = 1; i < n; i++) {
    if (ratings[i] > ratings[i - 1]) {
      res[i] = res[i - 1] + 1;
    }
  }
  for (let i = n - 2; i >= 0; i--) {
    if (ratings[i] > [ratings[i + 1]]) {
      res[i] = Math.max(res[i], res[i + 1] + 1);
    }
  }
  return res.reduce((a, b) => a + b, 0);
}
