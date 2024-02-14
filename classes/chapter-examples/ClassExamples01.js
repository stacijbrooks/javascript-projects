//Try adding new properties inside constructor.
class Astronaut {
   constructor(name, age, mass){
     this.name = name;
     this.age = age;
     this.mass = mass;
   }
}

let fox = new Astronaut('Fox', 7, 12);

console.log(fox);
console.log(fox.age, fox.color);

Astronaut.age = 9;
Astronaut.color = 'red';

console.log(fox);
console.log(fox.age, fox.color);

//Try modifying or adding properties below.