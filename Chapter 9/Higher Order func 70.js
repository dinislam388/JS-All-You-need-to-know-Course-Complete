// function addHigerFunc(a, b) {
//     return a + b
// }
// function multiplid(a, b, func) {
//     c = a + b
//     d = a - b
//     function multiply() {
//         const e = func(a, b)
//         return e * d * c
//     }
//     return multiply
// }
// const allMultiply = multiplid(5, 10, addHigerFunc)
// console.log(allMultiply());

// =====================================

function testHigherFunc(a, b) {
    return a + b
}
function multiplides(a, b, func) {
    c = a + b
    d = a - b
    function multiply() {
        const e = func(a, b)
        return e * d * c
    }
    return multiply
}
const AllSmultiply = multiplides(5, 10, testHigherFunc)
console.log(AllSmultiply());
