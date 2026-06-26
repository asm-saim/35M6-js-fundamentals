//falsy value: 
// 0
// -0
// ""
// false
// NaN
// undefined
// null
// 0n

const value = ""
if (value) {
    console.log("It's falsy")
}
else {
    console.log("It's truthy")
}
//using ternary:
value ? console.log("It's falsy") : console.log("It's truthy")

//Ex:
const number = 30;
const result = (number >= 10) && (number <= 15) ? "Low" : "High"
console.log(result);

// EX:1
const isActive = true;

const matched = () => console.log("Green Light")
const unmatched = () => console.log("Red Light")
isActive ? matched() : unmatched();

//shortcut:

//if truthy
isActive && matched(); //no answer is falsy

//if falsy:
isActive || unmatched(); //no answer if truthy


//Type coercion :
// Type coercion is the process where JavaScript automatically converts one data type to another when performing an operation.

let num = "10"
num = -num - 2; //automatic it will convert to number type.
console.log(typeof num);

//Ex:
console.log("5" + 2); //convert to a string
console.log("5" - 2); //convert to a number
console.log("5" / 2); //convert to a number
console.log("5" * 2); //convert to a number

// Tip: In modern JavaScript, prefer === over == to avoid unexpected type coercion during comparisons.

