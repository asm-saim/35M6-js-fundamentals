//template string:

const fName = "Faisal"
const lName = "Ahmed"
// console.log(fName + lName);
console.log(`${fName} ${lName}`);

//arrow function:
//normal function has hoisting issue.(call the function before declaration)
// Ex: 
number()
function number() {
    console.log("Hello")
}

//Arrow function is not hoisted.

// greeting() - throw an error
const greeting = () => {
    console.log("Hello")
}
greeting()

//Arrow function : for single line code, we do nto need to return. 
// we can't see arguments in the arrow function as normal function.
// const names=(a,b)=>{
//     console.log(arguments)
// }

const nums = (a, b) => a + b;

const numbers = (a, b) => {
    return a + b
}
const total=numbers(2,2)
console.log(total) 

//rest :
const values=(...rest)=>{
    console.log(rest) //will give an array of numbers
}
values(1,2,3)

//Spread Operator: kono ekta array er vitorer element k ber korar jonno use hoi.

const num=[1,3,4,5,6,7,8]
console.log(...num)

const NewNums=[...num,12,76,22]
console.group(NewNums);
