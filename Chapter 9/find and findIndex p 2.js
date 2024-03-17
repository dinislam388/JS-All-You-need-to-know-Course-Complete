// =======>> Find Methods
const arr = [5,4,7,8,6,2,2,3,4,6,5]
const findArr = arr.find((value) => {
    return value === 8
})
// console.log(findArr);

// =======>> FindIndex Methods 
const findIndexArr = arr.findIndex((value) => {
    return value === 8
})
// console.log(findIndexArr);

// Create My Find Methods 

function myFind(arr, cb) {
    for (let i = 0; i < arr.length; i++) {
        if (cb(arr[i])) {
            return arr[i]
        }
    }
    return acc
}

const findResult = myFind(arr, (value) => {
    return value === 8
})
console.log(findResult);

// =======>> Create FindIndex

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
