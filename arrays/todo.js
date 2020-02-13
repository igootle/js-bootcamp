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


const deleteTodo = function (todos, todoText) {
    const index = todos.findIndex(function (todo){
        return todo.text.toLowerCase() === todoText.toLowerCase()
    })

    if (index > -1) {
        console.log(index)
        todos.splice(index,1)
    }
}

deleteTodo(todos, 'Order rabbit food')
console.log(todos)






// todos.splice(2, 1) 
// console.log(todos.pop())
// todos.push('My new note') 
// todos.shift()
// todos.unshift('My first note')
// console.log(`You have ${todos.length} todos!`)
// todos.forEach(function (todo,index) {
//     const num = index +1
//     console.log(`${num}. ${todo}`)
// })

// for(i=0; i<todos.length; i++) {
//     let num = i+2
//     let num = i+3
//     console.log(num + '. ' + todos[i])
// }
 