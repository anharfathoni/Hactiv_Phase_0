//[Exercises 15] Password Generator

function changeVocals(str) {
    var ubahStr = ""
    for (var i = 0; i < str.length; i++) {
        if (str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u' || str[i] === 'A' || str[i] === 'E' || str[i] === 'I' || str[i] === 'O' || str[i] === 'U') {
            ubahStr += String.fromCharCode(str.charCodeAt(i) + 1)
        } else {
            ubahStr += str[i]
        }
    }
    //console.log("ubahVokal:",ubahStr)
    return ubahStr
}

function reverseWord(str) {
    var reverse = ""
    for (var i = str.length - 1; i >= 0; i--) {
        reverse += str[i]
    }
    //console.log("reverse:",reverse)
    return reverse
}

function setLowerUpperCase(str) {
    var newStr = ""
    for (var i = 0; i < str.length; i++) {
        // console.log(str[i]+" lower tidak ? ",str[i] === str[i].toLowerCase())
        if (str[i] === str[i].toLowerCase()) {
            newStr += str[i].toUpperCase()
        } else if (str[i] === str[i].toUpperCase()) {
            newStr += str[i].toLowerCase()
        }

    }
    //console.log("upper-lower:", newStr)
    return newStr
}

function removeSpaces(str) {
    str = str.split(" ")
    var newStr = ""
    for (var i = 0; i < str.length; i++) {
        newStr += str[i]
    }
    //console.log(newStr)
    return newStr
}

function passwordGenerator(name) {
    if (name.length >= 5) {
        var password = removeSpaces(setLowerUpperCase(reverseWord(changeVocals(name))))
        return password
    } else {
        return 'Minimal karakter yang diinputkan adalah 5 karakter'
    }

}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'

console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'