// Unix Epoch - January 1st 1970 00:00::
const now = new Date()
const timestamp = now.getTime()
const myDate = new Date(timestamp)
// console.log(myDate.getFullYear())

// console.log(now.toString())
// console.log(`Year: ${now.getFullYear()}`)
// console.log(`Month: ${now.getMonth()}`)
// console.log(`Day month: ${now.getDate()}`)
// console.log(`Day Hour: ${now.getHours()}`)
// console.log(`Minute: ${now.getMinutes()}`)
// console.log(`secound: ${now.getSeconds()}`)


const dateOne = new Date('March 1 2018 12:00:00')
const dateTwo = new Date()
const dateOneTimestamp = dateOne.getTime()
const dateTwoTimestamp = dateTwo.getTime()

if (dateOneTimestamp < dateTwoTimestamp) {
    console.log(dateOne.toString())
} else if (dateTwoTimestamp < dateOneTimestamp) {
    console.log(dateTwo.toString())
}

