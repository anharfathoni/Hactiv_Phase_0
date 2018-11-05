/**
**********
CARI INDEX
**********

Diberikan sebuah function cariIndex dimana function tersebut memiliki 3 parameter yaitu:
 - numbers -> array of numbers yang berisi data yang akan dicari
 - numSearch -> angka yang akan dicari
 - yangKe -> posisi angka "yang ke" yang sedang dicari

Output dari function ini adalah index angka yang dicari pada posisi "yang ke-"

contoh 1:
---------
input:
  - numbers: [ 4, 5, 1, 2, 4, 1, 9, 4, 4 ]
  - numSearch: 4
  - yangKe: 3

output: 7
  penjelasan: karena angka 4 yang ke-3 berada pada index ke-7
  index 0 => 4 (angka yang dicari yang ke-1)
  index 1 => 5
  index 2 => 1
  index 3 => 2
  index 4 => 4 (angka yang dicari yang ke-2)
  index 5 => 1
  index 6 => 9
  index 7 => 4 (angka yang dicari yang ke-3), sesuai dengan input parameter yangKe adalah 3 maka yang di-return adalah 7


contoh 2:
----------
input:
  - numbers = [ 2, 1, 1, 5, 6, 4 ]
  - numSearch = 5
  - yangKe = 1

output: 3
  penjelasan: karena angka 5 yang ke-1 berada pada index ke-3
  index 0 => 2
  index 1 => 1
  index 2 => 1
  index 3 => 5 (angka yang dicari yang ke-1), sesuai dengan input parameter yangKe adalah 1 maka yang di-return adalah 3


contoh 3:
---------
contoh 2:
----------
input:
  - numbers = [ 2, 1, 1, 5]
  - numSearch = 2
  - yangKe = 3

output: -1
  penjelasan: karena angka 2 yang ke-3 tidak ditemukan
  index 0 => 2 (angka yang dicari yang ke-1)
  index 1 => 1
  index 2 => 1
  index 3 => 5
  Karena semua data yang ada telah selesai dibaca dan tidak ditemukan yangKe 3 untuk numSearch 2 maka yang di-return adalah -1

RULES:
 - WAJIB MENYERTAKAN ALGORITMA/PSEUDOCODE
 - DILARANG MENGGUNAKAN BUILT IN FUNCTION JS APAPUN
 - DILARANG MENGGUNAKAN FUNCTION ES6 DAN SPREAD SYNTAX

**/

/*
PSEUDOCODE

FUNCTION cariIndex 
with PARAMETER - "number" type array of number
                - "numSearch" type number
                - "yangKe" typr number

BEGIN
    LOOPING FOR (i=0 to i<numSearch.length)
      CEK IF 'numbers[i]'===numSearch
        CEK IF "yangKe" === 1
          return (i)
        ELSE 
          return yanKe--
        END IF
      END IF
      i++
    END LOOPING

    IF(yangKe !== 1)
      return -1
    END IF

END FUNCTION

*/
function cariIndex(numbers, numSearch, yangKe) {
    for (var i = 0; i < numbers.length; i++) {
        if (numbers[i] === numSearch) {
            if (yangKe === 1) {
                return i
            } else {
                yangKe -= 1
            }
        }
    }

    if (yangKe !== 1) {
        return -1
    }
}

console.log(cariIndex([4, 5, 1, 2, 4, 5, 6, 4, 4], 4, 3)); // 7
console.log(cariIndex([2, 1, 1, 5, 6, 4], 5, 1)); // 3
console.log(cariIndex([2, 1, 1, 5], 2, 3)); // -1
console.log(cariIndex([], 3, 4)); //-1

//tambahan
console.log(cariIndex([2, 1, 1, 5], 2, 3)); //-1