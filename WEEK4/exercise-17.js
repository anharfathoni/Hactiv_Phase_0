//[Exercises 17] Total Digit Rekursif

function totalDigitRekursif(angka) {
    var strAngka = String(angka)
    var sum = 0
    if (strAngka.length > 1) {
        sum += Number(strAngka[0])
        angka = Number(strAngka.substr(1))
    } else {
        return Number(strAngka[0])
    }
    return sum + totalDigitRekursif(angka)
}

// // TEST CASES
console.log(totalDigitRekursif(512)); // 8
console.log(totalDigitRekursif(1542)); // 12
console.log(totalDigitRekursif(5)); // 5
console.log(totalDigitRekursif(21)); // 3
console.log(totalDigitRekursif(11111)); // 5