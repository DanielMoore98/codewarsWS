// Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)
//
// HH = hours, padded to 2 digits, range: 00 - 99
// MM = minutes, padded to 2 digits, range: 00 - 59
// SS = seconds, padded to 2 digits, range: 00 - 59
// The maximum time never exceeds 359999 (99:59:59)

function humanReadable(seconds) {
    if (seconds < 60) {
        return `00:00:${seconds < 10 ? `0${seconds}` : seconds}`
    } else if (seconds < 3600) {
        let minutes = Math.floor(seconds / 60)
        let sec = seconds - minutes * 60
        return `00:${minutes < 10 ? `0${minutes}` : minutes}:${sec < 10 ? `0${sec}` : sec}`
    } else {
        let hours = Math.floor(seconds / 3600)
        let minutes = Math.floor((seconds - hours * 3600) / 60)
        let sec = seconds - (hours * 3600) - (minutes * 60)
        return `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}:${sec < 10 ? `0${sec}` : sec}`
    }
}

console.log(humanReadable(360000))