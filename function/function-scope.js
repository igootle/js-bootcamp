// Global scope (convertFahrenheitToCelsius, tempOne, tempTwo)
// Local scope (fahrenheit, celsius)
let convertFahrenheitToCelsius = function(fahrenheit) {
    let celsius = (fahrenheit - 32) *5/9
    if (celsius <= 0) {
        let isFreezing = true
    }
    return celsius
}

let tempOne = convertFahrenheitToCelsius(3)
let tempTwo = convertFahrenheitToCelsius(90)
console.log(tempOne)
console.log(tempTwo)