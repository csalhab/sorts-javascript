// Create our unsorted array
const unsortedArray = [];

// seed data, generate 15 random integers in the range of 0 to 50, into the unsorted array
for (let i = 0; i < 15; i++) {
  unsortedArray.push(Math.round(Math.random * 50));
}

// TODO: create insertionSort() function
function insertionSort(inputArray) {
  // sort an array of size n in ascending order
  // start by iterating from unsortedArray[1] to unsortedArray[n]
  // compare the current element (key) to its predecessor
  // if the key element is smaller than its predecessor, compare it to the elements before
  // move the greater elements one position up to make space for the swapped element
  let n = inputArray.length;
  for (let i = 1; i < n; i++) {
    // Choosing the first element in our unsorted subarray
    let current = inputArray[i];
    // The last element of our sorted subarray
    let j = i - 1;
    while (j > -1 && current < inputArray[j]) {
      inputArray[j + 1] = inputArray[j];
      j--;
    }
    inputArray[j + 1] = current;
  }
  return inputArray;
}
//INITIALIZATION - kick it off

//ECHO OUT - log out values
console.log("Post Sort: ");
