var a = 100
// newPrint(a)

print(10)  // 10

var newPrint = print
newPrint(45)  // 45

function print(a) {
    console.log(a);  // 100
}
print(a)  // 100


//=============>>

// ==> Creational Phase
// a = undefine 
// new print() = undefine
// print(a) =  refc

// ==> Executional Phase
// a = 100
// newPrint = newPrint is not a function
// print = 10
// newPrint = 45
// print = 100