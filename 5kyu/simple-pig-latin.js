// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.
//
//     Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

function pigIt(str) {
    let regex = /[^\w\s]/g
    return str.split(" ").map(word => {
        let splitWord = word.split("");
        let pigLatinArray = []
        if (!regex.test(String(word))) {
            pigLatinArray.push(splitWord.slice(1).join(""));
            pigLatinArray.push(splitWord[0] + 'ay')
        } else {
            pigLatinArray.push(word)
        }
        return pigLatinArray.join("");
    }).join(" ")
}

console.log(pigIt("Hello world !"));