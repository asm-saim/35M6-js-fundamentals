const info = { name: "Parul", age: 14, location: "Munsiganj", class: 7, 101: "unique-id" }

//dot notation: all types of property is not accessible.
const dotSearch = info.class;
console.log(dotSearch);

//Bracket notation: all types of property is accessible.
console.log(info["class"]);
console.log(info["101"])