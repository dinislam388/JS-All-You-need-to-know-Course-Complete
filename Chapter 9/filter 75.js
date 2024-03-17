// Normal Filter 
// const arr = [1,4,3,4,6,4,9]
// arr.filter((value) => {
    // console.log(value);
// })

// Find Odd and Eveen Number using Filter Mathods 

// const filteredArr = arr.filter((value) => {
    // if (value % 2 === 0) {
        // console.log(`${value} is a Even Number`);
    // } else {
        // console.log(`${value} is a Odd Number`);
//     }
// })

// Create Filter Mathods Using Vanila Js
const arr = [4,5,7,2,1,9,3,8,2,4,6]
function myFilter(arr, cb) {
    const newArray = []
    for (let i = 0; i < arr.length; i++) {
        const temp = cb(arr[i])
        newArray.push(temp)
    }
    return newArray
}
// console.log(myFilter(arr));
const EveenOdd = myFilter(arr, function (value) {
    if(value % 2 === 0) {
console.log(`${value} is a Even Number`);
    } else{ 
        console.log(`${value} is a Odd Number`);
    }
})
const qb = myFilter(arr, function (value) {
    return value * value * value
})
const squre = myFilter(arr, function (value) {
    return value * value
})
const LesEqual = myFilter(arr, (value) => {
    return 5 > value
})
const grerterEqual = myFilter(arr, (value) => {
    return 5 < value 
})
const multiply = myFilter(arr, (value) => {
    return 5 * value
} )
console.log(qb);
console.log(squre);
console.log(LesEqual);
console.log(grerterEqual);
console.log(multiply);

                                