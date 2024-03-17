// ==> Function Expration  not Hoisted 

// newFunc()

const newFunc = function () {
    console.log('Function Expration');
}
newFunc()   // Function Expration

// ==> Function Declaretion  Fully Hoisted
DecFunction()  // Function Declaretion

function DecFunction(params) {
    console.log('Function Declaretion');
}
DecFunction()   // Function Declaretion


// ==> Creation Phase 


// ==> Execution Phase
