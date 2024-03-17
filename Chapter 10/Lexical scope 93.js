// What is lexical scope.? 
// Ans: lexical scope is access her parrent.
// Descriptipn: jei function a veriable k console.log() kora hoice sei scope a jodi tar value na thake se tar parrent scope ar kace and dekhbe sekhane ace kina na hoy tar parrent tar parrent amon korte korte global scope porjonto cole jabe and jodi dekhe sekhano nai tahole bolbe a is not define.

// Example

var a = 10
function lexicalScope() {
    var a = 20  // Lexical Scope
    function lexicalScope2() {
        console.log(a); // 20
    }
    lexicalScope2()
}
lexicalScope()
console.log(a); // 10