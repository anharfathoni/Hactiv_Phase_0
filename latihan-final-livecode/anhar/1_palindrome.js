function palindrome(kata) {
    if (kata.length === 0 || kata.length === 1) {
        return true
    }
    if (kata[0] === kata[kata.length - 1]) {
        return palindrome(kata.slice(1, kata.length - 1))
    } else {
        return false
    }
}

// TEST CASES
console.log(palindrome('katak')); // true
console.log(palindrome('blanket')); // false
console.log(palindrome('civic')); // true
console.log(palindrome('kasur rusak')); // true
console.log(palindrome('mister')); // false