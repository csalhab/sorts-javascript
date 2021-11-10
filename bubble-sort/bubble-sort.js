// Create array that will hold unsorted values
const unsortedArray = [];

// seed data in unsortedInputArray
for (let i = 0; i < 100; i++) {
  unsortedArray.push(Math.round(Math.random() * 100));
}

console.log("unsortedArray values: " + unsortedArray);

// TODO: create bubble sort array function
const bubbleSort = (array) => {
  console.log("inside bubbleSort array function, array received: " + array);

  //bubble sort compares adjacent values
  //if item that's before is greater than the item that follows it
  //then swap the items
  //in order to swap, must first store item that's before temporarily
  //must do all this in a loop

  //must perhaps wrap loop inside another loop to do entire array several times

  //return array when swapping done
  return array;
};

// const sorted = bubbleSort(unsortedArray);
//good example to show how just for loop is not enough
//join() returns an array as a string.
//join() does not change the original array.

const myArray = [3, 2, 1];
console.log("Pre Sort Array:", myArray.join(" "));
const sorted = bubbleSort(myArray);
console.log("Post Sort Array:", sorted.join(" "));
console.log("DONE!");
