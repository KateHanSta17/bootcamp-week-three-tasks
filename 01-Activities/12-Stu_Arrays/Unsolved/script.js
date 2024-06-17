// WRITE YOUR CODE HERE
const name = 'Andre';
const pets = 3;
const isStudent = true;

const names = ['Andre', 'Karl', 'Rashida', 'Olivia'];

console.log(names);

console.log(names[1]);

console.log(names[0]);

console.log(names[3]);

names[3] = 'Carter';

console.log(`The fourth name is ${names[3]}.`);

console.log(`The length of the array is ${names.length}.`);

console.log(`Welcome to the class ${names[3]}`)

if(names[3] == 'Carter') {
    console.log(`${names[0]} is in the class.`);
}