const _ = require('lodash')

//generate random nums
const num = _.random(1, 49)

console.log(num);



//To make a function execute once

greet = _.once(() => {
    console.log('Hello')
})

greet()
greet()