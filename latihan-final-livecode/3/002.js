/*
-------------------
Prime Number Cruncher
-------------------

Bilangan prima adalah sebuah bilangan dimana hanya bisa habis dibagi oleh angka 1 dan angka itu sendiri.

7 adalah bilangan prima, karena hanya habis dibagi angka 1 dan 7.
22 BUKAN bilangan prima, karena habis dibagi 1, 2, 11, dan 22.

PROBLEM:
Disediakan sebuah function primeNumberCruncher yang menerima sebuah parameter
berupa number, dan mengembalikan kumpulan angka prima yang lebih besar
dari rata-rata kumpulan angka prima dari inputan parameter tersebut.

Contoh 1:
---------
input: 10

proses:
 - kumpulan deret array prima sampai `input`: [ 2, 3, 5, 7 ]
 - 2 + 3 + 5 + 7 = 17
 - AVERAGE: 17/4 = 4.25

output: [5, 7]

Contoh 2:
---------
input: 44

proses:
 - kumpulan deret array prima sampai `input`: [ 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43 ]
 - 2 + 3 + 5 + 7 + 11 + 13 + 17 + 19 + 23 + 29 + 31 + 37 + 41 + 43 = 281
 - AVERAGE: 281/14 = 20.07

Output: [ 23, 29, 31, 37, 41, 43 ]

Contoh 3:
---------
input: 23

proses:
 - kumpulan deret array prima sampai `input`: [ 2, 3, 5, 7, 11, 13, 17, 19, 23 ]
 - 2 + 3 + 5 + 7 + 11 + 13 + 17 + 19 + 23 = 100
 - AVERAGE: 100/9 = 11.11

output: [ 13, 17, 19, 23 ]

RULES
-----
 - DILARANG MENGGUNAKAN built-in function .map, .filter, .reduce

*/

function numberPrimeCruncher(input) {
    var prima = []
    var result = []
    var mean = 0
    for (var i = 2; i <= input; i++) {
        if (checkPrima(i) === true) {
            mean += i
            prima.push(i)
        }
    }
    // console.log(prima)
    mean /= prima.length

    for (var i = 0; i < prima.length; i++) {
        // console.log("prima ke" + i + " : " + prima[i])
        if (prima[i] > mean) {
            result.push(prima[i])
        }
    }
    return result
}

function checkPrima(num) {
    var check = []
    for (var i = 1; i <= num; i++) {
        if (num % i === 0) {
            check.push(i)
        }
    }
    // console.log("check:", check)
    if (check.length > 2) {
        return false
    } else {
        return true
    }

}
// console.log(checkPrima(11))
console.log(numberPrimeCruncher(10)); // [ 5, 7 ]
console.log(numberPrimeCruncher(44)); // [ 23, 29, 31, 37, 41, 43 ]
console.log(numberPrimeCruncher(23)); // [ 13, 17, 19, 23 ]
console.log(numberPrimeCruncher(1)); // []
console.log(numberPrimeCruncher(0)); // []