function angkaPalindrome(num) {
    num += 1
    strNum = String(num)
    var reverse = ""
        // console.log(num)
    if (num < 10) {
        return num
    } else {
        for (var i = strNum.length - 1; i >= 0; i--) {
            reverse += strNum[i]
        }
        if (strNum === reverse) {
            return num
        } else {
            return angkaPalindrome(num)
        }
    }
}

// TEST CASES
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001