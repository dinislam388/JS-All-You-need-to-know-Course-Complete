const arr = [1,7,4,6,4,2,5,8]

// =======> Main Map Functon <========

// const squre = arr.map(function (value) {
//     return value * value
// })
// console.log(arr);
// console.log(squre);

// =======> Customiz Map Functon <========

// function myMap(arr) {
//     const newArray = []
//     for (let i = 0; i < arr.length; i++) {
//         const temp = arr[i] * arr[i]
//         newArray.push(temp)
//     }
//     return newArray
// }
// const sqreNewArr = myMap(arr)
// console.log(sqreNewArr);


// ==========> Same myMap Funtion work diffrently <=========

function myMapCb(arr, cb) {
    const newArrayCb = []
    for (let i = 0; i < arr.length; i++) {
        const tempCb = cb(arr[i])
        newArrayCb.push(tempCb)
    }
    return newArrayCb
}
// console.log(myMapCb(arr));
const squr = myMapCb(arr, function (value) {
    return value * value
})
const qb = myMapCb(arr, function (value) {
    return value * value * value
})
const mTen = myMapCb(arr, function (value) {
    return 10 + value
})
const multiply = myMapCb(arr, function (value) {
    return 10 * value
})
console.log(squr);
console.log(qb);
console.log(mTen);
console.log(multiply);