function greet(mgs) {
    function something(name) {
        return mgs + ', ' + name + '!'
    }
    return something 
}
const gm = greet('Good Morning')
const result = gm('MD Din Islam')
// console.log(result);
const gn = greet('Good Night')
const result2 = gn('Good Night')
// console.log(result2);


// Create Power Function return in another function

function base(b) {
    return function power(n) {
        let resultPo = 1
        for (let i = 0; i < b; i++) {
            resultPo *= n
        }
        return resultPo
    }
}
const baseHishab = base(10)
const finalResult = baseHishab(2)
console.log(finalResult);