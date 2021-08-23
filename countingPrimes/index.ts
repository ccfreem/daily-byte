// Sieve of Eratosthenes
const countPrimesLessThanN = (n) => {
  // Assume all number from 2 up to n are prime
  const primes = Array(n).fill(true);

  // For each prime canidate in our list, starting from 2,
  // eliminate multiples of the current number (since a multiple
  // cannot be prime )
  for (let i = 2; i < Math.sqrt(n); i++) {
    if (primes[i]) {
      for (let j = i; j * i < primes.length; j++) {
        primes[i * j] = false;
      }
    }
  }
  let primeCount = 0;
  for (let i = 2; i < primes.length; i++) {
    if (primes[i]) {
      primeCount++;
    }
  }
  return primeCount;
};
export default countPrimesLessThanN;
