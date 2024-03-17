function addWord(text) {
    try {
        const str = text.trim()
        const words = str.split('  ')
        return words
    } catch (e) {
        console.log(e);
    }
}
const words = addWord('sknjffsjksdfsdffdf   jjuhsdfdf kuskhdfdfkfksddff        jkjsdfjskddffsidhfhfuisdhsdfjf')
console.log(words);
