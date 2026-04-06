function spinWords(string){
    const array = string.split(' ').map((word) => {
        let reverse = word.split('')
        if(reverse.length >= 5){
            return reverse.reverse().join("")
        }
        return word
    })
    return array.join(" ").toString()
}

