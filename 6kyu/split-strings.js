function solution(str) {
    let newArray = []
    let initialArray = str.split('')
    initialArray.forEach((l, i) => {
        if(i % 2 === 0) {
            if(initialArray[i+1] === undefined){
                newArray.push(l+ '_')
            } else {
                newArray.push(l+ initialArray[i+1])
            }
        }
    })
    return newArray
}

console.log(splitString("ab"))