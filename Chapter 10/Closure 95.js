// Closure => Closure is whean a function is able to remember and access it's lexical scope even when that function exwcuting outside it's lexical scope.

//  able to remember and access it's lexical scope

// function closureFfunction() {
//     var mgc = 'Im learning Closure and lexcal Scope'; 
//     function sayMagc() {
//         console.log(mgc);
//     }
//     sayMagc()
// }
// closureFfunction()


// even when that function exwcuting outside it's lexical scope

function closureFfunction() {
    var a = 'Im lerning closure and lexical scope'
    return function () {
        console.log(a);
    }
}
const sayMagc = closureFfunction() 
sayMagc()
