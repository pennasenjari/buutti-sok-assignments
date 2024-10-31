const person1 = {
  name: "Petri",
  age: 36,
  role: "Instructor"
};

console.log(person1);
const person2 = person1; // reference to person1 (same ase person1)
console.log(person2); 
person2.age = 44;
console.log(person1);

const person3 = {...person1}; // new object
person3.age = 55;
console.log(person3); // age changed
console.log(person1); // age did not change

const person4 = {...person1, name: "Kalle"}; // name changed
console.log(person4);
const person5 = {name: "Kalle", ...person1}; // name did not change
console.log(person5);
