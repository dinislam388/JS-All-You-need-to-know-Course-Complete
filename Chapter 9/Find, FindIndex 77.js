// // ========>> find Methods
const arr =  [3,4,6,7,9,8,5,7,6]
const findResult = arr.find((value) => {
    return value === 8
})
// console.log(findResult);

// =======>> findIndex Methods

const findIndexResult = arr.findIndex((value) => {
    return value === 8
})
// console.log(findIndexResult);

// ========>> Create find Methods: 

function myFind(arr, cb) {
    for (let i = 0; i < arr.length; i++) {
        if (cb(arr[i])) {
            return arr[i]
        }
    }
}
// myFind(arr)
const myFindResult = myFind(arr, (value) => {
    return value === 9
})
// console.log(myFindResult);

// ========>> Create findIndex 

function myFindIndex(arr, cb) {
    for (let i = 0; i < arr.length; i++) {
        if (cb(arr[i])) {
            return i
        }
    }
}
const myFindIndexResult = myFindIndex(arr, (value) => {
    return value === 8
})
console.log(myFindIndexResult);
