// Object Propertice and Methods Explanation. 

// je kono Object ar boishisto gulo k Describe kore setai Propertice (noune and Adjective) jeguloke amra Veriable a store kore rakhi.

// Object je kaj gulo korte parbe Like Excution or somthing seta holo Methods ( Varb ) ai Object mainly kaj kroe akta funtiona ar moto. 
// Example function k call korar somoy Person() vhabe korle hoy kintu Methods call korar somoy object ar mot korte hobe jemon Person.age

// Code Example:  Propertice & Methods

var rect = { 
    width: 10,  // Propertice
    height: 20, // Propertice

    calculateArea: function () {  // Methods 
        return this.width * this.height
    },
    
    calculateRange: function () {  // Methods 
        return 2 * (this.width + this.height)
    }
}
var area = rect.calculateArea()
var range = rect.calculateRange()