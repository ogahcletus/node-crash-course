const fs = require('fs');

/*
//Reading files (takes two arguments)
fs.readFile('./docs/blog1.txt', (err, data) =>{
    if(err){
      console.log(err)
    } 
      //console.log(data)  this will output a buffer 

      console.log(data.toString())
})



//Writing files ( Takes three arguments)

fs.writeFile('./docs/blog1.txt', 'Pls Cletus, Dont give up!', () => {
    console.log('file written')
})

//Write to new files

fs.writeFile('./docs/blog2.txt', 'May my enemies turn their back from me!', () => {
    console.log('new file written')
})



//Directories

//Good practice to always check if folder exist so the coe wont throw an error
if(!fs.existsSync('assets')) {
fs.mkdir('./assets', (err) => {
    if(err) {
        console.log(err)
    }
        console.log('folder created..')
})

} else {

    fs.rmdir('./assets', (err) =>{
        if(err) {
            console.log(err)
        }
            console.log('file deleted')
    })

}


*/

//Deleting files

//Good practice to check if file exist before deleting

if(fs.existsSync('./docs/deleteme.txt')){
    fs.unlink('./docs/deleteme.txt', (err) => {
        if(err){
            console.log(err)
        }
            console.log('file deleted')
    })
}
    


