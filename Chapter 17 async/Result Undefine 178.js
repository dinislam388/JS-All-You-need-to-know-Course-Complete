// Asynchronous a settime out ar ba ai type ar kah jekhane time lagbe sekhanei korte hbe na hole atar result undefinee hobe...
// and ata kono veriable a store kora jabe na.
// => JavaScriot is a single Threded Language

// Wrong Way
function myAsync1(name) {
    let result1
    setTimeout(() => {
        result1 = name
        // console.log(name);
        console.log('I am Done...');
    }, 3000);
}
const mainResult = myAsync1('MD Din Islam')
console.log(mainResult);



// Right Way
// function myAsync(name) {
//     let result 
//     setTimeout(() => {
//         result = name
//         console.log(name);
//     }, 2000);
// }
// myAsync('MD Din Islam')