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