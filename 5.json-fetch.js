//json: Dui pase quotation wala data kei json data bole, type holo string.

const person = { name: "Farid", age: 56, location: "New Castle" }

const JSONdata = JSON.stringify(person)
console.log(JSONdata)

//convert to plain data:
const plainData = JSON.parse(JSONdata);
console.log(plainData)

//fetch data
// fetch("url")
//     .then(res => res.json())
//     .then(data => console.log(data))


//how to print only objects keys/only values:
const info = { name: "Farid", age: 56, location: "New Castle" }
const ObKey = Object.keys(info)
const ObValues = Object.values(info)

console.log(ObKey)
console.log(ObValues)



