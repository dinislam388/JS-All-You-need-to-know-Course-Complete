// Convert Multiple Object with Constractor. 
function Person(name, age, address) {
    this.name = name
    this.age = age
    this.address = address
    // this.address = address
}
const obj1 = new Person('MD Din Islam', 22, 'Barihsla')
const obj2 = new Person('MD Asif', 20, 'Dhaka')
const obj3 = new Person('MD Hazzaz', 24, 'Norsingdi')
console.log(obj1);
console.log(obj2);
console.log(obj3);
