function getCount(str) {
    const vowels = ['a','e','i', 'o','u']
    let sum = 0;
    str.split('').forEach(l => {
        if(vowels.includes(l)) sum += 1
    })
    return sum;
}

console.log(getCount("abracadabra")) //5

