let names = ["Chris", "Jim", "Sally", "Blake"];

// TODO: Write a mapping function
// and pass it to .map()
let firstInitials = function(name) {
  return name[0];
};
let getFirstInitials = names.map(firstInitials);


let nums = [3.14, 42, 4811];
let halve = function (n) {
  return n/2;
};
// TODO: Write a mapping function
// and pass it to .map()
let halved = nums.map(halve);

console.log(halved);