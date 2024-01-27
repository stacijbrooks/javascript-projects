let names = ["Chris", "Jim", "Sally", "Blake", "Paul", "John", "Courtney", "Carly"];

// TODO: Write a mapping function
let getFirstInitial = function (name) {
    return name[0];
};

// Pass the mapping function to .map()
let firstInitials = names.map(getFirstInitial);

console.log(firstInitials);
