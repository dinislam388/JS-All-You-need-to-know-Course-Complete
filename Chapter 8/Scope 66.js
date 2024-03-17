// Ruls: Child Access Her Parent

// function scopeFunc() {
//     var a = 5
//     function inner() {
//         console.log(a);
//     }
//     inner()
// }
// scopeFunc()


// function Something() {
//     const a = 10
//     function inner() {
//         console.log(a);
//     }
//     inner()
// }
// Something()



function test(n) {
    function frist() {
        return n % 3 === 0
    }
    function secend() {
        return n % 5 === 0
    }
    if (frist() && secend()) {
        console.log( n + ' frist and secend funtion is match');
    } else {
        console.log('invalid number');
    }
}
test(10)