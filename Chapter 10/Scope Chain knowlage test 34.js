// Scope knowlege test.
// Code From HM Nayem Bhai

var a = 11

function A() {
    var b = 12
    function B() {
        var c = 23
        console.log(c);  // 23
    }

    function C() {
        d = 56
        console.log(d);  // 56
    }
    console.log(b); // 12
    D()
    B()
    C()
}
A()

function D(n) {
    return n + a
}
const result = D(5)
console.log(result);  // 16


// This is scope chain.

// A ==> a, b, D(), B(), C()
// B ==> a, b, c, D(), B(), C()
// C() ==> a, b, d, D(), B(), C()
// D ==> a, n, A()
