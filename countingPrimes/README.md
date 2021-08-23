# Counting Primes

## Question

This question is asked by Google.

Given a positive integer N, return the number of prime numbers less than N.

Ex: Given the following `N…`

```
N = 3, return 1.
2 is the only prime number less than 3.
```

Ex: Given the following `N…`

```
N = 7, return 3.
2, 3, and 5 are the only prime numbers less than 7.
```

One potential way to solve this problem would be simply iterating through all our numbers less than N and check if they are prime. For each iteration of this loop we can call a method that will check whether or not the current number, say i, is prime or not. If the method returns true (i.e. that i is a prime number) then we can increment a count to ensure we return the correct count of primes as the end of our loop. The method that verifies whether or not the current candidate i is prime can iterate throughout all values (excluding one) less than the square root of i to see if any numbers are divisors of i. If we find any number that is a divisor of i then i cannot be prime. While this approach works, it runs in O(N \* sqrt(N)) time since the outer loop would run N times and for each of our N candidates we’d call our helper method that would require O(sqrt(N)) time. One way to improve this approach is to use the Sieve of Eratosthenes. The Sieve of Eratosthenes is perfect for our solving our current problem as it’s an algorithm to quickly generate prime numbers and it works as follows:

1. Assume all numbers from two up to N are prime
2. For each prime candidate in our list (starting from two) eliminate multiples of the current number (since if any number is a multiple of the current number it cannot be a prime number. So on the first iteration we’d eliminate four, six, eight, etc).
3. Find the next candidate number in our list (i.e. the next number that has not been eliminated) and repeat the process in step two.

To allow each of our candidate numbers to start off as potential primes, we can utilize a boolean array and initialize each value to be true to represent that originally we will consider all numbers to be prime. Then, we can iterate through all values from two up to the square root of N setting multiples of the current number to false in our boolean array (we can iterate up to square root of N as opposed to all the way to N since for the factors of any number one number will be less than or equal to the square root of the number and the other will be greater than or equal to the square root of the number). Once we’ve done this for every number i less than the square root of N every index in our boolean array that has a value of true represents a prime number. Now all that’s left to do is iterate through our boolean array and count the number of indexes that are set to true and return that count.

```
public int countPrimesLessThanN(int n) {
    boolean[] primes = new boolean[n];
    for(int i = 0; i < primes.length; i++) {
        primes[i] = true;
    }

    for(int i = 2; i < Math.sqrt(n); i++) {
        if(primes[i]) {
            for(int j = i; j * i < primes.length; j++) {
                primes[i * j] = false;
            }
        }
    }

    int primeCount = 0;
    for(int i = 2; i < primes.length; i++) {
        if(primes[i]) {
            primeCount++;
        }
    }

    return primeCount;
}
```

## Big-O Analysis

**Runtime:** `O(N * loglog(N))` where `N` is the number we’re given.
**Space complexity:** `O(N)` where `N` is the number we’re given. This results from our `primes` boolean array.
