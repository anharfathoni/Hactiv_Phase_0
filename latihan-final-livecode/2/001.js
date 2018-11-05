/**
Missing Numbers
-------------------
Implementasikan function `missingNumbers` untuk mencari
angka yang hilang dari array `numbers`.
Contoh:
  - Input: [9, 4, 2, 8]
    Output: [1, 3, 5, 6, 7]
  - Input: [8, 3, 2, 1, 7, 5, 6]
    Output: [4]
  - Input: [4, 2, 3, 1]
    Output: []

RULES:
--------
- WAJIB MENGGUNAKAN ALGORITMA/PSEUDOCODE
- Dilarang menggunakan built-in function:
  - .max()
  - .min()
  - .sort()
- Dilarang menggunakan spread operator ( abaikan jika tidak tahu ini apa, belum penting untuk sekarang :) )

*/

function missingNumbers(numbers) {
    for (var i = 0; i < numbers.length; i++) {
        for (var j = 0; j < numbers.length; j++) {
            var temp = 0
            if (numbers[j] > numbers[j + 1]) {
                temp = numbers[j]
                numbers[j] = numbers[j + 1]
                numbers[j + 1] = temp
            }
        }
    }
    // console.log(numbers)
    var num = []
    var result = []

    if (numbers[0] <= 10) {
        for (var i = 1; i < numbers[numbers.length - 1]; i++) {
            num.push(i)
        }
    } else {
        for (var i = numbers[0]; i < numbers[numbers.length - 1]; i++) {
            num.push(i)
        }
    }


    for (var i = 0; i < num.length; i++) {
        var check = true
        for (var j = 0; j < numbers.length; j++) {
            if (num[i] === numbers[j]) {
                // console.log("num-i: " + num[i] + " number-j: " + numbers[j])
                check = false
            }
        }
        if (check === true) {
            // if (numbers[i] === 2) {
            //     result.push(1)
            //     result.push(2)
            // } else {
            result.push(num[i])
        }
    }
    return result
}

console.log(missingNumbers([1, 5, 10, 7, 6])); // [2, 3, 4, 8, 9]
console.log(missingNumbers([10, 1])); // [2, 3, 4, 5, 6, 7, 8, 9]
console.log(missingNumbers([90, 92, 91])); // []
console.log(missingNumbers([60, 54, 50])); // [51, 52, 53, 55, 56, 57, 58, 59]
console.log(missingNumbers([])); // []
console.log(missingNumbers([9, 4, 2, 8])); // [1, 3, 5, 6, 7]