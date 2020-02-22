let todos = getSavedTodos()

const filters = {
    searchText: '',
    hideCompleted: false
}

renderTodos(todos,filters)

document.querySelector('#search-text').addEventListener('input', (e) => {
    filters.searchText = e.target.value
    renderTodos(todos, filters)
})

document.querySelector('#new-todo').addEventListener('submit', function(e){
    e.preventDefault()
    todos.push({
        id: uuidv4(),
        text: e.target.elements.text.value,
        completed: false
    })
    saveTodos(todos)
    renderTodos(todos, filters)
    e.target.elements.text.value = ''
})

document.querySelector('#hide-completed').addEventListener('change',function(e){
    filters.hideCompleted = e.target.checked
    renderTodos(todos, filters)
})







// You have 2 todos left (p element)
// Add a p for each todo above (use text value)

// const ps = document.querySelectorAll('p') 
// ps.forEach(function(ps){
    //     if (ps.textContent.includes('the')) {
        //         ps.remove()
        //     }
        // })




        //Listen for new todo createion
        // document.querySelector('#add-todo').addEventListener('click',function (e){
        //     console.log('Add a new todo...')
        // })

        //Listen for new todo creation
// document.querySelector('#new-todo-text').addEventListener ('input', function(e){
//     console.log(e.target.value)
// })