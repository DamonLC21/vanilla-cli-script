#! /usr/bin/env node 
const fs = require('fs')
const { resolve } = require('path')
const projectName = process.argv[2]
const path = `/${projectName}`
const boilerHTML = `<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylsheet" href="main.css" />
        <title>Document</title>
    </head>
    <body>
        
        <script src="app.js"></script>
    </body>
</html>`

console.log('Creating project with node.js -- Loading') 

const createDirError = error => {
    if(error){
        console.log('An error occured: ', error)
    } else {
        console.log(`Directory Created -- ${path}`)
    }
}

const createFileError = (fileName, resolve, reject) => error => {
    if(error){
        console.log('An error occured: ', error)
        reject(error)
    } else {
        resolve(`Added a file to ${path} -- ${fileName}`)
    }
}

const createDir = directory => {
    fs.mkdirSync(process.cwd() + directory, { recursive: true }, createDirError)
}

const createFile = (fileName, content) => {
    return new Promise( (resolve, reject) => {
        fs.writeFile(`./${projectName}/${fileName}`, content, createFileError(fileName, resolve, reject))
    })
}

if(projectName){
    createDir(path)
    Promise.all([
        createFile('app.js', 'console.log(\"Hello World\")'),
        createFile('main.css',  '/* start styling with css below! */'),
        createFile('index.html', boilerHTML)
    ]).then(values => {
        console.log('------ Project directory created.')
        console.log(values)
        console.log(`------ Your project has been created! Try <cd ${projectName}> to access your vanilla javascript project.`)
    })
} else {
    console.log('You must add the project name as an argument. ex. vanilla <project-name>')
}