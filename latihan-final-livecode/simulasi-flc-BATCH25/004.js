/**
  *******************
  SNAKE LADDER
  *******************

  Diberikan sebuah function snakeLadder yang memiliki satu paramter yaitu:
   - height bertipe number

  Function ini akan mengembalikan array multidimensi dimana array
  tersebut berisi angka yang menyerupai ular tangga.

  Untuk pola bisa dilihat pada test case

  RULE:
  - DILARANG menggunakan built in function .reverse()

**/
function snakeLadder(height) {
    count = 1
    var result = []

    if (height < 3) {
        return "minimum height is 3"
    }
    for (var i = 0; i < height; i++) {
        var arrBaris = []
        for (var j = 0; j < height; j++) {
            if (i % 2 === 0) {
                arrBaris.push(count)
                count++
            } else {
                arrBaris.unshift(count)
                count++
            }
            // console.log(arrBaris)
        }
        result.unshift(arrBaris)
    }
    return result
}

console.log(snakeLadder(5));
// [ [ 21, 22, 23, 24, 25 ],
//   [ 20, 19, 18, 17, 16 ],
//   [ 11, 12, 13, 14, 15 ],
//   [ 10, 9, 8, 7, 6 ],
//   [ 1, 2, 3, 4, 5 ] ]

console.log(snakeLadder(3));
// [ [ 7, 8, 9 ],
//   [ 6, 5, 4 ],
//   [ 1, 2, 3 ]
// ]

console.log(snakeLadder(2)); // minimum height is 3