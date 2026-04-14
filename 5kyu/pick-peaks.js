function pickPeaks(arr) {
    if(true) {
        let gradient = []
        let result = {
            pos: [],
            peaks: []
        }

        arr.forEach((item,i) => {
            if(arr[i+1]) {
                gradient.push(arr[i+1] - item)
            }

        })
        gradient.forEach((grad,i) => {
                if(grad < gradient[i-1] && grad < 0 && gradient[i-1] >= 0) {
                    if(gradient[i-1] === 0){
                        // if(gradient[i-1] === grad){
                        //     result.pos.push(i-2)
                        // }
                        // console.log(gradient.filter(i => i === 0).length)
                        result.pos.push(i-gradient.filter(i => i === 0).length)
                    } else {
                        result.pos.push(i)
                    }
                }
        })
        result.pos.forEach(pos => result.peaks.push(arr[pos]))
        console.log(gradient)
        return result
    }
}

console.log(pickPeaks([2,1,3,1,2,2,2,2]))