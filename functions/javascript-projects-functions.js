function makeLine(size) {
    let line = '';
for (let i=0; i < size; i++) {
    line += '#';
}
return line;
}
console.log(makeLine(10));


//MAKE SQUARE SIZE
function makeSquare(size) {
    let square = '';
for (i=0; i < size; i++) {
    square += (makeSquare(size) + '\n');
}
}

 
//MAKE RECTANGLE HEIGHT AND WIDTH
function makeRectangle(width, height) {
    let rectangle = '';
for (let i=0; i < height; i++) {
    rectangle += (makeLine(width) + '\n');
}
return rectangle.slice(0,-1);
}