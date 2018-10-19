// /[Exercises 6] Hitung Huruf

function hitungHuruf(kata) {
    var arrkata = kata.split(" ")
        // console.log(arrkata)
        // console.log("banyak kata", arrkata.length)
    var tampungjumlah = []
    var jumlahperulangan = 0
    var indexjumlahperulangan

    for (var i = 0; i < arrkata.length; i++) {
        var banyak = 0
        for (var j = 0; j < arrkata[i].length - 1; j++) {
            var count = 1
            for (var k = j + 1; k < arrkata[i].length; k++) {
                if (arrkata[i][j] === arrkata[i][k]) {
                    count += 1
                }
            }
            if (count > banyak) {
                banyak = count
            }
        }
        tampungjumlah.push(banyak)

    }
    // console.log("jumlah perulangan di masing2 kata:", tampungjumlah)
    // console.log("")

    for (var i = 0; i < tampungjumlah.length; i++) {
        if (jumlahperulangan < tampungjumlah[i]) {
            jumlahperulangan = tampungjumlah[i]
            indexjumlahperulangan = i
        }
        // console.log("perulangan di kata '" + arrkata[i] + "' sebanyak " + tampungjumlah[i])
    }

    if (jumlahperulangan === 1) {
        return -1
    }

    // console.log("")
    // console.log("paling banyak perulangan huruf ada di indeks ke-", indexjumlahperulangan)
    // console.log("perulangan sebanyak", jumlahperulangan)
    // console.log("kata yang memiliki jumlah perulangan huruf yang paling besar yaitu '" + arrkata[indexjumlahperulangan] + "'")

    return arrkata[indexjumlahperulangan]

}

// TEST CASES
console.log(hitungHuruf('Today, is the greatest day ever')); // greatest
console.log(hitungHuruf('I am a passionate developer')); // developer
console.log(hitungHuruf('aku adalah anak gembala')); // adalah
console.log(hitungHuruf('rajin pangkal kaya')); // pangkal
console.log(hitungHuruf('mengayuh perahu di danau')); // danau