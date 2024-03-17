// Set methods a key value pear ta nei

const set = new Set([1,2,3])
set.add(4)
set.add(5)
console.log(set);   
console.log(set.keys());
console.log(set.values());
console.log(set.size);
console.log(set.has(5));  // kono value ace kina seta check korar jonno 
set.delete(2)
console.log(set);
set.clear()
console.log(set);


for(let v of set) {
    console.log(v);
}
