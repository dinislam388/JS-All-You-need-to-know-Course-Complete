// 3 Rulse of this keyWord
// 1.this jei Object a thakbe always takei reffer korbe 
// 2. Kono Object betito onno kono jaygay this use korle always window object k reffer korbe.
// 3. Execution context ar upore vhitti kore this ar value change hote pare tar mane holo this alwys nijer object ar value ai Dey na borong execution ar age value change kore change kore changeable value o dite pare.

// Example with ccode: 

const rect = {
    width: 10,
    height: 20,
    drow: function () {
        console.log('im learnign this key word');
        console.log('My width is ' + this.width);
        console.log('My Heaght is ' + this.height);
        this.myPrintFuntion()
    },

    myPrintFuntion: function () {
        console.log('im learnign this key word');
        console.log('My width is ' + this.width);
        console.log('My Heaght is ' + this.height);     
    }
} 
rect.drow()

function another() {
    
}
console.log(another.print());
another.print()

function myThis() {
    console.log(this);
}
new myThis()