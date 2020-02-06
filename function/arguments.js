// Multiple arguments
let add = function (a, b) {
    return a + b
}

let result = add(10, 1)
console.log(result)

// Default arguments
let getScoreText = function (name = 'Anonymous', score = 0) {
    return 'Name: ' + name + ' - Score: ' + score
}

let scoreText = getScoreText(undefined, 80)
console.log(scoreText)

//Challenge area
let getTip = function (total, tipPercent = .2) {
    let percent = tipPercent * 100
    let tip = total * tipPercent
    return `A ${percent}% tip on $${total} would be $${tip}`
}

let tip = getTip(100)
console.log(tip)

let name = 'Jen'
let age = 12
console.log(`I am ${age} years old. Hey, my name is ${name}`)