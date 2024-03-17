// const arr = [1,4,5,7,8,6,2]

// // arr.forEach((values, index, arr) =>  {
// //     console.log(values, index, arr);
// // })

// function forEachBhindTheScren(arr, cb) {
//     for (let i = 0; i < arr.length; i++) {
//         cb(arr[i], i, arr)
//     }
//     console.log(i)
// }
// // console.log();
// // const foreachBihind =  forEachBhindTheScren
// // console.log(foreachBihind());

// const sum = 0

// =============================


// ==> Normal ForEach

let sum1 = 0
const arr = [1, 4, 8, 7, 2, 7, 6, 4, 4];
    arr.forEach(function (values, index, arr) {
        sum1 += values
    })
    console.log(sum1);

    
// ==> ForEach work in bihind the scren  

function forEach(arr, cb) {
    for (let i = 0; i < arr.length; i++) {
        cb(arr[i])
    }
}
let sum2 = 0;
forEach(arr, function (values) {
    sum2 += values
})
console.log(sum2);



// ==========>> Practice in Mahilara <<===========

// function frist() {
//     const a = 10
//     // console.log(a); 
//     function inner() {
//         // console.log(a);
//     }
//     inner()
//     function secend() {
//         console.log();
//     }
//     secend()
// }
// frist()


// const arr = [1,2,4,5,4,5,7,5,5]
// =======> Main ForEach Function <========
// const forEachArr = arr.forEach(function (value, index, arr) {
    // console.log(value);
// })

// =======> Customize ForEach Function <========

function forEach(arr, cb) {
    for (let i = 0; i < arr.length; i++) {
        cb(arr[i], i , arr)
    }
}
let sum = 0
forEach(arr, function (value, index, arr) {
    // console.log(value, index, arr);
    sum += value
})
console.log(sum);