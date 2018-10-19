//[Exercises 18] Kali Terus Rekursif

function kaliTerusRekursif(angka) {
    var strAngka = String(angka)

    if (strAngka.length > 1) {
        var hasilkali = 1
        for (var i = 0; i < strAngka.length; i++) {
            hasilkali *= Number(strAngka[i])
        }
        return kaliTerusRekursif(hasilkali)
    } else {
        return angka
    }
}

// TEST CASES
console.log(kaliTerusRekursif(66)); // 8
console.log(kaliTerusRekursif(3)); // 3
console.log(kaliTerusRekursif(24)); // 8
console.log(kaliTerusRekursif(654)); // 0
console.log(kaliTerusRekursif(1231)); // 6