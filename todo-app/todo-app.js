const todos = [{
    text:'Order rabbit food',
    completed: true
}, {
    text:'Clean kitchen',
    completed: true
}, {
    text:'Running',
    completed: false
}, {
    text:'Sleep',
    completed: false
}, {
    text:'Eat',
    completed: true
}]

const incompleteTodos = todos.filter(function (todo) {
    return todo.completed
})


const summary = document.createElement('h2')
summary.textContent = `You have ${incompleteTodos.length} todos left`
document.querySelector('body').appendChild(summary)

todos.forEach(function (todo) {
    const p = document.createElement('p')
    p.textContent = todo.text
    document.querySelector('body').appendChild(p)
})


// You have 2 todos left (p element)
// Add a p for each todo above (use text value)

// const ps = document.querySelectorAll('p') 
// ps.forEach(function(ps){
//     if (ps.textContent.includes('the')) {
//         ps.remove()
//     }
// })