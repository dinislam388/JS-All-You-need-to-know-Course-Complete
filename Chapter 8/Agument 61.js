var sum = 0
var arr1 = [2,3,4,5]
var arr2 = [3,4,5,6]
var arr3 = [4,5,6,7]


function sumOfArray(arr) {
    for(let i = 0; i < arr.lenght; i++) {
        sum += arr[i]
    }
    console.log(sum);
}
sumOfArray(arr1)