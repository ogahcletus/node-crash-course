const people = ['Cletus', 'Mary', 'Mercy', 'Clement'];
const ages = [45, 40, 17, 15, 1]
console.log(people)

//module.exports = people

//To export multiple variables or items:

module.exports = {

    people: people,    // names dont have to be the same
    ages: ages
}