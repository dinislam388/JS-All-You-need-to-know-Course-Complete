// Multidimentional Array

const arr = [
    [75, 80, 90, 85],
    [70, 80, 85, 75],
    [65, 80, 75 ,85]
]
for(let i = 0; i < arr.length; i++) {
    // console.log(arr[i]);
    for(let j = 0; j < arr[i].length; j++) {
        console.log('Element:' + i + '>:'  + arr[i][j]);
    }
}
