//array methods: map, filter, find

const info = [
    { name: "Qasim", age: 32, location: "Sylhet" },
    { name: "Wasim", age: 45, location: "Rajsahi" },
    { name: "Jasim", age: 33, location: "Chattogram" },
    { name: "Hasim", age: 56, location: "Khulna" },
    { name: "Yahia", age: 22, location: "USA" },
]
//map
const loc = info.map(all => all.location)
console.log(loc)

//for Each -(no return)
// const values = info.forEach(value => value.age)
// console.log(values)
info.forEach(value => console.log(value.age))

//filter:( assign a condition)
const peoples = info.filter(people => people.age >= 40)
console.log(peoples)

//find: will return an object, and a single value
const singleInfo = info.find(people => people.name === "Wasim")
console.log(singleInfo) 

// Method      Returns                                 Purpose
// map()       New array                               Transform every element
// forEach()   undefined                               Perform an action for each element
// filter()    New array                               Keep only matching elements
// find()      First matching element (or undefined)   Find a single element