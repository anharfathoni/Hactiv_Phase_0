/*
================
MISSING NUMBER
================

description: Sebuah fungsi untuk mencari angka yang hilang berdasarkan pola dari board atau
papan yang tersedia. Fungsi akan mengembalikan nilai sebuah array yang berisi
angka-angka yang hilang

examples:
INPUT = 
[
  [ 7 ,' ', 5 ],
  [' ', 8 , 9 ]
  [ 1 ,' ',' '] 
]

ASUMSI PADA PAPAN SUDAH TERDAPAT RANGE TERBESAR DAN TERKECIL YAITU 1 DAN 9 SEHINGGA
OUTPUT:
[ 2, 3, 4, 6]

PADA MASING-MASING TEST CASE SUDAH TERDAPAT RANGE TERBESAR DAN TERKECIL
*/

function missingNum(arr) {
    var max = 0
    var min = 9999999
    for (i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[i].length; j++) {
            if (arr[i][j] > max && arr[i][j] !== " ") {
                max = arr[i][j]
            }

            if (arr[i][j] < min && arr[i][j] !== " ") {
                min = arr[i][j]
            }
        }
    }
    // console.log("min: " + min + " max: " + max)

    var result = []
    for (var a = min; a < max; a++) {
        // console.log("check a :", a)
        var missing = true
        for (i = 0; i < arr.length; i++) {
            for (var j = 0; j < arr[i].length; j++) {
                if (a === arr[i][j]) {
                    // console.log("sama ", a)
                    missing = false
                    break
                }
            }
            if (missing === false) {
                break
            }
        }

        if (missing === true) {
            result.push(a)
        }
    }
    return result

}


console.log(missingNum([
        [3, ' ', 5],
        [1, ' ', 7],
        [9, ' ', ' ']
    ])) // [ 2, 4, 6, 8 ]
console.log(missingNum([
        [2, ' '],
        [' ', 5]
    ])) // [ 3, 4 ]
console.log(missingNum([
        [11, ' ', 13],
        [17, ' ', 19],
        [' ', 16, ' ']
    ])) // [ 12, 14, 15, 18 ]
console.log(missingNum([
        [3, ' ', 5, 15],
        [1, ' ', 7, 13],
        [9, ' ', ' ', 12],
        [' ', 16, ' ', ' ']
    ])) // [ 2, 4, 6, 8 ]
console.log(missingNum([])) // []