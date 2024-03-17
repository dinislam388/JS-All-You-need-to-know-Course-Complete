// What is Nested scope?
// Ans: akta scope ar vhitore jokhon onno akta scpoe hoy tokhon take nested scope bole.

// akta scope ar baire theke kokhno sei scpope k access kora jabe na.
// Sob somoy nijer kace value na thakle tar pasrrent ar kace jabe. ai sistem take bole lexical scope.

var a = 50;
console.log(a);  // 50  
function nestedFunction() {
    var a = 30
    function nestedFunction2() {
        console.log(a);  // 30
    }
    function nestedFunction3() {
        var b = 20
        function nestedFunction4() {
            console.log(b);  // 20
        }
        nestedFunction4()
    }
    console.log(b);  // b is not define 
    nestedFunction2()
    nestedFunction3()
    console.log(a);  // 30
}
nestedFunction()
console.log(a); // 50