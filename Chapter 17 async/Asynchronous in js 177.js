// ===>> JavaScript Asynchronous Proggram.
// ==>> Syncronus: Line by line code Execution.
// ==>> Asynchronous: Line Line Execution kore na jar somoy kom lagbe take age execution korabe.


// Synchronous Programming...(print line by line)
// console.log('Line 1');
// console.log('Line 2');
// console.log('Line 3');
// console.log('Line 4');
// console.log('Line 5');


// Asynchronous proggraming...(Do not maintain any serial)

console.log('Line 1');
setTimeout(() => {
    console.log('Line 2');
}, 3000);
setTimeout(() => {
    console.log('Line 3');
}, 2000);
console.log('Line 4');
setTimeout(() => {
    console.log('Line 5');
}, 1000);