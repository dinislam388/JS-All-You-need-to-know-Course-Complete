function add(a, b, c) {
    return a + b + c
}
// add(5, 10, 15)

function curryingFunc(a) {
    return function (b) {
        return function (c) {
            return a + b + c
        }
    }
}
const result = curryingFunc(5)(10)(15)
console.log(result);


// Practice again 

function curryingFunc2(a) {
    return function (b) {
        return function (c) {
            return a + b + c
        }
    }
}
const result2 = curryingFunc(10)(20)(30)
console.log(result2);