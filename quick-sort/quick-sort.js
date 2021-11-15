// Create our input data

// seed data in unsortedInputArray

//TODO: create quickSort function
// if input array is empty, it doesn't need to be sorted, so return it
// this must be in place, or the recursive function calls will never end

// use `.slice()` to pull a single element out of the input array at random
// this will become our pivot value, meaning we will attempt to sort the array based on a value being greater than or less than this value

// we create two empty arrays, one to be populated with all the values less than or equal to the pivot value (left), and the other to be populated with all of the values greater than the pivot (right)

// loop through array and push each value into the `left` or `right` arrays based on the pivot value

// since the array will likely not be sorted the first time going through this, we recursively call the quickSort() function on the left and right arrays, which will then run through this process over and over again until the input array is less than 1, which indicates that the initial array has been sorted and we can return it out of the function

//INITIALIZATION - kick it off

//ECHO OUT - log out values
