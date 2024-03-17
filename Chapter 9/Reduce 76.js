// Main Reduce sum...
const arr = [4,5,7,25,9,2,5]
const sum = arr.reduce((prev, curr) => {
    return prev + curr
}, 0)
// console.log(sum);

const maxNum = arr.reduce((prev, curr) => {
    return Math.max(prev, curr) 
}, 0)
// console.log(maxNum);

const minNum = arr.reduce((prev, curr) => {
    return Math.min(prev, curr)
}, 0)
// console.log(minNum);

const sumIn = arr.reduce((prev, curr) => {
    return prev + curr 
}, 100)
// console.log(sumIn);

// Create Reduce Methods Venila JS

function myReduce(arr, cb, acc) {
    for (let i = 0; i < arr.length; i++) {
        acc = cb(acc, arr[i])
    }
    return acc
}

const mySum = myReduce(arr, (prev, curr) => {
    return prev + curr
}, 0)
// console.log(mySum);

const mySumIn = myReduce(arr, (prev, curr) => {
    return prev + curr
}, 100)
// console.log(mySumIn);

const myMax = myReduce(arr, (prev, curr) => {
    return Math.max(prev, curr)
}, 0)
console.log(myMax);

const myMin = myReduce(arr, (prev, curr) => {
    return Math.min(prev, curr)
}, arr[0])
console.log(myMin);