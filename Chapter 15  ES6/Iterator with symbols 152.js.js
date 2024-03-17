const arr = [1,2,3]
const iterate = arr[Symbol.iterator]()

console.log(iterate.next());
console.log(iterate.next());
console.log(iterate.next());
console.log(iterate.next());
console.log(iterate.next());

// ======>>> 

const str = "TEXT"
const iterateText = str[Symbol.iterator]()

console.log(iterateText.next());
console.log(iterateText.next());
console.log(iterateText.next());
console.log(iterateText.next());
console.log(iterateText.next());
