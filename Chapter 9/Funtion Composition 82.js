// akta fucntion ar input akare jodi onno akta function ar output amara provid korte pari take amra function Composition bolte pari. 

// Funtion Composition 
function print(inp) {
    console.log(inp);
}
function multiply(n) {
    return n * 5
}
function add(a, b) {
    return a + b
}
print(multiply(add(5, 10)))
