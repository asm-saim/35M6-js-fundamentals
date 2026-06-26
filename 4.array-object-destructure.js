//array destructuring: same position e variable tai important, no matter what is written.   
const numbers = [23, 55, 78, 90, 78]
const [num5, num2, num4, num3, num1] = numbers
console.log(num5)

//object destructing: mainly object er key gula kei destructuring valu te rakha hoi.
// destructuring container must be second bracket{}

const person = { name: "Galib", age: 45, location: "AUS", home_address: "USA" }
const {name, age, location, home_address} = person
console.log(home_address)