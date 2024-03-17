// Frist class function in maintain 6 ruls:

function test(a, b) {
    return a + b
}


// 1. A function can be store a variable.
    const varStore = test 
    console.log(varStore(5, 10));

// 2. A function can be store a array.
    const arrStore = []
    arrStore.push(test)
    console.log(arrStore[0][20,30]);

// 3. A Function can be store a object 
    const objStore = {
        obj: test
    }
    console.log(objStore.obj(20,30));

// 4. Create function as need. 
    setTimeout(function() {
        console.log('Create a new funtion as need');
    }, 2000);

// 5. We can Funtion pass is an Argument .
// 6. We can return function is an another function.