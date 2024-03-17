// Pass by value vs Pass by Reffarace

// Primitive  <=>  Immutable  => String, Boolean, number, Undefine, Null,
// Non Primitive  <=> Mutable  => Object, Array, Function

// Pass by value:

const n = 10
function change(n) {
    n = n + 100
    console.log(n);
}
change(10)
console.log(n);


// Pass by Refferace

const obj = {
    a: 10,
    b: 20
}
function change2(obj) {
    obj.a = obj.a + 100
    obj.b = obj.b + 100
    console.log(obj);
}
change2(obj)
console.log(obj);