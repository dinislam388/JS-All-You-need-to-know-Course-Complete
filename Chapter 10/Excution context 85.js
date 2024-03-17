function a() {
    b()
    console.log('Excuteion context A ');
}
function b() {
    d()
    console.log('Excuteion context B');
}
function c() {
    console.log('Excuteion context C');
}
function d() {
    c()
    console.log('Excuteion context D');
}
const Golobal = 10;
a()
console.log('This is global Context');