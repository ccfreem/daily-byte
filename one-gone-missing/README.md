# One Gone Missing

## Question

This question is asked by Amazon.

Given an array that contains all distinct values from zero through `N` except one number, return the number that is missing from the array.

Ex: Given the following array `nums...`

```
nums = [1, 4, 2, 0], return 3.
3 is the only number missing in the array between 0 and 4.
```

Ex: Given the following array `nums...`

```
nums = [6, 3, 1, 2, 0, 5], return 4.
4 is the only number missing in the array between 0 and 6.
```

One approach to solving this problem is using a hash set. We can iterate through all the numbers in our array and place them into a hash set. Then, we can iterate through all values from zero through N ensuring that each value exists inside of our hash set. Once we encounter an element that is not present in our hash set we can return it as our answer since it’s our missing number. While this approach works and runs in O(N) time, it requires O(N) extra space to store every number in our hash set. To improve this approach and reduce our space complexity to constant memory, we can use a simple math formula: Gauss’ formula. Gauss’ formula is a formula that computes the sum of the first N integers and is as follows N \* (N + 1) / 2. Using this formula we can now deduce our missing number. Because Gauss’ formula gives us what our sum should be, we can simply sum all the number we’re given and subtract that sum from what Gauss’ formula expects our sum to be.

```
public int missingNumber(int[] nums) {
    int sum = 0;
    for(int i: nums) {
        sum += i;
    }

    int n = nums.length;
    return (n * (n + 1) / 2) - sum;
}
```

## Big-O Analysis

**Runtime:** O(N) where N is the total number of elements in nums. This results from having to iterate through all numbers in nums in order to determine our actual sum.
**Space complexity:** O(1) or constant.
