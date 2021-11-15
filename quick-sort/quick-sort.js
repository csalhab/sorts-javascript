// Create our input data
const unsortedInputArray = [];

// seed data in unsortedInputArray
for (let i = 0; i < 5; i++) {
  unsortedInputArray.push(Math.round(Math.random() * 5));
}

console.log("PRE unsorted: " + unsortedInputArray);

//TODO: create quickSort function
const quickSort = (array) => {
  console.log("quickSort array: " + array);
  // if input array is empty, it doesn't need to be sorted, so return it
  // this must be in place, or the recursive function calls will never end
  if (array.length <= 1) {
    return array;
  }

  // use `.splice()` to pull a single element out of the input array at random
  // this will become our pivot value, meaning we will attempt to sort the array based on a value being greater than or less than this value
  const pivot = array.splice(Math.floor(Math.random() * array.length), 1);
  console.log("pivot: " + pivot);

  // we create two empty arrays, one to be populated with all the values less than or equal to the pivot value (left), and the other to be populated with all of the values greater than the pivot (right)
  const left = [];
  const right = [];

  // loop through array and push each value into the left or right arrays based on the pivot value
  //forEach() calls a function for each element in an array so used array function here
  array.forEach((el) => {
    console.log("el: " + el);
    if (el <= pivot) {
      left.push(el);
    } else {
      right.push(el);
    }
  });
  console.log("left: " + left);
  console.log("right: " + right);

  // since the array will likely not be sorted the first time going through this, we recursively call the quickSort() function on the left and right arrays, which will then run through this process over and over again until the input array is less than 1, which indicates that the initial array has been sorted and we can return it out of the function
  return quickSort(left).concat(pivot, quickSort(right));
};

//INITIALIZATION - kick it off
const sorted = quickSort(unsortedInputArray);

//ECHO OUT - log out values
console.log("POST sorted: " + sorted.join(" "));
