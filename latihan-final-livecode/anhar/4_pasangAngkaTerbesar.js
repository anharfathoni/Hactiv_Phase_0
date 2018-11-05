function pasanganTerbesar(num) {
    var strNum = String(num)
    var angka = 0
    for (var i = 0; i < strNum.length - 1; i++) {
        var pasangan = Number(strNum[i] + strNum[i + 1])
        if (angka < pasangan) {
            angka = pasangan
        }
    }
    return angka
}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99