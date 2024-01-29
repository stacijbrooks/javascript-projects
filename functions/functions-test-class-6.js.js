let names = ["Chris", "Jim", "Sally", "Blake"];

// TODO: Write a mapping function
// and pass it to .map()
let firstInitials = function(name) {
  return name[0];
};
let getFirstInitials = names.map(firstInitials);

console.log(firstInitials);