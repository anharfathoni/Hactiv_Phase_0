/*

Ugly numbers adalah angka yang jika dibagi dengan faktor prima angka 2, 3 atau 5 menghasilkan angka 1.

Contoh 1:
4 merupakan ugly number karena
Proses:
  1. 4 dibagi 2 menghasilkan sisa bagi = 0 dan hasilnya adalah 2
     2 dibagi 2 menghasilkan sisa bagi = 0 dan hasilnya adalah 1

Maka 4 merupakan ugly number

contoh 2:
15 merupakan ugly number karena
Proses:
  1. 15 dibagi 2 menghasilkan sisa bagi > 0, maka akan melanjutkan ke step 2
  2. 15 dibagi 3 menghasilkan sisa bagi = 0 dan hasilnya adalah 5
     5 dibagi 3 menghasilkan sisa bagi > 0 maka akan melanjutkan ke step 3
  3. 5 dibagi 5 menghasilkan sisa bagi = 0 dan hasilnya adalah 1

Maka 15 merupakan ugly number

contoh 3:
17 bukan ugly number karena
Proses:
  1. 17 dibagi 2 menghasilkan sisa bagi > 0 maka akan melanjutkan ke step 2
  2. 17 dibagi 3 menghasilkan sisa bagi > 0 maka akan melanjutkan ke step 3
  3. 17 dibagi 5 menghasilkan sisa bagi > 0 dan hasilnya bukan 1

Maka 17 bukan ugly number

contoh 4:
20 merupakan ugly number karena
Proses:
  1. 20 dibagi 2 menghasilkan sisa bagi = 0 dan hasilnya adalah 10
     10 dibagi 2 menghasilkan sisa bagi = 0 dan hasilnya adalah 5
     5 dibagi 2 menghasilkan sisa bagi > 0 maka lanjut ke step 2
  2. 5 dibagi 3 menghasilkan sisa bagi > 0 maka akan melanjutkan ke step 3
  3. 5 dibagi 5 menghasilkan sisa bagi = 0 dan hasilnya adalah 1

Maka 20 merupakan ugly number

Buatlah sebuah function getUglyNumber dimana menerima sebuah parameter bertipe Number.
Function tersebut mengembalikan/me-return array kumpulan deret bilangan ugly number sampai angka parameter tersebut.

Contoh 1:
input: 10
output: [ 2, 3, 4, 5, 6, 8, 9, 10 ]

Contoh 2:
input: 20
output: [ 2, 3, 4, 5, 6, 8, 9, 10, 12, 15, 16, 18, 20 ]

RULE:
 - WAJIB MENGGUNAKAN ALGORITMA/PSEUDOCODE

*/

/*
contoh 4:
20 merupakan ugly number karena
Proses:
  1. 20 dibagi 2 menghasilkan sisa bagi = 0 dan hasilnya adalah 10
     10 dibagi 2 menghasilkan sisa bagi = 0 dan hasilnya adalah 5
     5 dibagi 2 menghasilkan sisa bagi > 0 maka lanjut ke step 2
  2. 5 dibagi 3 menghasilkan sisa bagi > 0 maka akan melanjutkan ke step 3
  3. 5 dibagi 5 menghasilkan sisa bagi = 0 dan hasilnya adalah 1

Maka 20 merupakan ugly number
*/


// function getUglyNumber(num) {
//     var result = []

//     function checkUgly(angka) {
//         var hasil = 0

//         if (angka === 1) {
//             return "ugly"
//         }
//         if (angka % 2 === 0) {
//             hasil = angka / 2
//             return checkUgly(hasil)
//         } else if (angka % 3 === 0) {
//             hasil = angka / 3
//             return checkUgly(hasil)
//         } else if (angka % 5 === 0) {
//             hasil = angka / 5
//             return checkUgly(hasil)
//         } else {
//             return "not ugly"
//         }
//     }

//     //return (checkUgly(num))
//     for (var i = 2; i <= num; i++) {
//         if (checkUgly(i) === "ugly") {
//             result.push(i)
//         }
//     }
//     return result
// }

function getUglynumber(num) {
    function checkUgly(angka) {
        if (angka === 1) {
            return []
        }
        if (angka % 2 === 0) {
            if (angka / 2 === 1) {
                return "ugly"
            } else {
                return checkUgly(angka / 2)
            }
        } else if (angka % 3 === 0) {
            if (angka / 3 === 1) {
                return "ugly"
            } else {
                return checkUgly(angka / 3)
            }
        } else if (angka % 5 === 0) {
            if (angka / 5 === 1) {
                return "ugly"
            } else {
                return checkUgly(angka / 5)
            }
        } else {
            return "not ugly"
        }
    }

    var result = []
    for (var i = 2; i <= num; i++) {
        if (checkUgly(i) === "ugly") {
            result.push(i)
        }
    }

    return result

}

console.log(getUglynumber(10)); //[ 2, 3, 4, 5, 6, 8, 9, 10 ]
console.log(getUglynumber(20)); //[ 2, 3, 4, 5, 6, 8, 9, 10, 12, 15, 16, 18, 20 ]
console.log(getUglynumber(4)); //[ 2, 3, 4]
console.log(getUglynumber(1)); //[]