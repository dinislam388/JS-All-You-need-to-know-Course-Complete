// try te jodi kono Error na thake taile catch at kono kaj nai at jodi try a kono Error thake taile tokhon ai soja catch block ar kace cole jabe...Throw ar khetreo same sistem

// This is the right way to Throw New Error
try {
    console.log('I am line 1');
    console.log('I am line 2');
    console.log('I am line 3');
    throw new Error('this your')
    console.log('I am line 4');
    console.log('I am line 5');
} catch (e) {
    console.log(e.message);
}


// This is not a right way to throw new error.... 
const n = 10;
function setNewError() {
    try {
        if (n % 2 === 0) {
            console.log('This is a Even Number ');
        } else{
            throw new Error('Invalid number')
        }
    } catch (e) {
        console.log(e.message);
    }
}
setNewError()