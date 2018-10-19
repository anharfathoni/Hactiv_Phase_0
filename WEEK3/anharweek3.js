//Palindrome
// function palindrome(kata) {
//     var n = kata.length
//     if (n % 2 == 0) {
//         var m = n / 2
//         for (var i = 0; i < n; i++) {
//             if (kata[i] === kata[n - 1 - i]) {
//                 return true
//             } else {
//                 return false
//             }
//         }
//     } else {
//         var m = (n - 1) / 2
//         for (var i = 0; i < n; i++) {
//             if (kata[i] === kata[n - 1 - i]) {
//                 return true
//             } else {
//                 return false
//             }
//         }
//     }

// }

function palindrome(kata) {
    var n = kata.length
    var reverse = ""
    for (var i = n - 1; i >= 0; i--) {
        reverse += kata[i]
    }

    if (kata === reverse) {
        return true
    } else {
        return false
    }

}

// TEST CASES
//var sentence = prompt("masukkan kata");
//console.log(palindrome(sentence));

console.log(palindrome('katak')); // true
console.log(palindrome('blanket')); // false
console.log(palindrome('civic')); // true
console.log(palindrome('kasur rusak')); // true
console.log(palindrome('mister')); // false


/*-------------------------------------------------------------------- */

//Angka Palindrome
function angkaPalindrome(num) {
    var numPlus = num
    numPlus += 1
    var strNum = String(numPlus)
    var n = strNum.length
    var reverse = ""
    for (var i = n - 1; i >= 0; i--) {
        reverse += strNum[i]
    }
    if (strNum === reverse) {
        return numPlus
            //console.log(numPlus)
    } else {
        return angkaPalindrome(numPlus)
    }
}

// TEST CASES
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(22)); // 33
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001