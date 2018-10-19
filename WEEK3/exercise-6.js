// [Exercises 6 (Auto)] Palindrome Angka

/*Diberikan sebuah function angkaPalindrome(angka) yang menerima satu parameter angka. 
Function akan me-return angka selanjutnya yang mengandung nilai angka palindrome. 
Contoh, jika angka adalah 27, maka function akan me-return nilai 33 karena angka 33 adalah angka palindrom. 
Jika angka dari awal sudah merupakan palindrome, maka function harus mencari angka selanjutnya 
yang palindrome. Contoh, jika angka adalah 8, walaupun dia sudah palindrome, 
harus mencari angka selanjutnya yang palindrome, yaitu 9. */

function angkaPalindrome(num) {
    var numPlus = num
    numPlus += 1
    var strNum = String(numPlus)
    var n = strNum.length
    var reverse = ""
    for (var i = n - 1; i >= 0; i--) {
        reverse += strNum[i]
    }
    //jika sudah palindrom maka return numPlus
    if (strNum === reverse) {
        return numPlus
    } else {
        return angkaPalindrome(numPlus) //jika bukan palindrome maka ulangi functionnya
    }
}

// TEST CASES
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(22)); // 33
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001