// ===>> Object Litaral: jodi kono object ar key and value same thake taile tar value na likhkleo kaj korbe.

const a = 5, b = 10
const obj = {
    a,
    b,
    print() {
        console.log(this);
    }
}
// console.log(obj);
obj.print()
