const arr = [5,4,7,6,1,3,1,5,9,8,74,1,3,45,47,6,8]
const everyArr = arr.every((value) => {
    return value % 2 === 0
})
console.log(everyArr);