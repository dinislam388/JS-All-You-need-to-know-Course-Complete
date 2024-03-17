// ==>> '...'(Rest || Spread) jodi function ar peramitter ar moddhe use kora hoy taile ata Rest peramitter hobe ar jodi function function ar baire kothao ata dekha jay taile seta k amra bolbo spread Operator.

// => Multiple peramitter use korleo amra rest peramitter use korte parbo but se jonno just amder rest peramitter k last a call korte hobe.

function sum(...rest) {
    return rest.reduce((a, b) => a + b)
}
// console.log(sum(1,2,3,4,5,6));

// Normal
const a = [1,2,4,5,7,8,5]
// console.log(a); // Print a array: [1,2,4,5,7,8,5]

// Use Spread Operator
const D = [1,2,3,4,5,6,7,8,9]
// console.log(...D)  // print some normal value: 1 2 3 4 5 6 7 8 9

// Use Spread operator on object 
const obj = {
    a: 5,
    b: 10
}
const obj2 = {
    ...obj,
    c: 20
}
console.log(obj2);

const obj3 = obj === obj2
console.log(obj3);

const obj4 = obj3 === obj
console.log(obj4); 