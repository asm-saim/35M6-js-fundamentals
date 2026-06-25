//variable
//var, let, const
//var- function scoped, and hoisting issue.
//let - can not be redeclared, but can reassign
//const - can't redeclared. can't reassign

let name = "Faisal"
name = "FA";

const country = "UK";


//conditional:(>, <, >=, <=, ==, ===, !==, &&, ||)
let number = 40;
if (number >= 20 && number <= 30) {
    console.log("accepted")
}
else {
    console.log("Not accepted")
}


//Array:
const friends = ["Kabir", "Jasim", "Wasi", "Mansav"]
console.log(friends);
console.log(friends.length);
console.log(friends[1]);

friends.push("Qader")
console.log(friends);

friends.pop()
console.log(friends)

friends.shift()
console.log(friends);

friends.unshift("Yamin");
console.log(friends);

const sliceValue = friends.slice(1, 4);
console.log(sliceValue);

//isArray
console.log(Array.isArray(friends))


// //loop
for (let i = 0; i < friends.length; i++) {
    console.log(friends[i]) // same concept-> friends[0], friends[2]
}


//function:

//direct function call: (no return)
function numbers(a, b) {
    console.log(a + b)
}
numbers(10, 10)

//function used outside, need to return
function nums(x, y) {
    sum = x + y
    // console.log(sum)
    return sum;
}
const totalCall = nums(50, 50);
console.log(totalCall)


//check arguments , spread operator
function num(x, y) {
    console.log(arguments) // check arguments
    console.log(...arguments) //spread
    const total = x + y
    return total;
}
const totals = num(500, 500);
console.log(totals)


//Objects:
const info = { name: "Faisal", age: 34, location: "UK" }
info.name = "Sami khan"
console.log(info);
console.log(info.age);

//
for (let key in info) {
    console.log(key);
    console.log(info[key]);

}

//using Object.keys, Object.values

console.log(Object.keys(info))
console.log(Object.values(info))