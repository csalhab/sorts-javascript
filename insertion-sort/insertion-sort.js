// Create our unsorted array
const unsortedArray = [];

// seed data, generate 15 random integers in the range of 0 to 50, into the unsorted array
for (let i = 0; i < 15; i++) {
  unsortedArray.push(Math.round(Math.random() * 50));
}

console.log("PRE unsorted: " + unsortedArray);

// TODO: create insertionSort() function
function insertionSort(inputArray) {
  for (let i = 1; i < inputArray.length; i++) {
    // set current to be the first element in our unsortedArray
    let current = inputArray[i];
    // set j to hold the previous element of our sortedArray
    let j = i - 1;
    while (j > -1 && current < inputArray[j]) {
      inputArray[j + 1] = inputArray[j];
      j--;
    }
    inputArray[j + 1] = current;
    console.log("insertionSort: " + inputArray);
  }
  return inputArray;
}
//INITIALIZATION - kick it off
const sortedArray = insertionSort(unsortedArray);

//ECHO OUT - log out values
console.log("Post Sort: ", sortedArray.join(" "));
