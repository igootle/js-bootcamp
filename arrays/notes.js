const notes = [{
    title: 'My next trip',
    body: 'I would to go to Spain'
}, {
    title: 'Habbits to work on',
    body: 'Exercise. Eating a bit better'
}, {
    title: 'Office modification',
    body: 'Get a new seat'
}]

const findNote = function (notes, noteTitle) {
    return notes.find(function (note, index){
        return note.title.toLowerCase() === noteTitle.toLowerCase()
    })   
}

const note = findNote(notes, 'office modification')
console.log(note)





// console.log(notes.length)
// console.log(notes)



// const index =  notes.findIndex(function (note,index){
  
//     return note.title === 'My next trip'
// })

// console.log(index)


//Counting... 1
// for (let count = 2; count >= 0; count--) {
//     console.log(count)
// }

// for (let count = 0; count <notes.length; count++) {
//     console.log(notes[count])
// }