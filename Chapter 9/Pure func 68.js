// 1. Is a pure function or not?

var point = {
    a: 5,
    b: 10,
    c: 15
}
function purePoint(point) {
    point.a = 10,
    point.b = 20,
    point.c = 30
    console.log(point);
}
purePoint(point)
console.log(point);

// 1. Ans: No is not a pure a function becuse is a side effet function we know  pure function in not effect on any other code on your codeBase



// ***2. Is a pure function or not?

const n = 10

function srt(n) {
    return n * n
}
console.log(srt(2));
console.log(srt(2));
console.log(srt(2));
console.log(srt(2));

// 2. Ans: Yes, is a pure function