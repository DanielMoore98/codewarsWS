function narcissistic(value) {
    let valueStr = value.toString()
    if(valueStr.length > 1){
        let sum = 0
        for (let v in valueStr) {
            sum += Number(valueStr[v]) ** valueStr.length
        }
        return sum === value;
    } else {
        return true
    }
}

console.log(narcissistic(153))
