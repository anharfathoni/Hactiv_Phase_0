//[Exercises 16] Makan Terus Rekursif

function makanTerusRekursif(waktu) {
    var jumlahmakan = 1;
    if (waktu > 0) {
        waktu -= 15
    } else {
        return 0
    }
    return jumlahmakan + makanTerusRekursif(waktu);
}

// TEST CASES
console.log(makanTerusRekursif(66)); // 5
console.log(makanTerusRekursif(100)); // 7
console.log(makanTerusRekursif(90)); // 6
console.log(makanTerusRekursif(10)); // 1
console.log(makanTerusRekursif(0)); // 0