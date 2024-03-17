// ==>> Object to Array Convert:
const obj = {
    a: 10,
    b: 20,
    c: 30
}
console.log(Object.entries(obj));

// ==>> Array to Object Convert:
const arr = [
    ['a', 5],
    ['b', 15],
    ['c', 25],
]
console.log(Object.fromEntries(arr));
