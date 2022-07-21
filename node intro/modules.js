/*
// Modules & require
const people1 = require('./people')



console.log(people1)

console.log(people1.people, people1.ages)



//A nice way to import multiple different things from a different file is to use destructuring

//For extracting only single property
//const {people} = require('./people') 

//For extracting more items:

const {people, ages} = require('./people')

console.log(people, ages)

*/

//For Built -in Node Modules

const os = require('os');

console.log(os)

console.log(os.platform(), os.homedir())