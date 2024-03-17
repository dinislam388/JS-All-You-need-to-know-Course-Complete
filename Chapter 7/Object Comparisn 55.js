// Video: 55
// Object Comparison

const obj = {
    a: 5,
    b: 10,
    c: 15,
    d: 20
}

const obj2 = {
    a: 5,
    b: 10,
    c: 15,
    d: 20
}

// Normal Obejct comparison
// if (obj.a === obj2.a && obj.b === obj2.b && obj.c === obj2.c && obj.d === obj2.d) {
//     console.log(true);
// } else {
//     console.log(false);
// }


// Obejct to String comparison    // Sortcut     // Best.
console.log(JSON.stringify(obj) === JSON.stringify(obj2));