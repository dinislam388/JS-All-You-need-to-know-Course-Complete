// For Of loop amader just value dey Index a tuch kore na. 

// Using for of on array
const arr = [1,2,3,4,5]
for(let v of arr) {
    console.log(v);
}


// using for of with string 
const str = "DinIslam"
for(let v of str) {
    console.log(v);
}


// Using for of loop with Object  
const obj = {
    a: 10,
    b: 20,
    c: 30
}
for(let v of obj) {
    console.log(v);   // Is not working couse Objetct is not itareble and symbol is not working .
}