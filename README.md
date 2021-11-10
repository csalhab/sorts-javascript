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

Bubble Sort is a comparison algorithm and is useful to know but it runs in O(n²) time, making it an inefficient algorithm for larger lists.

Every pair of adjacent values are compared, and then the two values swap positions if the first value is greater than the second. This way during each pass through the array, the largest value “bubbles up” to the top/right-side, and after each pass the elements furthest to the right are in the correct order.

Here’s an example: given the array [7,4,1,5,8] and using bubble sort to sort the array in ascending order. It starts by comparing the first pair of values, 7 & 4. 4 is smaller than 7, so it’ll swap the two values and then move on to compare the next pair of values, 7 & 1. It’ll continue doing this over and over until the array is sorted:

Iteration 1: [**7,4**,1,5,8] → [4,**7,1**,5,8] → [4,1,**7,5**,8] → [4,1,5,**7,8**] → [4,1,5,7,8]

Iteration 2: [**4,1**,5,7,8] → [1,**4,5**,7,8] → [1,4,**5,7**,8] → [1,4,5,**7,8**] → [1,4,5,7,8]

Iteration 3: [**1,4**,5,7,8] → [1,**4,5**,7,8] → [1,4,**5,7**,8] → [1,4,5,**7,8**] → [1,4,5,7,8]

Note that after Iteration 2 the array is already sorted. Bubble Sort, however, needs a final pass through the array to ensure that no other swaps are necessary before returning the array, hence Iteration 3.

...

---

## Merge Sort

---

## Quick Sort

---

© 2021 All Rights Reserved.
