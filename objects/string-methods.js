let name = ' Andrew Mead '

// length property
console.log(name.length)

// Convert to upper case
console.log(name.toUpperCase())

// Convert to lower case
console.log(name.toLowerCase())

// Includes method
let password = 'abc123passwordjj'
console.log(password.includes('password'))

//Trim
console.log(name.trim(name))

// Challenge area

// isValidPassword
let isValidPassword = function(password) {
    if(password.length >= 8 && !password.includes('password') ) {
        return true
    } else {
        return false
    }
}

console.log(isValidPassword('asdfp'))
console.log(isValidPassword('adfdfpassword'))
console.log(isValidPassword('dfdfsasdf90sdf'))