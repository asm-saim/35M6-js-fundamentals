const info = [
    { name: "Qasim", age: 32, location: "Sylhet" },
    { name: "Wasim", age: 45, location: "Rajsahi" },
    { name: "Jasim", age: 33, location: "Chattogram" },
    { name: "Hasim", age: 56, location: "Khulna" },
    { name: "Yahia", age: 22, location: "USA" },
]

const newPerson = { name: "Halim", age: 27, location: "London" }

const newInfo = [...info, newPerson] //fully new array, no reference copied
console.log(newInfo);


//filter
const spec = newInfo.filter(p => p.location !== "Khulna")
console.log(spec)