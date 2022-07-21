const { on } = require('events');
const fs = require('fs');

/*
     //readStream
const readStream = fs.createReadStream('./docs/largeFile.txt');

readStream.on('data', (chunk) => {
    console.log('-----NEW CHUNK------');
    console.log(chunk); // output a buffer format

    //To output in a readable format use toString()

    console.log(chunk.toString())
})



// To output in a readable format without using toString(), use utf8 encoding as shown below

const readStream = fs.createReadStream('./docs/largeFile.txt', {encoding: 'utf8'});

readStream.on('data', (chunk) => {
    console.log('-----NEW CHUNK------');
    console.log(chunk); 

})


        //writeStream
const readStream = fs.createReadStream('./docs/largeFile.txt', {encoding: 'utf8'});
const writeStream = fs.createWriteStream('./docs/blog4.txt');

readStream.on('data', (chunk) => {
    console.log('-----NEW CHUNK------');
    console.log(chunk); 

    writeStream.write('-----NEW CHUNK------');
    writeStream.write(chunk);

})

*/

//PIPING - a shorter way to pass data from a readable to a writable stream

const readStream = fs.createReadStream('./docs/largeFile.txt', {encoding: 'utf8'});

const writeStream = fs.createWriteStream('./docs/blog5.txt');


readStream.pipe(writeStream);

