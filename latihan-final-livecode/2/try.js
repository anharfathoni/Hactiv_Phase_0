// function hapusSimbolRec(str) {
//     var alphanum = "abcdefghijklmnopqrstuvwxyz0123456789"
//     var result = ''

//     if (str.length === 0) {
//         return ""
//     } else {
//         if (checkAlpanum(str[0], alphanum) === true) {
//             return str[0] + hapusSimbolRec(str.slice(1))
//         } else {
//             return hapusSimbolRec(str.slice(1))
//         }
//     }


// }

// function checkAlpanum(str, alphanum) {
//     if (alphanum.length === 0) {
//         return false
//     } else {
//         if (str === alphanum[0]) {
//             return true
//         } else {
//             return checkAlpanum(str, alphanum.slice(1))
//         }
//     }

// }

// console.log(hapusSimbolRec("tes%$4aa"))


// //------------------------------------------------------------------------//


// function virusCheck(str, viruses) {
//     if (str === undefined || viruses === undefined) {
//         return "There is no virus"
//     } else if (str.length === 0) {
//         return 0
//     } else {
//         var virus = viruses.split("|")

//         var adavirus = false

//         for (var i = 0; i < virus.length; i++) {
//             if (str[0].toLowerCase() === virus[i].toLowerCase()) {
//                 adavirus = true
//             }
//         }
//         if (adavirus === true) {
//             return 1 + virusCheck(str.slice(1), viruses)
//         } else {
//             return virusCheck(str.slice(1), viruses)
//         }
//     }
// }

// console.log(virusCheck('qlD4MZax0raQqew', 'x|0|q')); // 5 viruses detected
// console.log(virusCheck('HH0NBP1zRa', 'h|r')); // 3
// console.log(virusCheck('4O4TmIF6ONaiMlzpXxPqwy', '4|X|p')); // 6
// console.log(virusCheck('mjBgPlzks', 'm')); // 1
// console.log(virusCheck('AIn4Ks05bBaa', 'x')); // 0
// console.log(virusCheck('RsMFjBUjvIaP')); // There is no virus
// console.log(virusCheck('')); // There is no virus

//--------------------------------------------------------//
function tulisFaktorial(num1, num2) {
    var temp = ""
    temp = tulisFaktorial2(num1, num2)
    console.log(temp)

    if (num2 === 2) {
        console.log(num1)
    } else {
        return tulisFaktorial(num1, num2 - 1)
    }
}

function tulisFaktorial2(number1, number2) {
    if (number2 - number1 === number2) {
        return ""
    } else {
        var a = "" + number1 + tulisFaktorial2(number1 - 1, number2)
        return (a.substr(0, number2))
    }
}

input = 6
tulisFaktorial(input, input)