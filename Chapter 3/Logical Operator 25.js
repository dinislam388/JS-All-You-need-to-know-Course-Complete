// Logical Operator  Vide: 25

// &&, ||, !


//  ***&& 

let a = 10
let b = 20
let c = 30
let d = 40

if (a > b && c < d) {
    console.log('A greter than B');
} else {
    console.log('One side is false');
}

if (a < b && c > d) {
    console.log('B greter than B');
} else {
    console.log('One side is false');
}

if (a < b && c < d) {
    console.log('B Grerter than A && C D Greter than C');
} else {
    console.log('Only one side is False');
}


// *** || 


if (a > b || c < d) {
    console.log('A greter than B');
} else {
    console.log('One side is false');
}

if (a < b || c > d) {
    console.log('B greter than B');
} else {
    console.log('One side is false');
}

if (a < b || c < d) {
    console.log('B Grerter than A && C D Greter than C');
} else {
    console.log('Only one side is False');
}
