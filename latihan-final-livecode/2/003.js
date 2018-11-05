/**
===============
NON PALINDROME
===============

Problem
--------
nonPalindrome adalah sebuah function yang akan menerima satu parameter bertipe string.
Function ini akan mengembalikan array satu dimensi yang berisikan kumpulan kata yang tidak palindrome.

Contoh 1:
input: 'Wow mereka janji bertemu di makam'
output: ['mereka', 'janji', 'bertemu', 'di']

Contoh 2:
input: 'Katak naik honda civic pada malam hari di mimpi Dimitri'
output: ['naik', 'honda', 'pada', 'hari', 'di', 'mimpi', 'Dimitri']


RULES:
- Tidak boleh menggunakan .reverse(), .join()

**/

function nonPalindrome(sentence) {

    var splitSentence = sentence.toLowerCase().split(" ")
        // console.log(splitSentence)
    var result = []

    for (var i = 0; i < splitSentence.length; i++) {
        var reverse = ""
        for (var j = splitSentence[i].length - 1; j >= 0; j--) {
            reverse += splitSentence[i][j]
        }
        if (reverse !== splitSentence[i]) {
            result.push(splitSentence[i])
        }
    }
    return result
}

console.log(nonPalindrome('Wow mereka janji bertemu di makam'));
//['mereka', 'janji', 'bertemu', 'di']

console.log(nonPalindrome('Katak naik honda civic pada malam hari di mimpi Dimitri'));
//['naik', 'honda', 'pada', 'hari', 'di', 'mimpi', 'Dimitri']

console.log(nonPalindrome('kasurrusak kalo dipisah menjadi kasur rusak'));
//['kalo', 'dipisah', 'menjadi', 'kasur', 'rusak']