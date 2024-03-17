// Defult pera mitter 

// Frist time try to losgical operator
function sqr(n) {
    if (!n) {
        n = 1
    }
    return n * n
}
console.log(sqr());

function sqr2(n) {
    n = n || 5
    return n * n
}
console.log(sqr2());


// Original Defult peramitter 
function mainDefult(n = 10) {
    return n * n 
}
console.log(mainDefult());

// Wrong way of Defult peramitter if we provide a peramitter of this function 
function greet(name = 'MD Din Islam', msg = 'Hello Me!') {
    console.log(`${name}! ${msg}`);
}
greet('Hello', null)
