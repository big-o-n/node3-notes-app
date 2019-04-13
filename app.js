const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')


//console.log(process.argv)
yargs.version('1.1.0')

//Create add command
yargs.command({
    command : 'add',
    describe : 'Add a new note',
    builder : {
        title : {
            describe : 'Note title',
            demandOption : true,
            type : 'string'
        },
        body : {
            describe : 'Body of the Note',
            demandOption : true,
            type : 'string'
        }
    },
    handler(argv){
        //console.log('Title : '+ argv.title + '\nBody : ' + argv.body)
        notes.addNote(argv.title, argv.body)
    }
})
//Create a remove command
yargs.command({
    command : 'remove',
    describe : 'Remove a new note',
    builder : {
        title : {
            describe : 'remove',
            demandOption : true,
            type : 'string'
        }
    },
    handler(argv){
        //console.log('Removing a new note !')
        notes.removeNote(argv.title)
    }
})

//Create a list command
yargs.command({
    command : 'list',
    describe : 'List Notes',
    handler(){
        //console.log('Listing all the notes !')
        notes.listNotes()
    }
})

//Create a read command
yargs.command({
    command : 'read',
    describe : 'Read Notes',
    builder : {
        title : {
            describe : 'read',
            demandOption : true,
            type : 'string'
        }
    },
    handler(argv){
        //console.log('Read the Notes !')
        notes.readNote(argv.title)
    }
})

//console.log(yargs.argv)
yargs.parse();