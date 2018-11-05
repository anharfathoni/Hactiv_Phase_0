/**
  TIC TAC TOE PRIME

  Diberikan sebuah function tictactoePrime dengan parameter number of array 2 dimension.
  Function ini akan menghasilkan number of array 2 dimension yang telah di convert jika
  terdapat angka prima secara berurutan sebanyak 3 kali mendatar ataupun menurun.

  Contoh:
  ---------
  input:
    [
      [2, 5, 7],
      [5, 8, 19],
      [1, 3, 23]
    ]

  output:
    [
      [X, X, X],
      [5, 8, X],
      [1, 3, X]
    ]

    NOTE:
    - Angka 1 bukanlah sebuah angka prima
    - Angka prima yang telah diconvert tetap dihitung untuk baris/kolom selanjutnya

**/

function tictactoePrime(array) {
    function checkPrime(num) {
        count = 0
        if (num === 1) {
            return false
        }
        for (var i = 1; i <= num; i++) {
            if (num % i === 0) {
                count += 1
            }
        }
        if (count > 2) {
            return false
        } else {
            return true
        }
    }


    var jumlahPrimeKolom = 0
    var result = []
    var temp = []
    var indeks_kolom = 0

    for (var i = 0; i < array.length; i++) {
        result.push([])
        temp.push([])
    }
    // console.log(result)
    // console.log("prime1:", checkPrime(1))

    for (var i = 0; i < array.length; i++) {
        var jumlahPrimeBaris = 0
        for (var j = 0; j < array[i].length; j++) {
            if (checkPrime(array[i][j]) === true) {
                jumlahPrimeBaris += 1
                jumlahPrimeKolom += 1
                    // var indeks_kolom = j
                result[i][j] = ("X")
                temp[i][j] = "X"
                if (jumlahPrimeBaris >= 3) {
                    for (var m = 0; m < result[i].length; m++) {
                        array[i][m] = result[i][m]
                    }
                    jumlahPrimeBaris = 0
                } else {
                    result[i][j] += array[i][j]
                    temp[i][j] += array[i][j]
                }
            } else {
                if (jumlahPrimeBaris >= 3) {
                    for (var m = 0; m < result[i].length; m++) {
                        array[i][m] = result[i][m]
                    }
                    jumlahPrimeBaris = 0
                }
                // jumlahPrimeBaris = 0
                else {
                    result[i][j] += array[i][j]
                    temp[i][j] += array[i][j]
                }
            }

        }
        // if (jumlahPrimeBaris >= 3) {
        //     array[i] = result[i]
        // }

    }
    // console.log(temp)
    for (var kolom = 0; kolom < temp.length; kolom++) {
        var countkolom = 0
        for (var baris = 0; baris < temp.length; baris++) {
            if (temp[baris][kolom] === "X") {
                countkolom += 1
                var indeks_kolom = kolom
            }
        }
        if (countkolom >= 3) {
            for (var k = 0; k < temp.length; k++) {
                array[k][indeks_kolom] = "X"
            }
        }
    }
    return (array)
}

console.log(tictactoePrime(
    [
        [2, 5, 7],
        [5, 8, 19],
        [1, 3, 23]
    ]));
/*
[
  ['X', 'X', 'X'],
  [5, 8, 'X'],
  [1, 3, 'X']
]
*/

console.log(tictactoePrime([
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [13, 11, 19, 15, 16],
    [18, 17, 14, 20, 21],
    [22, 23, 24, 25, 12]
]));

/*
[
  [1, 'X', 3, 4, 5],
  [6, 'X', 8, 9, 10],
  ['X', 'X', 'X', 15, 16],
  [18, 'X', 14, 20, 21],
  [22, 'X', 24, 25, 12]
]
*/