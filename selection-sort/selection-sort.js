// Create our unsorted array
const unsortedArray = [];

// seed data in unsortedArray
for (let i = 0; i < 10; i++) {
  unsortedArray.push(Math.round(Math.random() * 50));
}

//ECHO OUT - log out unsorted values
console.log("unsorted: " + unsortedArray);

//TODO: create selectionSort() function
function selectionSort(array) {
  //start by tracking the index of the smallest number, really just iteration
  //then loop thru again to find the actual smallest number in array by checking if next element is smaller than starting 1st/subsequent previous element
  for (let i = 0; i < array.length; i++) {
    let smallest = i;
    console.log("tracking smallest index: " + smallest);
    console.log("tracking smallest value: " + array[smallest]);
    for (let j = i + 1; j < array.length; j++) {
      console.log("j value: " + array[j]);
      if (array[j] < array[smallest]) {
        smallest = j;
        console.log("array[" + j + "]: " + array[j] + " is smaller!");
      }
    }
    //check if smallest is actually the 1st element
    //if it is nothing else needed
    //but if it's not, swap the elements
    if (smallest != i) {
      let temp = array[i];
      array[i] = array[smallest];
      console.log("swapped, array[" + i + "]: " + array[i]);
      array[smallest] = temp;
      console.log("swapped array[" + smallest + "]: " + array[smallest]);
    }
  }
  //return sorted array
  return array;
}

//INITIALIZATION - kick it off
const sorted = selectionSort(unsortedArray);

//ECHO OUT - log out sorted values
console.log("POST sorted: " + sorted);
