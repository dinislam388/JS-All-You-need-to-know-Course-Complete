const arrOfObj = [
    {
        name: 'A',
        age: 22
    },
    {
        name: 'B',
        age: 19
    },
    {
        name: 'C',
        age: 25
    },
    {
        name: 'D',
        age: 18
    },
    {
        name: 'E',
        age: 26
    },
]
// const arrOfObjSort = arrOfObj.sort()
// console.log(arrOfObjSort);
arrOfObj.sort(function (a, b) {
    if (a.age > b.age) {
        return + 1
    } else if (a.age < b.age) {
        return -1
    } else {
        return 0
    }
})
console.log(arrOfObj);


// ===>> Array sorting Normally but something problem.... Follow Buttom Sorting 
const arr = [5,7,4,2,9,8,3,4,6,1]
arr.sort()
// console.log(arr);


// ===>> Array Sorting Assending Order and this work Every value like + and - 
const arr2 = [5,7,4,2,9,8,-4,-1,3,4,6,-9,1]
arr2.sort(function (a, b) {
    if (a > b) {
        return 1
    } else if (a < b) {
        return -1
    } else {
        return 0
    }
})
// console.log(arr2);

// ===>> Array sorting Desending order 

const arr3 = [4,5,-2,7,5,6,-5,7,9,-1,4,6,-9,4,6]
arr3.sort(function (a, b) {
    if (a > b) {
        return -1
    } else if (a < b) {
        return 1
    } else {
        return 0
    }
})
// console.log(arr3);

