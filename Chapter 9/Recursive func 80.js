// Recursive function is working like for lopp and Infinity loop Handeling
// Recursive function is a very Memory Khadok function.

function sayHi(n) {
    if (n === 0) {
        return 
    }
    console.log('Hello Im Recursive Function');
    sayHi(n - 1)
}
sayHi(10)