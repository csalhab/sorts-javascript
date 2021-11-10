# Sorts - Javascript

## Description

Javascript Sorts Information.

## Table of Contents

- [Description](#description)
- [Bubble Sort](#bubble-sort)
- [Merge Sort](#merge-sort)
- [Quick Sort](#quick-sort)

---

## Bubble Sort

Bubble Sort is a common, comparison algorithm and is useful to know but it runs in Big O complexity of O(n²) time, making it an inefficient algorithm for larger lists.

Every pair of adjacent values are compared, and then the two values swap positions if the first value is greater than the second. This way during each pass through the array, the largest value “bubbles up” to the top/right-side, and after each pass the elements furthest to the right are in the correct order.

For example: given the following array:

    const unsortedArr = [7,4,1,5,8];

And using bubble sort to sort the array in ascending order results in:

    const sortedArr = [1,4,5,7,8];

It starts by comparing the first pair of values, 7 & 4. 4 is smaller than 7, so it’ll swap the two values and then move on to compare the next pair of values, 7 & 1. It’ll continue doing this over and over until the array is sorted:

Iteration 1: [**7,4**,1,5,8] → [4,**7,1**,5,8] → [4,1,**7,5**,8] → [4,1,5,**7,8**] → [4,1,5,7,8]

Iteration 2: [**4,1**,5,7,8] → [1,**4,5**,7,8] → [1,4,**5,7**,8] → [1,4,5,**7,8**] → [1,4,5,7,8]

Iteration 3: [**1,4**,5,7,8] → [1,**4,5**,7,8] → [1,4,**5,7**,8] → [1,4,5,**7,8**] → [1,4,5,7,8]

Note that after Iteration 2 the array is already sorted. Bubble Sort, however, needs a final pass through the array to ensure that no other swaps are necessary before returning the array, hence Iteration 3.

### Discussion Points

- **Point 1**: Can you think of a way to solve this problem with force?

- **Good Answer**: The forced solution is to take a look through the array one index at a time and loop through the rest of the array to compare and swap values when needed.

- **Note**: This is very slow for large input arrays, so it's not the _best_ answer, but it's a good start. This will involve using two loops to check the array at a specific index and compare it to the rest of the values after it in the array, even if it's sorted already.

---

- **Point 2**: How would we know if a value in the array needs to be swapped and sorted?

- **Good Answer**: We can identify an unsorted element by checking if it's less than or greater than an element later in the array.

- **Note**: We can assume that any value to the left of the current index in the array is already sorted, so we just need to concern ourselves with the values to the right of the current index.

---

- **Point 3**: What happens when we identify a value that should be swapped with another?

- **Good Answer**: We swap the values by storing one value in a temporary variable and overwriting them at their identified indices in the array.

- **Note**: Some developers will make a specific function to handle swapping values in an array, but it's also okay to do it within the bubble sort algorithm itself. Swapping a value will necessitate a temporary variable to hold one value before it is overwritten by the value it's being swapped with.

---

- **Point 4**: If we don't want to use the force method and implement one that's a bit more efficient, how can we know if the array is sorted early?

- **Good Answer**: We can use a `while` loop and implement a flag that checks if any values haven't been swapped, indicating that the array is now sorted.

- **Note**: The use of a `while` loop can allow us to avoid unnecessary iterations of the function and escape early if it detects the array is sorted. The way to do this is to set a flag at the beginning of the iteration and change its value only if it finds a value that needs to be swapped.

---

## Merge Sort

---

## Quick Sort

---

© 2021 All Rights Reserved.
