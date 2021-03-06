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

// console.log('March' < 'January')

const sortNotes = function (notes) {
    notes.sort(function(a, b){
        if(a.title.toLowerCase() < b.title.toLowerCase()) {
            return -1
        } else if (b.title.toLowerCase() < a.title.toLowerCase()) {
            return 1
        } else {
            return 0
        }

    })
}

const findNote = function (notes, noteTitle) {
    return notes.find(function (note, index){
        return note.title.toLowerCase() === noteTitle.toLowerCase()
    })   
}

const findNotes = function(notes, query) {
    return notes.filter(function(note, index) {
        const isTitleMatch = note.title.toLowerCase().includes(query.toLowerCase())
        const isBodyMatch = note.body.toLowerCase().includes(query.toLowerCase())
        return isTitleMatch || isBodyMatch
    })
   
}

sortNotes(notes)
console.log(notes)


// console.log(findNotes(notes, 'work')) 

// const note = findNote(notes, 'office modification')
// console.log(note)


 