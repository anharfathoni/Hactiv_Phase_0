/*
  Halang Rintang

  Diberikan sebuah function halangRintang yang menerima 2 parameter yaitu:
   - parameter pertama adalah string menggambarkan arena perlombaan dimana symbol `_` menandakan arena datar
     dan symbol `n` menandakan rintangan.
   - parameter kedua adalah number daya lompat kuda yang menentukan berapa banyak rintangan yang dapat dilewati
     dalam sekali lompat

  function ini akan mengembalikan jarak yang dapat di tempuh oleh kuda tersebut sebelum akhirnya menabrak rintangan

  example:
  halangRintang('__n__nn__nnn__n', 2)

  proses:
  karakter ke-1 dan 2 adalah arena datar sehingga dapat dilewati
  karakter ke-3 terdapat satu rintangan sehingga dapat dilewati
  karakter ke-4 dan 5 adalah arena datar sehingga dapat dilewati
  karakter ke-6 dan 7 terdapat dua rintangan sehinga dapat dilewati
  karakter ke-8 dan 9 adalah arena datar sehingga dapat dilewati
  karakter ke-10 sampai 11 terdapat 3 rintangan sedangkan daya lompat hanya 2 sehingga tidak dapat dilewati dan berhenti di 9

  output:
  9

  RULES:
  - WAJIB menyertakan algorithm/pseudocode
  - DILARANG menggunakan built in function .split(), .slice(), .indexOf()
  - DILARANG menggunakan regex

*/

/*
PSEUDOCODE
FUNCTION halangRintang with parameter -arena type string
                                      -dayaLompat type number
BEGIN
  STORE "count_n" with 0  
  STORE "jarak" with 0

  FOR(var i=0 to i<arena.length)
      IF(arena[i] === "_")
          jarak += 1
      ELSE IF(arena[i]=== "n")
          count_n += 1
          
          //cek jumlah n terhadap dayaLompat
          IF(arena[i+1] !== "n")
              IF(count_n > dayaLompat)
                  return "jarak"
              ELSE
                  jarak += count_n
                  count_n = 0 //set nilai count_n menjadi 0 lagi
          END IF

      END IF
  END FOR

  return "jarak"

END FUNCTION

*/


function halangRintang(arena, dayaLompat) {
    var count_n = 0
    var jarak = 0

    for (var i = 0; i < arena.length; i++) {
        if (arena[i] === "_") {
            jarak += 1
        } else if (arena[i] === "n") {
            count_n += 1
            if (arena[i + 1] !== "n") {
                // console.log("n:", count_n)
                // console.log()
                if (count_n > dayaLompat) {
                    return jarak
                } else {
                    jarak += count_n
                    count_n = 0
                }
            }
        }
    }
    return jarak
}

// TEST CASES
console.log(halangRintang('___n__nn', 1)); // 6
console.log(halangRintang('___n__nn_nnn', 2)); // 9
console.log(halangRintang('_nnnnn___', 1)); // 1
console.log(halangRintang('____nnnn__nnnnn', 4)); // 10
console.log(halangRintang('nnnnn____', 2)); // 0