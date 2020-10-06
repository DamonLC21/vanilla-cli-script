#! /usr/bin/env node 
const fs = require('fs')
const path = `/${process.argv[2] }`

console.log('Creating project with node.js -- Loading', path) 

const createDirError = error => {
    if(error){
        console.log('An error occured: ', error)
    } else {
        console.log(`Your directory had been created! Try <cd ${path}> to access your project. `)
    }
}

const createDir = directory => {
    fs.mkdirSync(process.cwd() + directory, { recursive: true }, createDirError)
}

createDir(path)