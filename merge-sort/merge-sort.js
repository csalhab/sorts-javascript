// Create our unsorted array
const unsortedArray = [];

// seed data, random integers in the range of 0 to 15, into the unsorted array
for (let i = 0; i < 15; i++) {
  unsortedArray.push(Math.round(Math.random() * 15));
}

console.log("Pre Sort: " + unsortedArray);

// TODO: create mergeArrays() function to merge sorted values
const mergeArrays = (leftArray, rightArray) => {
  //create new array that our sorted array values from left and right will go into
  const resultArray = [];

  //keep track of what index we're at in each array for the following loop
  let leftIndex = 0;
  let rightIndex = 0;

  //as long as there is at least one value left in both arrays, loop
  while (leftIndex < leftArray.length && rightIndex < rightArray.length) {
    //if the value of the leftArray at its current index is less than the value of the rightArray at its current index, that means the leftArray value should be pushed into the resultArray
    if (leftArray[leftIndex] < rightArray[rightIndex]) {
      resultArray.push(leftArray[leftIndex]);
      // Now that we've sorted the leftArray at that index, let's move onto the next one
      leftIndex++;
    } else {
      //else if the rightArray value is less than the leftArray value, push that right value into the resultArray instead and move onto the next index of the rightArray
      resultArray.push(rightArray[rightIndex]);
      rightIndex++;
    }
  }
  // the resultArray may not be sorted just yet, but it's closer to being sorted so the splitArray() function can split it and sort it again
  // since the while loop may not have gotten to every index of the leftArray or rightArray arrays, we concatenate the leftover values back into resultArray
  return resultArray
    .concat(leftArray.slice(leftIndex))
    .concat(rightArray.slice(rightIndex));
};

// TODO: create splitArray() function
//split unsorted array until ending up with multiple arrays that only contain one element
const splitArray = (array) => {
  // if incoming array is empty, it doesn't need to be sorted, so return it
  // this must be in place, or the recursive function calls will never end
  if (array.length <= 1) {
    return array;
  }

  // get index of the middle point of the array so we can split it in half
  const middle = Math.floor(array.length / 2);

  // split the array in half so we can compare values of smaller arrays and merge them together sorted later
  const left = array.slice(0, middle);
  const right = array.slice(middle);
  //NOTE:
  //slice() returns selected elements in an array, as a new array.
  //slice() selects from a given start, up to a (not inclusive) given end.
  //slice() does not change the original array.

  // use recursion to continuously split left and right arrays in half and then sort with mergeArrays() until there's nothing left to sort and return the finished/sorted array
  return mergeArrays(splitArray(left), splitArray(right));
};

//INITIALIZATION - kick it off
const sorted = splitArray(unsortedArray);

//ECHO OUT - log out values
console.log("Post Sort: ", sorted.join(" "));
console.log("DONE!!");
