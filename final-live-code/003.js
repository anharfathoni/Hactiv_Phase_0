/*
Array Filter 🐼

Array filter adalah sebuah function yang menerima 2 parameter
Parameter pertama merupakan sebuah array of number dan parameter kedua berupa perintah filter.

Function ini memiliki tiga jenis perintah filter yang bisa digunakan
  - ganjil
    Akan mengembalikan array dengan isi angka angka ganjil saja.
  - genap
    Akan mengembalikan array dengan isi angka angka genap saja.
  - kelipatan(angka)
    Bentuk perintahnya disini merupakan string, dan akan diikuti dengan angka
      Contoh perintah:
        kelipatan3 => akan mereturn array dengan isi angka yang merupakan kelipatan 3 saja
        kelipatan4 => akan mereturn array dengan isi angka yang merupakan kelipatan 4 saja
        kelipatan10 => akan mereturn array dengan isi angka yang merupakan kelipatan 10 saja

Happy coding!🚀

RULES:
  - dilarang menggunakan built in function .filter(), .reduce() dan .map()
  - dilarang menggunakan regex

*/


function arrayFilter(numbers, command) {
    var kelipatan = Number(command.slice(9))
        // console.log(kelipatan)
    var result = []

    if (kelipatan !== 0) {
        for (var i = 0; i < numbers.length; i++) {
            if (numbers[i] % kelipatan === 0) {
                result.push(numbers[i])
            }
        }
    } else {
        if (command === "ganjil") {
            for (var i = 0; i < numbers.length; i++) {
                if (numbers[i] % 2 !== 0) {
                    result.push(numbers[i])
                }
            }
        } else if (command === "genap") {
            for (var i = 0; i < numbers.length; i++) {
                if (numbers[i] % 2 === 0) {
                    result.push(numbers[i])
                }
            }
        }
    }

    return result
}

console.log(arrayFilter([1, 2, 3, 4, 5, 6, 7, 8], 'ganjil')); // [ 1, 3, 5, 7 ]
console.log(arrayFilter([123, 770, 322, 619, 777, 666, 400], 'ganjil')); // [ 123, 619, 777 ]
console.log(arrayFilter([1, 2, 3, 4, 5, 6, 7, 8], 'genap')); // [ 2, 4, 6, 8 ]
console.log(arrayFilter([123, 770, 322, 619, 777, 666, 400], 'genap')); // [ 770, 322, 666, 400 ]
console.log(arrayFilter([6, 9, 20, 60, 90, 33, 336, 370], 'kelipatan3')); // [ 6, 9, 60, 90, 33, 336]
console.log(arrayFilter([9, 10, 100, 1001, 120, 555], 'kelipatan10')); // [ 10, 100, 120 ]


console.log(arrayFilter([1, 2, 3, 4, 5, 6, 7, 8], 'kelipatan2')); // [ 2, 4, 6, 8 ]