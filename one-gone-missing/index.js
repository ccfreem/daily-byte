const missingNumber = (arr) => {
  // Add up all the numbers in the array
  const sum = arr.reduce((a, b) => a + b);

  // Gauss's formula
  // computes the sum of the first `N` integers
  //  N * (N + 1) / 2
  const n = arr.length;
  // Gauss lets us know the ideal total, we know the real total, lets do the math
  const missing = (n * (n + 1)) / 2 - sum;
  return missing;
};

module.exports = missingNumber;
