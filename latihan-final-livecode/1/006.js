/*

Diberikan sebuah function angka terbesar yang menerima satu parameter berupa array. 
fungsi ini akan mengembalikan atau me return nilai berupa angka terbesar dari array. 
Jika array kosong maka akan mengembalikan nilai -1

RULES
=====
- Wajib menggunakan metode rekursif
- Dilarang menambahkan parameter baru
- Dilarang membuat variable di luar function palindromeRecursive
- Dilarang mengubah tipe data parameter

*/

function angkaTerbesar(sentence) {
    var sentence2 = []

    if (sentence.length === 0) {
        return -1
    } else {
        var max = sentence[0]
        if (sentence.length === 2) {
            if (sentence[0] > sentence[1]) {
                return sentence[0]
            } else {
                return sentence[1]
            }
        } else if (sentence[1] > sentence[0]) {
            max = sentence[1]
            sentence2.push(max)
            for (var i = 2; i < sentence.length; i++) {
                sentence2.push(sentence[i])
            }
            return angkaTerbesar(sentence2)
        } else {
            sentence2.push(max)
            for (var i = 2; i < sentence.length; i++) {
                sentence2.push(sentence[i])
            }
            return angkaTerbesar(sentence2)
        }
    }

}

// TEST CASES
console.log(angkaTerbesar([2, 3, 7, 6, 5])) // 7
console.log(angkaTerbesar([9, 3, 7, 4, 1])) // 9
console.log(angkaTerbesar([2, 1, 7, 2, 8])) // 8
console.log(angkaTerbesar([])) // -1