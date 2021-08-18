# Trie Class

## Question

Given a positive number, return its complementary number.
Note: The complement of a number is the number that results from flipping every bit in the original number. (i.e. zero bits become one bits and one bits become zero bits).

Ex: Given the following number…

```
number = 27, return 4.
27 in binary (not zero extended) is 11011.
Therefore, the complementary binary is 00100 which is 4.
```

To solve this problem we can use bit manipulation. We can iterate through all the bits of our given number and, for each bit, we can reverse its value (i.e. a one bit becomes zero and a zero bit becomes a one) and add its associated weight (i.e. if this is the least significant bit it will contribute a weight of 20) to our result. Once we’ve iterated through our entire number we can return our result. To iterate through all the bits of a number we can use a loop that continues while our number is greater than zero. Every time we enter this loop, we have a bit to process. To determine whether or not the least significant bit of a number is zero or one we can simply check if the current number is even or odd (an even number’s least significant bit will always be zero whereas an odd number’s least significant bit will always be one). Once we have the least significant bit we can XOR or it with one which will effectively flip (this is because 1 ^ 0 = 1, in the event of an odd number, and 1 ^ 1 = 0, in the event of an even number). Now that we’ve extracting our least significant bit and successfully flipped it, we just need to ensure we add to our running sum the weight associated with the current bit which can be tracked using a power variable. As we move through the bits in our number each bit holds a weight of 2N where N is the bit index we’re at in our given number (starting from the least significant bit i.e. the right-most bit). This can be accomplished very simply by starting our power variable at one (since 20 is one) and multiplying it by two each iteration of our loop (which can also be accomplished by left-shifting our power variable by one bit). Finally the last thing to do is truncate the bit we just processed from our original number which can be accomplished by dividing by two or right-shifting our number by one bit.

```
public int complementaryNumber(int number) {
    int result = 0;
    int power = 1;
    while(number > 0) {
        result += power * ((number % 2) ^ 1);
        power = power <<= 1;
        number >>= 1;
    }

    return result;
}
```

## Big-O Analysis

**Runtime:** O(logN) where N is the origin number we’re given.
**Space complexity:** O(1) or constant.
