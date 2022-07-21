


const greet = (name) => {

    console.log(`Hello ${name}`) //template literals ``
}

greet("Cletus")

setTimeout(() => {greet('Janet')}, 3000)