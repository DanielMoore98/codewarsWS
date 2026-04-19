// Alright, detective, one of our colleagues successfully observed our target person, Robby the robber. We followed him
// to a secret warehouse, where we assume to find all the stolen stuff. The door to this warehouse is secured by an
// electronic combination lock. Unfortunately our spy isn't sure about the PIN he saw, when Robby entered it.
//
// The keypad has the following layout:
//
// ┌───┬───┬───┐
// │ 1 │ 2 │ 3 │
// ├───┼───┼───┤
// │ 4 │ 5 │ 6 │
// ├───┼───┼───┤
// │ 7 │ 8 │ 9 │
// └───┼───┼───┘
//     │ 0 │
//     └───┘
// He noted the PIN 1357, but he also said, it is possible that each of the digits he saw could actually be another
// adjacent digit (horizontally or vertically, but not diagonally). E.g. instead of the 1 it could also be the 2 or 4.
// And instead of the 5 it could also be the 2, 4, 6 or 8.
//
// He also mentioned, he knows this kind of locks. You can enter an unlimited amount of wrong PINs, they never finally
// lock the system or sound the alarm. That's why we can try out all possible (*) variations.
//
// * possible in sense of: the observed PIN itself and all variations considering the adjacent digits
//
// Can you help us to find all those variations? It would be nice to have a function, that returns an array (or a list
// in Java/Kotlin and C#) of all variations for an observed PIN with a length of 1 to 8 digits. We could name the
// function getPINs (get_pins in python, GetPINs in C#). But please note that all PINs, the observed one and also the
// results, must be strings, because of potentially leading '0's. We already prepared some test cases for you.

function getPINs(observed) {
    // TODO: This is your job, detective!
    const arr = observed.toString().split("")
    const row1 = ['1', '2', '3']
    const row2 = ['4', '5', '6']
    const row3 = ['7', '8', '9']
    let combo = [];
    let result = []
    arr.forEach(n => {
        if (row1.includes(n)) {
            row1.findIndex(i => i === n) === 0 ? combo.push(['1', '2', '4'])
                : row1.findIndex(i => i === n) === 1 ? combo.push(['1', '2', '3', '5'])
                    : combo.push(['2', '3', '6'])
        } else if (row2.includes(n)) {
            row2.findIndex(i => i === n) === 0 ? combo.push(['1', '4', '5', '7'])
                : row2.findIndex(i => i === n) === 1 ? combo.push(['2', '4', '5', '6', '8'])
                    : combo.push(['3', '5', '6', '9'])
        } else if (row3.includes(n)) {
            row3.findIndex(i => i === n) === 0 ? combo.push(['4', '7', '8'])
                : row3.findIndex(i => i === n) === 1 ? combo.push(['5', '7', '8', '9', '0'])
                    : combo.push(['6', '8', '9'])
        } else {
            combo.push(['8', '0'])
        }
    })
    console.log(combo)
    combo.forEach((c, index) => {
        for (let i = 0; i < c.length; i++) {
            for (let j = 0; j < c.length; j++) {
                let join = c[i] + c[j]
                if(!result.includes(join)) {
                    result.push(c[i] + c[j]);
                }

            }
        }
    })

    return result.flat()
}

console.log(getPINs('8'))