class Shape {
    constructor(address) {
        this.address = address
    }
    drow() {
        console.log('Drowing...');
    }
}
class Ractangle extends Shape {
    constructor(address, name, email) {
        super(address)
        this.name = name
        this.email = email
    }
    calculate() {
        return this.name + this.email
    }
}
const c1 = new Ractangle( 'Barishal', 'MD Din Islam', 'dinislam388415@gmail.com')
console.log(c1);
const c2 = new Ractangle('Ratry Islam', 'ratryislam5866@gmail.com')
console.log(c2);