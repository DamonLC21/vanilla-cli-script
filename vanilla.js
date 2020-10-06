#! /usr/bin/env node 
const fs = require('fs')
const projectName = process.argv[2]
const path = `/${projectName}`

console.log('Creating project with node.js -- Loading') 

const createDirError = error => {
    if(error){
        console.log('An error occured: ', error)
    } else {
        console.log(`Your project has been created! Try <cd ${projectName}> to access your project. `)
    }
}

const createFileError = error => {
    if(error){
        console.log('An error occured: ', error)
    } else {
        console.log(`Your project has been created! Try <cd ${projectName}> to access your project. `)
    }
}
const createDir = directory => {
    fs.mkdirSync(process.cwd() + directory, { recursive: true }, createDirError)
}

const createFile = (fileName, content) => {
    fs.writeFile(`./${projectName}/${fileName}`, content, createFileError)
}

if(projectName){
    createDir(path)
    createFile('index.js', 'console.log(\"Hello World\")')
} else {
    console.log('You must add the project name as an argument. ex. vanilla <project-name>')
}