
// assert.strictEqual(positiveSum([1,2,3,4,5]),15);
// assert.strictEqual(positiveSum([1,-2,3,4,5]),13);
// assert.strictEqual(positiveSum([]),0);
// assert.strictEqual(positiveSum([-1,-2,-3,-4,-5]),0);
// assert.strictEqual(positiveSum([-1,2,3,4,-5]),9);

function positiveSum(arr) {
    let sum = 0;
    arr.forEach(i => {
        if(i >= 0) sum += i
    })
    return sum;
}

console.log(positiveSum([]))
