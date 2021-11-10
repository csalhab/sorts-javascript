// Create our input data
const unsortedInputArray = [];

// seed data in unsortedInputArray
for (let i = 0; i < 100; i++) {
  unsortedInputArray.push(Math.round(Math.random() * 100));
}

console.log("unsortedInputArray: " + unsortedInputArray);

// TODO: create bubble sort function

//bubble sort compares adjacent values
//if item that's before is greater than the item that follows it
//then swap the items
//in order to swap, must first store item that's before temporarily
//must do all this in a loop

//must perhaps wrap loop inside another loop to do entire array several times

//return array when swapping done

// const sorted = bubbleSort(unsortedInputArray);
//good example to show how just for loop is not enough
