let notes = getSavedNotes()

const filters = {
    searchText: '',
    sortBy: 'byEdited'
}


renderNotes(notes, filters)
const id = uuidv4()
const timestamp = moment().valueOf()

document.querySelector('#create-note').addEventListener('click', function (e){
    notes.push({
    id: id,
    title: '',
    body: '',
    createdAt: timestamp,
    updatedAt: timestamp
    })
    saveNotes(notes)
    'use strict'
   
    // renderNotes(notes, filters)
    location.assign(`edit.html#${id}`)
})



document.querySelector('#search-text').addEventListener('input', function (e){
    filters.searchText = e.target.value
    renderNotes(notes, filters)
})

document.querySelector('#filter-by').addEventListener('change', function(e){
    // console.log(e.target.value)
    filters.sortBy = e.target.value
    renderNotes(notes, filters)
})

window.addEventListener('storage', function(e) {
    if (e.key === 'notes') {
        notes = JSON.parse(e.newValue)
        renderNotes(notes, filters)
    }
})


// now.add(1, 'week').subtract(20, 'days')

// console.log(now.format('MMMM Do, YYYY'))
// console.log(now.fromNow())

// const nowTimestamp = now.valueOf()
// console.log(moment(nowTimestamp).toString())

// console.log(now.format())

// November 3rd, 2003

// now.minute(1)
// console.log(now.minute())
const birthday = moment()
birthday.year(1989).month(6).date(30)
console.log(birthday.format('MMM D, YYYY'))









// document.querySelector('#for-fun').addEventListener('change', function(e){
//     console.log(e.target.checked)
// })

// document.querySelector('#name-form').addEventListener('submit', function (e) {
//     e.preventDefault()
//     console.log(e.target.elements.firstName.value)
//     e.target.elements.firstName.value  =  ''
// })



// document.querySelector('#remove-all').addEventListener('click', function(){
//     document.querySelectorAll('.note').forEach(function(note){
//         note.remove()
//     })
// })