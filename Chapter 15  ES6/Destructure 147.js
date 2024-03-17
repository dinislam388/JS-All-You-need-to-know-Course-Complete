// ==>> Destructure: Destructure ar maddhome amra protita object ar prperty akta variable ar moddhe rakhte pari.

// => Normally Create  My Destructure Methods: 
const myDestructure = {
    name: 'MD Din islam',
    age: 22,
}
const name = myDestructure.name
const age = myDestructure.age
console.log(name);
console.log(age);


// Main Destructure 
const mainDestructure = {
    myName: 'MD Din Islam',
    email: 'dinislam388415@gmail.com'
}
const { myNamem, email } = mainDestructure
console.log(myNamem);
console.log(email);


// Multi Level Object Destructuring 
const MultiDestructuring = {
    myName2: 'MD Din Islam',
    newEmail: 'dinislam388415@gmail.com',
    address: {
        myaddress: 'Barishal',
        citi: 'Dhaka'
    }
}
const { myName2, newEmail, address: { myaddress, citi } } = MultiDestructuring
console.log(myName2, newEmail, myaddress, citi);
