// arrow function ar jonno tar parrent object jeta thake seta return kore ar jodi parremt a kono object na thake taile direct window object return kore.

// let obj = {
//     name: 'MD Din Islam',
//     age: 22,
//     print:() => {
//         console.log(this);
//     }
// } 
// obj.print()



// ==>> Defarent Betwen normal function and Arrow function 
// => Normal function 
// let obj = {
//     name: "MD Din Islam",
//     age: 22,
//     print: function() {
//         setTimeout(function() {
//             alert(`Hello ${this.name}`)
//         }, 1000);
//     }
// }
// obj.print()  // Alart only  "Hello"

// => Arrow function 
let obj2 = {
    name: "MD Din Islam",
    age: 22,
    print: () => {
        setTimeout(() => {
            alert(`Hello ${this.name}`);
        }, 1000);
    }
}
obj2.print()
