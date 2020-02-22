const square = (num) => num * num
    const squreLong = (num) => {
        return num * num
    }

console.log(square(5))

const people = [{
    name: 'Rapeepat',
    age: 33
},{
    name: 'Victim',
    age: 76
},{
    name: 'Jess',
    age: 22
}]

// const under30 = people.filter(function(person){
//     return person.age < 30
// })

const under30 = people.filter((person) => person.age < 30)
console.log(under30)

const year22 = people.find((person) => person.age > 22)
console.log(year22.name)