function targetTerdekat(arr) {
    var lokasiX = []
    var lokasiO = []
    var jarakTerdekat = 99999
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === "x") {
            lokasiX.push(i)
        } else if (arr[i] === "o") {
            lokasiO.push(i)
        }
    }

    for (var i = 0; i < lokasiX.length; i++) {
        var jarakXO = Math.abs(lokasiX[i] - lokasiO[0])
        if (jarakTerdekat > jarakXO) {
            jarakTerdekat = jarakXO
        }
    }
    if (jarakTerdekat === 99999) {
        return 0
    } else {
        return jarakTerdekat
    }
}

// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2