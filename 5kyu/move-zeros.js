function moveZeros(arr) {
    let zeros = []
    let rest = []
    arr.forEach(e => {
        if(e === 0){
            zeros.push(e)
        }else {
            rest.push(e)
        }
    })
    return rest.concat(zeros)
}

console.log(moveZeros([1,2,0,1,0,1,0,3,0,1]))