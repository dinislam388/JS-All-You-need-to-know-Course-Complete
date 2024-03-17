// Nromal Function
function add(a, b) {
    return a + b
}
const sum = add(10, 20)
console.log(sum);  // 30


// Arrow Function sistem: 1
const add2 = (a, b) => {
    return a + b 
}
const sum2 = add2(10, 15)
console.log(sum2);  // 25


// Arrow Function sistem: 2
const add3 = (a, b) => a + b
const sum3 = add3(5, 10)
console.log(sum3);  // 15


// Arrow function sistem: 3
const add4 = a => a + a
const sum4 = add4(10) 
console.log(sum4);  // 20


// Arrow function sistem: 5
const add5 = x => x + x
console.log(add5(50));  // 100
