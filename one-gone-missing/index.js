const missingNumber = (arr) => {
  let sum = arr.reduce((a, b) => a + b);
  // Gauss's formula
  // https://en.wikipedia.org/wiki/Gauss%27s_formula
  // computes the sum of the first `N` integers
  //  N * (N + 1) / 2
  const n = arr.length;
  const missing = (n * (n + 1)) / 2 - sum;
  return missing;
};

module.exports = missingNumber;
