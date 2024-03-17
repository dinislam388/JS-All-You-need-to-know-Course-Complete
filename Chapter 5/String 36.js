var str = 'something'  // string litaral

var str2 = String('something')   // string constactor

var n = 10
console.log(n + '');   // convart number to string 


// Video 38
// ***Escape

// var str2 = String('This is \'string\'')
var str2 = String('This is \nstring')
var str2 = String('This is \tstring')

console.log(str2);


// Video 40 
// ***String methods

// Methods Name: concat(), substr(), charArt()

let a = 'I am'
let b = 'Din Islam'
let c = a.concat(' ', b)
// console.log(c);   // i am Din Islam


// let d = c.substr(5, 3)   // ami jekhan theke bole dibo sei theke last pera mitter prjonto print kore dibe amakz
// console.log(d);     // Din Islamm 


// console.log(c.charAt(5));  // D    // index a kaj kore


// Video: 41  
// Task: Prolem   Find the length of this string
var str = 'Din islam'

// var length = 0
// while(true) {
//     if (str.charAt(length) === '') {
//         break
//     } else {
//         length++
//     }
// }
// console.log(length);  // 9


// console.log(str.length);  // 9
// console.log('jfgsdufgvkajsdfg aysgfasifgihasdvfacfughvag'.length);  // 43