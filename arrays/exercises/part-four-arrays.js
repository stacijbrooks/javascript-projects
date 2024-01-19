let holdCabinet1 = ['duct tape', 'gum', 3.14, false, 6.022e23];
let holdCabinet2 = ['orange drink', 'nerf toys', 'camera', 42, 'parsnip'];

//Explore the methods concat, slice, reverse, and sort to determine which ones alter the original array.

//1) Print the result of using concat on the two arrays. Does concat alter the original arrays? Verify this by printing holdCabinet1 after using the method.
console.log(holdCabinet1.concat(holdCabinet2));
console.log(holdCabinet1);
//does not alter original array, but it returns a new array.


//2) Print a slice of two elements from each array. Does slice alter the original arrays?
console.log("Slice of holdCabinet1:", holdCabinet1.slice(0, 2));
console.log("Slice of holdCabinet2:", holdCabinet2.slice(0, 2));
console.log(holdCabinet1);
//It returns a new array that contains the specified slice of elements.


//3) reverse the first array, and sort the second. What is the difference between these two methods? Do the methods alter the original arrays?
let reversedArray1 = holdCabinet1.reverse();
let sortedArray2 = holdCabinet2.sort();
console.log("Reversed holdCabinet1:", holdCabinet1);
console.log("Sorted holdCabinet2:", holdCabinet2);