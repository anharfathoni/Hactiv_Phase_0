//[Exercises 5 (Auto)] Palindrome

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